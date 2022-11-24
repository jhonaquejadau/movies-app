import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {AiFillStar} from "react-icons/ai"

export const MoviesCarousel = ({upcoming, urls}) => {
    const recentMovies = upcoming && upcoming.filter(movie => movie.release_date >= '2022-09-01')

    const data = recentMovies.map(movie => {
        return (
            <div key={movie.id}>
                <div className="h-[600px]">
                    <img className="block m-auto w-[100%]" src={urls.image + movie.backdrop_path} alt={movie.title} />
                </div>
                
                <div className="flex flex-col items-start absolute bottom-0 w-[100%] h-[60%] p-12 bg-gradient-to-t from-black to-[rgba(0,0,0,0)]">
                    <p className="text-7xl mb-2 font-bold">{movie.original_title}</p>
                    <div className="flex flex-row items-center my-2 ">
                        <p className="text-[2rem] mr-4">{movie.release_date }</p>
                        <div className="flex flex-roe justify-center items-center border-2 p-2">
                            <AiFillStar className="text-orange-400 text-3xl"/>
                            <p className="text-2xl font-bold">{movie.vote_average}</p>
                        </div>
                    </div>
                    <div className="w-[50%] text-left text-[1rem]">{movie.overview }</div>
                </div>
            </div>
        )
    })
    
    return (
        <Carousel
            transitionTime={10}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
        >
            {data}
        </Carousel>
    )
}