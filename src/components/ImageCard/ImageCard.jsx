import s from "./ImageCard.module.css";

const ImageCard = ({ description, likes, urls, user, handleOpenModal }) => {
  return (
    <div className={s.imageWrapper}>
      <img
        src={urls.small}
        alt={description}
        onClick={() => {
          handleOpenModal({
            description: description,
            likes: likes,
            url: urls.regular,
            user: user.name,
            userPhoto: user.profile_image.small,
          });
        }}
      />
    </div>
  );
};

export default ImageCard;
