import { Image, ModalImage } from '../../types';

export interface ImageGalleryProps {
  images: Image[];
  openModal: (modalData: ModalImage) => void;
}
