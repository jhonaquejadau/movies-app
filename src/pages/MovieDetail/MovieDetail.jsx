import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../../api/apiConfig";
import { MoviesSlider, Loader } from "../../components";
import { CardSlider, MoviesBanner, MovieVideos } from "../components";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovieDetail = async (id) => {
    const res = await fetch(
      apiConfig.detailUrl(
        "movie",
        id,
        "images,credits,reviews,videos,similar,recommendations"
      )
    );
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovieDetail(id);
  }, [id]);

  if (movie.length === 0) return <Loader />;

  return (
    <section className="flex flex-col w-full h-full text-slate-200 text-xl font-[600]">
      <MoviesBanner movie={movie} />
      <div className="w-full h-full bg-gradient-to-b from-black to-[#030337]">
        <CardSlider credits={movie.credits && movie.credits.cast} />

        <div className="w-full h-full mx-auto my-[2em] px-4 lg:px-10">
          <p className=" mb-2">Trailers</p>
          <MovieVideos movie={movie.videos && movie.videos.results} />
        </div>

        <div className="flex flex-col justify-start mx-auto w-full px-4 lg:px-10">
          <p className="capitalize">similar movies</p>
          <MoviesSlider
            movies={movie.similar && movie.similar.results}
            imagePath={apiConfig}
          />
          <p className="capitalize">recommendations</p>
          <MoviesSlider
            movies={movie.recommendations && movie.recommendations.results}
            imagePath={apiConfig}
          />
        </div>
      </div>
    </section>
  );
};
