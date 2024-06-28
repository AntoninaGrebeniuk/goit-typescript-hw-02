import { ModalImage } from '../../types';

export interface ImageCardProps {
  src: string;
  alt: string;
  color: string;
  modalSrc: string;
  likes: number;
  openModal: (data: ModalImage) => void;
}
