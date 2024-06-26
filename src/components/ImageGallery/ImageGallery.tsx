import { ImageCard } from "../ImageCard/ImageCard";

import css from "./styles.module.css";

export const ImageGallery = ({ images, openModal }) => {
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
              onImageClick={openModal}
            />
          </li>
        )
      )}
    </ul>
  );
};
