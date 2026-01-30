import { useState } from 'react';
import EnvelopeLetter from './components/EnvelopeLetter.tsx';
import AlbumSection from  './components/AlbumSection.tsx'
import PhotoSection from './components/PhotoSection.tsx';
import FooterSection from './components/FooterSection.tsx';
import './styles/App.css';



export interface Photo {
  url: string;
  caption: string;
}

export interface Album {
  id: number;
  title: string;
  photos: Photo[];
  song: {
    title: string;
    artist: string;
    audioUrl?: string;
  };
}

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isLetterRead, setIsLetterRead] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const albums: Album[] = [
    {
      id: 1,
      title: "Our First Moments 💕",
      photos: [
        { url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600", caption: "Our first date" },
        { url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600", caption: "Sunset together" },
        { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600", caption: "Forever in love" },
        { url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600", caption: "You & Me" }
      ],
      song: { title: "Perfect", artist: "Ed Sheeran" }
    },
    {
      id: 2,
      title: "Adventures Together 🌟",
      photos: [
        { url: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600", caption: "Beach days" },
        { url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600", caption: "Mountain high" },
        { url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600", caption: "Paradise found" },
        { url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600", caption: "Dream trip" }
      ],
      song: { title: "A Thousand Years", artist: "Christina Perri" }
    },
    {
      id: 3,
      title: "Sweet Moments 💝",
      photos: [
        { url: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600", caption: "Sweet smiles" },
        { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600", caption: "Candlelight" },
        { url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600", caption: "Tender love" },
        { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600", caption: "Always us" }
      ],
      song: { title: "All of Me", artist: "John Legend" }
    }
  ];

  const handleEnvelopeClick = () => {
    if (!isLetterOpen && !isLetterRead) {
      setIsLetterOpen(true);
    } else if (isLetterRead && !isLetterOpen) {
      setIsLetterOpen(true);
    }
  };

  const handleLetterClose = () => {
    setIsLetterOpen(false);
    setIsLetterRead(true);
  };

  const handleAlbumSelect = (album: Album) => {
    setSelectedAlbum(album);
  };

  const handlePhotoClose = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="app">
      <div className="bg-decorations">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="floating-heart">💕</div>
        ))}
      </div>

      <div className="main-content">
        <EnvelopeLetter
          isOpen={isLetterOpen}
          isMinimized={isLetterRead}
          onEnvelopeClick={handleEnvelopeClick}
          onLetterClose={handleLetterClose}
        />

        {isLetterRead && !selectedAlbum && (
          <AlbumSection
            albums={albums}
            onAlbumSelect={handleAlbumSelect}
          />
        )}

        {selectedAlbum && (
          <PhotoSection
            album={selectedAlbum}
            onClose={handlePhotoClose}
            allAlbums={albums}
            onAlbumChange={handleAlbumSelect}
          />
        )}
      </div>

      <FooterSection />
    </div>
  );
}

export default App;