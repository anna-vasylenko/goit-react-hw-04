import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearchSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.search.value.trim();
    if (value === "") {
      return toast.error("Please enter a search term to find images.", {
        duration: 2000,
        position: "top-center",
        // className: "",
      });
    }

    onSearchSubmit(value);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </div>
  );
};

export default SearchBar;
