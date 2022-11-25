import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import {AiFillStar} from "react-icons/ai"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const MoviesCarousel = ({upcoming, apiConfig}) => {
    const recentMovies = upcoming && upcoming.filter(movie => movie.release_date >= '2022-05-01')

    const data = recentMovies.map(movie => {
        return (
            <div key={movie.id}>
                <img className="relative block m-auto w-[100%] h-[700px] object-cover" src={apiConfig.imageUrl('original', movie.backdrop_path)} alt={movie.title} />
                
                <div className="flex flex-col items-start absolute bottom-0 p-12 text-slate-200 bg-gradient-to-t from-black to-[rgba(0,0,0,0)] w-[100%] h-[60%] max-[900px]:h-[45%]">
                    <p className="text-5xl font-bold mt-[2em] max-[1200px]:text-2xl">{movie.original_title}</p>
                    <div className="flex flex-row items-center my-2">
                        <p className="text-[1.5rem] mr-4">{movie.release_date }</p>
                        <div className="flex flex-row justify-center items-center border-2 px-2">
                            <AiFillStar className="text-orange-400 text-xl"/>
                            <p className="text-xl font-bold">{movie.vote_average}</p>
                        </div>
                    </div>
                    <div className="w-[50%] text-left max-[900px]:hidden">{movie.overview }</div>
                    <Link to={`/movie-detail/${movie.id}`}>
                        <button className="px-6 py-2 font-bold text-xl uppercase bg-[rgba(255,255,255,0.3)] rounded mt-2 hover:border-2 hover:border-white">more info</button>
                    </Link>
                </div>
            </div>
        )
    })
    
    return (
        <Carousel
            transitionTime={2000}
            interval={5000}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
        >
            {data}
        </Carousel>
    )
}