import React from "react";

import { apiConfig } from "../../api/apiConfig";
import { MoviesSlider, TrendingSlider } from "../../components";
import { useFetch } from "../../hooks/useFetch";

const Movies = () => {
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  // const genres = useFetch("https://api.themoviedb.org/3/genre/list?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US")
  const trending = useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e"
  );
  const popular = useFetch(apiConfig.category("movie", "popular"));
  const rated = useFetch(apiConfig.category("movie", "top_rated"));
  const marvelComics = useFetch(apiConfig.search("movie", "dc"));
  console.log(genres);

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-black to-[#030337] text-slate-200">
      <div className="flex flex-row justify-evenly items-center w-[90%] overflow-auto mt-[5em]">
        {genres.map((genre) => {
          return (
            <div key={genre.id} className="bg-[rgba(255,255,255,0.2)] rounded">
              <p className="p-2">{genre.name}</p>
            </div>
          );
        })}
      </div>
      <div className="w-[90%] p-2 bg-[rgba(255,255,255,0.1)] flex flex-col mt-[2em]">
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
        <p className="text-2xl capitalize">marvel comics</p>
        <MoviesSlider movies={marvelComics} imagePath={apiConfig} />
      </div>
    </div>
  );
};

export default Movies;
