import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  ErrorMessage,
  ImageGallery,
  ImageModal,
  LoadMoreBtn,
  Loader,
  SearchBar,
} from './components';

import { fetchImages } from './services/api';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!query) return;
    const asyncWrapper = async () => {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const { results, total_pages, total } = await fetchImages(query, page);

        if (!total) return;

        setImages(prev => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [page, query]);

  const getQuery = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const onLoadMore = () => setPage(p => p + 1);

  const toggleModal = (modalData = null) => setModalData(modalData);
  const closeModal = () => toggleModal();

  return (
    <>
      <SearchBar getQuery={getQuery} />
      {!!images.length && (
        <ImageGallery images={images} openModal={toggleModal} />
      )}
      {!isLoading && totalPages > page && <LoadMoreBtn onClick={onLoadMore} />}
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage />}
      {modalData && <ImageModal onClose={closeModal} data={modalData} />}
      <Toaster />
    </>
  );
};
