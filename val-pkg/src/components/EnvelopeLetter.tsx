import { useRef } from 'react';
import '../styles/envelopeLetter.css';



interface EnvelopeLetterProps {
  isOpen: boolean;
  isMinimized: boolean;
  onEnvelopeClick: () => void;
  onLetterClose: () => void;
}

const EnvelopeLetter: React.FC<EnvelopeLetterProps> = ({
  isOpen,
  isMinimized,
  onEnvelopeClick,
  onLetterClose
}) => {
  const clickSoundRef = useRef<HTMLAudioElement>(null);

  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const handleEnvelopeClick = () => {
    playClickSound();
    onEnvelopeClick();
  };

  // Handle letter close button click
  const handleCloseClick = () => {
    playClickSound();
    onLetterClose();
  };

  return (
    <>
      <audio ref={clickSoundRef} preload="auto">
        <source src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" type="audio/mpeg" />
      </audio>

      <div className={`envelope-container ${isMinimized ? 'minimized' : ''}`}>
        <div 
          className={`envelope ${isOpen ? 'opened' : ''} ${isMinimized ? 'minimized' : ''}`}
          onClick={handleEnvelopeClick}
        >
          <div className="heart-icon">❤️</div>
          
          <div className="paper">
          </div>
          
          {!isOpen && !isMinimized && (
            <div className="letter-preview">Click to open</div>
          )}
          
          <div className="top-flap"></div>
          
          <div className="right-flap"></div>
          <div className="left-flap"></div>
        </div>
      </div>

      {isOpen && (
        <div className={`letter-content ${isOpen ? 'visible' : ''}`}>
          <button className="close-letter" onClick={handleCloseClick}>
            <span className="close-heart">❤️</span>
          </button>
          
          <div className="letter-header">My Dearest Love 💕</div>
          
          <div className="letter-body">
            <p>
              Every moment with you feels like a beautiful dream I never want to end. 
              Your smile lights up my world, and your laugh is my favorite melody. 
              I am so grateful for every memory we've created together, and I can't 
              wait to make a million more.
            </p>
            <p>
              You are my sunshine on cloudy days, my strength when I feel weak, and 
              my greatest adventure. Thank you for being you, and for choosing me 
              every single day.
            </p>
            <p>
              Forever and always, you have my heart. ❤️
            </p>
          </div>
          
          <div className="letter-signature">
            With all my love,
            <br />
            Always 💝
          </div>
        </div>
      )}
    </>
  );
};

export default EnvelopeLetter;