import GalleryItems from "./GalleryItems";

const GalleryGrid = ({ preview = false }: { preview?: boolean }) => {
  return (
    <div>
      <GalleryItems preview={preview} />
    </div>
  );
};

export default GalleryGrid;
