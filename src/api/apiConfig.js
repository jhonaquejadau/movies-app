
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const apiConfig = {
  imageUrl: (size = "original", path) =>
    `https://image.tmdb.org/t/p/${size}${path}`,
  category: (category, type) =>
    `https://api.themoviedb.org/3/${category}/${type}?api_key=${REACT_APP_API_URL}&language=en-US`,
  detailUrl: (category, id, append_to_response) =>
    `https://api.themoviedb.org/3/${category}/${id}?api_key=${REACT_APP_API_URL}&append_to_response=${append_to_response}`,
  search: (type, name) =>
    `https://api.themoviedb.org/3/search/${type}?api_key=${REACT_APP_API_URL}&query=${name}`,
  company: (query) =>
    `https://api.themoviedb.org/3/search/company?api_key=${REACT_APP_API_URL}&query=${query}`,
  genres: (id) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_URL}&with_genres=${id}`,
  trending: (type) =>
    `https://api.themoviedb.org/3/trending/${type}/day?api_key=${REACT_APP_API_URL}`,
};
