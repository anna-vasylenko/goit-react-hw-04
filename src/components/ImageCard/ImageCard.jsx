import s from "./ImageCard.module.css";

const ImageCard = ({ description, urls }) => {
  return (
    <div className={s.imageWrapper}>
      <img src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
