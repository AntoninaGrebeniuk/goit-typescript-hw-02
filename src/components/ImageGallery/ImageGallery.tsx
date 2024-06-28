import { FC } from 'react';
import { ImageCard } from '../ImageCard/ImageCard';
import css from './styles.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

export const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(
        ({ id, color, alt_description, urls: { small, regular }, likes }) => (
          <li className={css.listItem} key={id}>
            <ImageCard
              src={small}
              alt={alt_description}
              color={color}
              modalSrc={regular}
              likes={likes}
              openModal={openModal}
            />
          </li>
        )
      )}
    </ul>
  );
};
