import { useState, useEffect, createContext } from "react";

const GenreContext = createContext();

const GenreContextProvider = ({children}) => {
  const [genreId, setGenreId] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&with_genres=${genreId}`);
      const data = await res.json();
      setMovies(data.results)
    })();
  }, [genreId]);

  return <GenreContext.Provider value={{movies,genreId,setGenreId}}>{children}</GenreContext.Provider>;
};

export {GenreContextProvider, GenreContext as GenreContextConsumer}
