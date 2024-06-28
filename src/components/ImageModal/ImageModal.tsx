import { FC } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';
import css from './styles.module.css';
import { ImageModalProps } from './ImageModal.types';

Modal.setAppElement('#root');

export const ImageModal: FC<ImageModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <Modal
      style={customStyles}
      isOpen={!!data}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <div className={css.box}>
        <button className={css.button} onClick={onClose}>
          <IoIosClose size={26} />
        </button>
        <div>
          <img src={data?.src} alt={data?.alt} />
        </div>
      </div>
    </Modal>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    padding: '0',
    background: 'transparent',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
};
