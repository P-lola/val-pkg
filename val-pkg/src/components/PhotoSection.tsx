import { useState, useRef, useEffect } from 'react';
import type { Album } from '../App.tsx';
import '../styles/photoSection.css';


interface PhotoSectionProps {
  album: Album;
  onClose: () => void;
  allAlbums: Album[];
  onAlbumChange: (album: Album) => void;
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ 
  album, 
  onClose, 
  allAlbums,
  onAlbumChange 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const clickSoundRef = useRef<HTMLAudioElement>(null);

  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const handleBackClick = () => {
    playClickSound();
    setIsPlaying(false);
    onClose();
  };

  const handlePrevAlbum = () => {
    playClickSound();
    const currentIndex = allAlbums.findIndex(a => a.id === album.id);
    const prevIndex = currentIndex === 0 ? allAlbums.length - 1 : currentIndex - 1;
    setIsPlaying(false);
    onAlbumChange(allAlbums[prevIndex]);
  };

  const handleNextAlbum = () => {
    playClickSound();
    const currentIndex = allAlbums.findIndex(a => a.id === album.id);
    const nextIndex = currentIndex === allAlbums.length - 1 ? 0 : currentIndex + 1;
    setIsPlaying(false);
    onAlbumChange(allAlbums[nextIndex]);
  };

  const handlePlayToggle = () => {
    playClickSound();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [album.id]);

  return (
    <div className="photo-section">
      <audio ref={clickSoundRef} preload="auto">
        <source src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" type="audio/mpeg" />
      </audio>

      <button className="back-button" onClick={handleBackClick}>
        <span className="back-arrow">←</span>
        <span className="back-text">Back to Albums</span>
      </button>

      <div className="photo-section-header">
        <h1 className="photo-album-title">{album.title}</h1>
      </div>

      <div className="photos-container">
        {album.photos.map((photo, index) => (
          <div 
            key={index} 
            className="photo-frame"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="photo-inner">
              <img src={photo.url} alt={photo.caption} />
            </div>
            <div className="photo-caption">{photo.caption}</div>
          </div>
        ))}
      </div>

      <div className="album-navigation">
        <button 
          className="nav-arrow nav-arrow-prev" 
          onClick={handlePrevAlbum}
          aria-label="Previous album"
        >
          ←
        </button>
        
        <button 
          className="nav-arrow nav-arrow-next" 
          onClick={handleNextAlbum}
          aria-label="Next album"
        >
          →
        </button>
      </div>

      <div className="music-player">
        <button 
          className="play-button" 
          onClick={handlePlayToggle}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <div className="song-info">
          <div className="song-title">{album.song.title}</div>
          <div className="song-artist">{album.song.artist}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;