function ImageItem({ image, index, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(index);
    }
  };

  return (
    <img
      src={image.url}
      alt={image.alt}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ opacity: isSelected ? 1 : 0.5 }}
      role="button"
      aria-label={`View ${image.alt}`}
    />
  );
}

export default ImageItem;