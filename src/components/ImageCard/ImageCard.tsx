import { HiOutlineThumbUp } from "react-icons/hi";
import css from "./styles.module.css";

export const ImageCard = ({
  src,
  alt,
  color,
  modalSrc,
  onImageClick,
  likes,
}) => {
  return (
    <div className={css.wrapper} style={{ background: color }}>
      <img
        className={css.image}
        src={src}
        alt={alt}
        onClick={() => onImageClick({ src: modalSrc, alt })}
      />
      <span className={css.likes}>
        <span>{likes}</span>
        <HiOutlineThumbUp size={20} color="#dddddd" />
      </span>
    </div>
  );
};
