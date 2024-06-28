import { FC } from 'react';
import { HiOutlineThumbUp } from 'react-icons/hi';
import css from './styles.module.css';
import { ImageCardProps } from './ImageCard.types';

export const ImageCard: FC<ImageCardProps> = ({
  src,
  alt,
  color,
  modalSrc,
  openModal,
  likes,
}) => {
  return (
    <div className={css.wrapper} style={{ background: color }}>
      <img
        className={css.image}
        src={src}
        alt={alt}
        onClick={() => openModal({ src: modalSrc, alt })}
      />
      <span className={css.likes}>
        <span>{likes}</span>
        <HiOutlineThumbUp size={20} color="#dddddd" />
      </span>
    </div>
  );
};
