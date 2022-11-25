import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../api/apiConfig";

import { CardSlider } from "../components/pages/movie-detail/CardSlider";
import { MoviesSlider } from "../components/MoviesSlider";
import MoviesBanner from "../components/pages/movie-detail/MoviesBanner";
import { MovieVideos } from "../components/pages/movie-detail/MovieVideos";

import 'react-circular-progressbar/dist/styles.css';

export const MovieDetail = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [credits, setCredits] = useState([]);
    const [videos, setVideos] = useState([]);

    const getMovieDetail = async (id) => {
        const res = await fetch(apiConfig.detailUrl('movie',id,'images,credits,reviews,videos,similar,recommendations'))
        const data = await res.json()
        // const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`)
        // const data = await res.json()

        // const resSimilar = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US&page=1`)
        // const dataSimilar = await resSimilar.json()

        // const resCredits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`);
        // const dataCredits = await resCredits.json();

        // const resVideos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US&append_to_response=videos`)
        // const dataVideos = await resVideos.json()

        // setMovie(data)
        // setSimilarMovies(dataSimilar.results)
        // setCredits(dataCredits)
        // setVideos(dataVideos.results)
        setMovie(data)
    }

    useEffect(() => {
        getMovieDetail(id)
    }, [id])

    console.log(movie)


    return (
        <section className="flex flex-col w-[100%] h-full text-slate-200">
            {movie ? 
            <>
                <MoviesBanner movie={movie} imagePath={apiConfig}/>
                <div className="bg-gradient-to-b from-black to-purple-900">
                    <div className="flex flex-col justify-start w-[90%] mx-auto mt-6 max-[900px]:w-[100%] max-[900px]:p-4">
                        <p className="text-2xl capitalize">billed cast</p>
                        <CardSlider credits={movie.credits && movie.credits.cast} imagePath={apiConfig}/>
                    </div>

                    <div className="w-[90%] border-2 mx-auto">
                        <MovieVideos movie={movie.videos && movie.videos}/>
                    </div>

                    <div className="flex flex-col justify-start w-[90%] mx-auto max-[900px]:w-[100%] max-[900px]:p-4">
                        <p className="text-2xl capitalize">similar movies</p>
                        <MoviesSlider movies={movie.similar && movie.similar.results} imagePath={apiConfig}/>
                        <p className="text-2xl capitalize">recommendations</p>
                        <MoviesSlider movies={movie.recommendations && movie.recommendations.results} imagePath={apiConfig}/>
                    </div>
                </div> 
            </> :
            <>Loading...</>
            }
        </section>
    )
}