import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../api/apiConfig";

import { MoviesSlider } from "../components/MoviesSlider";
import { CardSlider } from "../components/pages/movie-detail/CardSlider";
import MoviesBanner from "../components/pages/movie-detail/MoviesBanner";
import { MovieVideos } from "../components/pages/movie-detail/MovieVideos";

import 'react-circular-progressbar/dist/styles.css';

export const MovieDetail = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState([]);

    const getMovieDetail = async (id) => {
        const res = await fetch(apiConfig.detailUrl('movie',id,'images,credits,reviews,videos,similar,recommendations'))
        const data = await res.json()
        setMovie(data)
    }

    useEffect(() => {
        getMovieDetail(id)
    }, [id])

    return (
        <section className="flex flex-col w-[100%] h-full text-slate-200">
            <MoviesBanner movie={movie} imagePath={apiConfig}/>
            <div className="bg-gradient-to-b from-black to-purple-900">
                <div className="flex flex-col justify-start w-[90%] mx-auto mt-6 max-[900px]:w-[100%] max-[900px]:p-4">
                    <p className="text-2xl capitalize">billed cast</p>
                    <CardSlider credits={movie.credits && movie.credits.cast} imagePath={apiConfig}/>
                </div>

                <div className="w-[90%] h-full mx-auto">
                    <MovieVideos movie={movie.videos && movie.videos.results}/>
                </div>

                <div className="flex flex-col justify-start w-[90%] mx-auto max-[900px]:w-[100%] max-[900px]:p-4">
                    <p className="text-2xl capitalize">similar movies</p>
                    <MoviesSlider movies={movie.similar && movie.similar.results} imagePath={apiConfig}/>
                    <p className="text-2xl capitalize">recommendations</p>
                    <MoviesSlider movies={movie.recommendations && movie.recommendations.results} imagePath={apiConfig}/>
                </div>
            </div> 
        </section>
    )
}