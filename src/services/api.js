import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "mCzPttG9inWIr-UjYtTJi8KShYhzg07iYxNt3bSp6DA",
      query,
      page,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return response.data;
};
