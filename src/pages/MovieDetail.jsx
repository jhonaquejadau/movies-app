import React, {useContext, useState, useEffect} from "react";
import { ContextConsumer } from "../context/Context";
import { useParams } from "react-router-dom";

import { CardSlider } from "../components/pages/movie-detail/CardSlider";
import { MoviesSlider } from "../components/MoviesSlider";
import MoviesBanner from "../components/pages/movie-detail/MoviesBanner";
import { MovieVideos } from "../components/pages/movie-detail/MovieVideos";

import 'react-circular-progressbar/dist/styles.css';

export const MovieDetail = () => {

    const {urls} = useContext(ContextConsumer);
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [credits, setCredits] = useState([]);
    const [videos, setVideos] = useState([]);

    const getMovieDetail = async (id) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`)
        const data = await res.json()

        const resSimilar = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US&page=1`)
        const dataSimilar = await resSimilar.json()

        const resCredits = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`);
        const dataCredits = await resCredits.json();

        const resVideos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US&append_to_response=videos`)
        const dataVideos = await resVideos.json()

        setMovie(data)
        setSimilarMovies(dataSimilar.results)
        setCredits(dataCredits)
        setVideos(dataVideos.results)
    }

    useEffect(() => {
        getMovieDetail(id)
    }, [id])

    return (
        <div className="flex flex-col w-[100%] h-full">
            <MoviesBanner movie={movie} urls={urls}/>

            <div className="flex flex-col justify-start w-[90%] mx-auto mt-6">
                <p className="text-2xl capitalize">billed cast</p>
                <CardSlider credits={credits} urls={urls}/>
            </div>

            <div className="w-[90%] border-2 mx-auto">
                <MovieVideos movie={videos}/>
            </div>

            <div className="flex flex-col justify-start w-[90%] mx-auto">
                <p className="text-2xl capitalize">similar movies</p>
                <MoviesSlider movies={similarMovies} urls={urls}/>
            </div>

        </div>
    )
}