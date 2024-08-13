import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={s.galleryList}>
      {images?.map((item) => (
        <li
          key={item.id}
          className={s.galleryItem}
          onClick={() => {
            handleOpenModal({
              description: item.description,
              likes: item.likes,
              url: item.urls.regular,
              user: item.user.name,
              userPhoto: item.user.profile_image.small,
            });
          }}
        >
          <ImageCard {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
