import React, {useContext, useState} from "react";
import { ContextConsumer } from "../context/Context";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { CircularProgressbar } from 'react-circular-progressbar';
import {CgPentagonUp} from "react-icons/cg"
import {AiOutlineStar} from "react-icons/ai"
import {FaList} from "react-icons/fa"
import 'react-circular-progressbar/dist/styles.css';


export const MovieInfo = () => {

    const {urls} = useContext(ContextConsumer);
    const {id} = useParams();
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`
    const similarUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US&page=1`
    
    const movie = useFetch(movieUrl, true)
    const similarMovies = useFetch(similarUrl, true)

    // const handleMovie = (id) => {
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // }
    
    return (
        <div className="flex flex-col w-[100%] h-full text-slate-200">

            <div className="relative flex justify-center items-center">
                
                <div className="w-full h-[700px]">
                    <img className="w-[100%] h-[100%] opacity-40 object-cover" src={urls.image + movie.backdrop_path} alt={movie.original_title} />
                </div>
                
                <div className="flex flex-row items-center absolute bottom-0 p-4 w-[100%] h-[80%] px-[10em] bg-gradient-to-t from-black to-[rgba(0,0,0,0)]]">

                    <div className=" flex flex-col justify-between items-center w-[400px] h-full mr-10 mb-[2em]">
                        <img className="w-[100%] object-fit mb-4" src={urls.image + movie.poster_path} alt={movie.original_title} />
                        <div className="w-full h-full bg-orange-500 rounded text-center ">Streaming On</div>
                    </div>

                    <div className="w-full h-full p-4 mb-[2em] ">
                        <p className="text-[2.5rem] font-bold">{movie.original_title}</p>
                        
                        <div className="flex flex-row justify-evenly items-center w-[80%] text-xl bg-[rgba(255,255,255,0.4)]">
                            <p>{movie.release_date}</p>
                            {movie.genres && movie.genres.map(gen => <p>{gen.name}</p>)}
                            <p>{movie.runtime} min</p>
                        </div>

                        <div className="flex flex-row justify-evenly items-center w-[80%] border-2 border-[rgba(255,255,255,0.4)] py-1 px-4">
                            <div className="w-[50px] h-[50px]">
                                <CircularProgressbar value={movie.vote_average/10} maxValue={1} text={`${movie.vote_average*10}%`}/>
                            </div>
                            {movie.production_companies && 
                                movie.production_companies.filter(comp => comp.logo_path !== null).map((logo, index) => {
                                    return (
                                        <div key={index} className=" w-[150px] h-full">
                                            <img  className="w-full h-full object-contain" src={urls.image + logo.logo_path} alt={logo.name}/>
                                        </div>
                                    )
                                })
                            }
                            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue-900">
                                <CgPentagonUp className="text-3xl text-white"/>
                            </div>
                            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue-900">
                                <AiOutlineStar className="text-xl text-white"/>
                            </div>
                            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue-900">
                                <FaList className="text-xl text-white"/>
                            </div>
                        </div>

                        <p className="italic text-lg my-4">{movie.tagline}</p>
                        <p className="capitalize font-bold text-xl">overview</p>
                        <p className="w-[100%]">{movie.overview}</p>
                    
                    </div>

                </div>

            </div>

            <div className="flex flex-col justify-start w-[90%] p-4 mx-auto">
                <p className="text-white text-3xl capitalize mb-4">similar movies</p>
                <div className="grid grid-cols-6 gap-2">
                    {similarMovies.results && similarMovies.results.map(similarMovie => {
                        return (
                            <Link index to={`/movie-detail/${similarMovie.id}`}>
                                <div key={similarMovie.id} className="w-[100%] hover:scale-[1.02]">
                                    <img src={urls.image + similarMovie.poster_path} alt={similarMovie.original_title} />
                                    <p>{similarMovie.original_title}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}