import { useRef } from 'react';
import type { Album } from '../App.tsx';
import '../styles/albumSection.css';


interface AlbumSectionProps {
  albums: Album[];
  onAlbumSelect: (album: Album) => void;
}

const AlbumSection: React.FC<AlbumSectionProps> = ({ albums, onAlbumSelect }) => {
  const clickSoundRef = useRef<HTMLAudioElement>(null);

  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const handleAlbumClick = (album: Album) => {
    playClickSound();
    onAlbumSelect(album);
  };

  return (
    <div className="album-section">
      <audio ref={clickSoundRef} preload="auto">
        <source src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" type="audio/mpeg" />
      </audio>

      <div className="album-section-header">
        <h1 className="album-main-title">Memories With Lola</h1>
        <p className="album-subtitle">Click ▶ to view our memories</p>
      </div>

      <div className="albums-grid">
        {albums.map((album, index) => (
          <div key={album.id} className="album-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="album-cover">
              <div className="album-preview-photo">
                <img src={album.photos[0]?.url} alt={album.title} />
              </div>
              
              <div className="album-number">Album {album.id}</div>
            </div>

            {/* Album info */}
            <div className="album-info">
              <h3 className="album-title">{album.title}</h3>
              <p className="album-photo-count">{album.photos.length} photos</p>
              <p className="album-song-info">
                🎵 {album.song.title} - {album.song.artist}
              </p>
            </div>

            <button 
              className="album-play-button"
              onClick={() => handleAlbumClick(album)}
              aria-label={`Play ${album.title}`}
            >
              <span className="play-icon">▶</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;