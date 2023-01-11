import React from "react";
import { apiConfig } from "../../../api";

const MoviesBanner = ({ movie }) => {
  return (
    <div className="relative w-full h-[100vh] text-slate-200">
      <img
        className="asolute w-full h-full object-cover"
        src={apiConfig.imageUrl("original", movie.backdrop_path)}
        alt={movie.original_title}
      />

      <div className="flex flex-col absolute bottom-0 p-10 bg-gradient-to-t from-black to-[rgba(0,0,0,0)]] max-[1260px]:flex-col lg:px-20">
        <p className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {movie.original_title}
        </p>
        <p className="italic text-xl my-4">{movie.tagline}</p>
        <p className="capitalize font-bold text-xl">overview</p>
        <p className="w-[90%] text-base font-[400] mb-4 xl:text-xl">
          {movie.overview}
        </p>

        <div className="flex flex-row justify-evenly items-center w-[90%] text-base bg-[rgba(255,255,255,0.4)] max-[600px]:text-[0.75rem] max-[1003px]:flex-col">
          <p>{movie.release_date}</p>
          <div className="flex flex-row justify-center items-center">
            {movie.genres &&
              movie.genres.map((gen, index) => (
                <p className="mx-2 font-bold" key={index}>
                  {gen.name}
                </p>
              ))}
          </div>
          <p>{movie.runtime} min</p>
        </div>

      </div>
    </div>
  );
};

export default MoviesBanner;
