export interface Image {
  id: string;
  color: string;
  alt_description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
}

export type ModalImage = {
  src?: string;
  alt?: string;
};
