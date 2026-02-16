function Gallery({ image, onNext, onPrev }) {
  return (
    <div className="viewer">
      <button 
        id="prevBtn" 
        className="nav-btn nav-btn-left"
        onClick={onPrev}
        aria-label="Previous image"
      >
        ‹
      </button>
      
      <img 
        id="mainImage" 
        src={image.url} 
        alt={image.alt} 
      />
      
      <button 
        id="nextBtn" 
        className="nav-btn nav-btn-right"
        onClick={onNext}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}

export default Gallery;
