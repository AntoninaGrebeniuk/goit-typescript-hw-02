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
import { Image } from './types';
import { FetchResponse } from './App.types';

export const App = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Image | null>(null);

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    if (!query) return;
    const asyncWrapper = async () => {
      setIsLoading(true);
      setErrorMessage(false);
      try {
        const { results, total_pages, total } =
          await fetchImages<FetchResponse>(query, page);

        if (!total) return;

        setImages(prev => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [page, query]);

  const getQuery = (query: string): void => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const onLoadMore = () => setPage(p => p + 1);

  const toggleModal = (modalData: Image | null = null) =>
    setModalData(modalData);
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
