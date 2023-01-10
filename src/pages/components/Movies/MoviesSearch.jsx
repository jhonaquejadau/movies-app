import React, { useContext } from "react";
import { GenreContextConsumer } from "../../Movies/context";
import { apiConfig } from "../../../api";

const MoviesSearch = () => {
  const { movies } = useContext(GenreContextConsumer);
  return (
    <div className="w-[95%] h-full">
      <div className="w-[95%] border-b-2 py-2 my-4">
        {!movies && (
          <p className="font-bold text-xl text-center text-slate-600">
            Select a genre or see default list movies below
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-6">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="hover:scale-[1.02]">
              <img
                className="w-full h-full"
                src={apiConfig.imageUrl("original", movie.poster_path)}
                alt={movie.original_title}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesSearch;
