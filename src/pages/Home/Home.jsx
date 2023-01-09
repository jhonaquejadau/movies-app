import React from "react";

import { apiConfig } from "../../api/apiConfig";
import { useFetch } from "../../hooks/useFetch";

import { MoviesCarousel } from "../../components/MoviesCarousel";
import { MoviesSlider } from "../../components/MoviesSlider";
import { TrendingSlider } from "../../components/TrendingSlider";
import { MultiSearch } from "../../components/pages/home/MultiSearch";
import { TvShowSlider } from "../../components/TvShowSlider";

function Home() {
  const upcoming = useFetch(apiConfig.category("movie", "upcoming"));
  const popular = useFetch(apiConfig.category("movie", "popular"));
  const rated = useFetch(apiConfig.category("movie", "top_rated"));
  const tvPopular = useFetch(apiConfig.category("tv", "popular"));
  const tvRated = useFetch(apiConfig.category("tv", "top_rated"));
  const trendingMovies = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e"
  );
  const trendingTvShows = useFetch(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e"
  );

  return (
    <div className="flex flex-col items-center w-[100%] h-full mx-auto text-slate-200">
      <section>
        <div className="w-[100%]">
          <MoviesCarousel upcoming={upcoming} apiConfig={apiConfig} />
        </div>
      </section>
      {/* [#06070e] */}
      <section className="w-full h-full flex flex-col items-center bg-gradient-to-b from-black to-[#030337]">
        <MultiSearch />

        <div className="w-[90%] p-2 bg-[rgba(255,255,255,0.1)] flex flex-col">
          <TrendingSlider
            data={trendingMovies}
            apiConfig={apiConfig}
            type={"movies"}
            path={"movie-detail"}
          />
        </div>

        <div className="flex flex-col w-[90%] p-4 max-[900px]:w-[100%] max-[900px]:p-4">
          <p className="text-2xl text-left mb-4 w-fit capitalize">
            what's popular
          </p>
          <MoviesSlider movies={popular} imagePath={apiConfig} />
          <p className="text-2xl text-left mb-4 w-fit capitalize">
            what's upcoming
          </p>
          <MoviesSlider movies={upcoming} imagePath={apiConfig} />
          <p className="text-2xl text-left mb-4 w-fit capitalize">
            top rated movies
          </p>
          <MoviesSlider movies={rated} imagePath={apiConfig} />
        </div>

        <div className="w-[90%] p-2 bg-[rgba(255,255,255,0.1)] flex flex-col">
          <TrendingSlider
            data={trendingTvShows}
            apiConfig={apiConfig}
            type={"tv shows"}
            path={"tv-show-detail"}
          />
        </div>
        <div className="flex flex-col w-[90%] p-4 max-[900px]:w-[100%] max-[900px]:p-4">
          <p className="text-2xl text-left mb-4 w-fit capitalize">
            popular series
          </p>
          <TvShowSlider tvShows={tvPopular} imagePath={apiConfig} />
          <p className="text-2xl text-left mb-4 w-fit capitalize">
            top rated series
          </p>
          <TvShowSlider tvShows={tvRated} imagePath={apiConfig} />
        </div>
      </section>
    </div>
  );
}

export default Home;
