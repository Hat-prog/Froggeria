import ImageItem from './Images';

function ThumbnailList({ images, selectedIndex, onSelectImage }) {
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <ImageItem
          key={index}
          image={image}
          index={index}
          isSelected={index === selectedIndex}
          onSelect={onSelectImage}
        />
      ))}
    </div>
  );
}

export default ThumbnailList;