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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const handleSearchSubmit = (searchValue) => {
    setImages([]);
    setPage(1);
    setQuery(searchValue);
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
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

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {showLoadMore && <LoadMoreBtn handleClick={handleClick} />}
    </>
  );
}

export default App;
