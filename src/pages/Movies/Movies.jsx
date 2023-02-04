import React from "react";

import { apiConfig } from "../../api/apiConfig";
import { Slider, TrendingSlider, MoviesCarousel } from "../../components";
import { useFetch } from "../../hooks/useFetch";
import { Genres, MoviesSearch } from "../components";
import { GenreContextProvider } from "./context";

const Movies = () => {
  const trending = useFetch(apiConfig.trending('movies'));
  const popular = useFetch(apiConfig.category("movie", "popular"));
  const rated = useFetch(apiConfig.category("movie", "top_rated"));
  const dcComics = useFetch(apiConfig.search("movie", "dc"));
  const marvelComics = useFetch(apiConfig.search("movie", "marvel"));
  const warner = useFetch(apiConfig.search("movie", "warner bros"));
  const disney = useFetch(apiConfig.search("movie", "disney"));


  return (
    <GenreContextProvider>
      <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-black to-[#030337] text-slate-200">
        <div className="w-[100%]">
          <MoviesCarousel upcoming={popular} apiConfig={apiConfig} />
        </div>
        <Genres />
        <MoviesSearch />
        <div className="w-[100%] bg-[rgba(255,255,255,0.1)] flex flex-col my-[2em]">
          <TrendingSlider
            data={trending}
            apiConfig={apiConfig}
            type={"movies"}
            path={"movie-detail"}
          />
        </div>
        <div className="flex flex-col justify-start w-[95%] mx-auto max-[1200px]:w-[100%]">
          <p className="text-xl font-bold mb-2 capitalize">popular movies</p>
          <Slider movies={popular} />
          <p className="text-xl font-bold mb-2 capitalize">top rated movies</p>
          <Slider movies={rated} />
          <p className="text-xl font-bold mb-2 capitalize">dc comics</p>
          <Slider movies={dcComics} />
          <p className="text-xl font-bold mb-2 capitalize">marvel universe</p>
          <Slider movies={marvelComics} />
          <p className="text-xl font-bold mb-2 capitalize">warner world</p>
          <Slider movies={warner} />
          <p className="text-xl font-bold mb-2 capitalize">disney universe</p>
          <Slider movies={disney} />
        </div>
      </div>
    </GenreContextProvider>
  );
};

export default Movies;
