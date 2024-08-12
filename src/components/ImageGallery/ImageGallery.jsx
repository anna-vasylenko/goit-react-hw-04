import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.galleryList}>
      {images?.map((item) => (
        <li key={item.id}>
          <ImageCard {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
