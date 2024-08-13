import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);

        if (!data.results.length) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...data.results]);
        setShowLoadMore(page < data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearchSubmit = (searchValue) => {
    setImages([]);
    setPage(1);
    setQuery(searchValue);
    setShowLoadMore(false);
    setIsError(false);
    setIsEmpty(false);
  };

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const closeModal = () => {
    setModalContent({});
    setIsOpenModal(false);
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsOpenModal(true);
  };

  return (
    <>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      <ImageGallery images={images} handleOpenModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage text={"Something went wrong!"} />}
      {isEmpty && (
        <ErrorMessage
          text={
            "Sorry, there are no images matching your search query. Please try again!"
          }
        />
      )}
      {showLoadMore && <LoadMoreBtn handleClick={handleClick} />}
      <ImageModal
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        {...modalContent}
      />
    </>
  );
}

export default App;
