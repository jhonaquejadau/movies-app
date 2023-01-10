import React from "react";

import { apiConfig } from "../../api/apiConfig";
import { MoviesSlider, TrendingSlider } from "../../components";
import { Genres } from "../components";
import { useFetch } from "../../hooks/useFetch";

const Movies = () => {
  const trending = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e"
  );
  const popular = useFetch(apiConfig.category("movie", "popular"));
  const rated = useFetch(apiConfig.category("movie", "top_rated"));
  const dcComics = useFetch(apiConfig.search("movie", "dc"));
  const marvelComics = useFetch(apiConfig.search("movie", "marvel"));
  const warner = useFetch(apiConfig.search("movie", "warner bros"));

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-black to-[#030337] text-slate-200">
      <Genres/>
      <div className="w-[100%] bg-[rgba(255,255,255,0.1)] flex flex-col my-[2em]">
        <TrendingSlider
          data={trending}
          apiConfig={apiConfig}
          type={"movies"}
          path={"movie-detail"}
        />
      </div>
      <div className="flex flex-col justify-start w-[95%] mx-auto max-[1200px]:w-[100%]">
        <p className="text-2xl capitalize">popular movies</p>
        <MoviesSlider movies={popular} imagePath={apiConfig} />
        <p className="text-2xl capitalize">top rated movies</p>
        <MoviesSlider movies={rated} imagePath={apiConfig} />
        <p className="text-2xl capitalize">dc comics</p>
        <MoviesSlider movies={dcComics} imagePath={apiConfig} />
        <p className="text-2xl capitalize">marvel universe</p>
        <MoviesSlider movies={marvelComics} imagePath={apiConfig} />
        <p className="text-2xl capitalize">warner world</p>
        <MoviesSlider movies={warner} imagePath={apiConfig} />
      </div>
    </div>
  );
};

export default Movies;
