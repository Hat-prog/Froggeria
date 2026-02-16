import { useState, useEffect } from 'react';
import Gallery from './Gallery';  
import ThumbnailList from './Thumbnails'; 

function App() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fetch images when app loads
  useEffect(() => {
    fetch('https://week-6-api.vercel.app/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  // Next button
  const handleNext = () => {
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  // Previous button
  const handlePrev = () => {
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  // Don't show anything until images load
  if (images.length === 0) {
    return <div>Loading frogs...</div>;
  }

  return (
    <div className="gallery">
      <Gallery 
        image={images[selectedIndex]} 
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <ThumbnailList 
        images={images}
        selectedIndex={selectedIndex}
        onSelectImage={setSelectedIndex}
      />
    </div>
  );
}

export default App;
