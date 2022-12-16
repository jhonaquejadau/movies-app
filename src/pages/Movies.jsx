import React from "react";

import {useFetch} from "../hooks/useFetch"
import { apiConfig } from "../api/apiConfig";
import {TrendingSlider} from "../components/TrendingSlider"
import {MoviesSlider} from "../components/MoviesSlider"

export const Movies = () => {
    const trending = useFetch("https://api.themoviedb.org/3/trending/movie/day?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e")
    const popular = useFetch(apiConfig.category('movie','popular'))
    const rated = useFetch(apiConfig.category('movie','top_rated'))
    const marvelComics = useFetch(apiConfig.search('movie','dc'))

    return ( 
        <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-black to-[#030337] text-slate-200">
            {/* <p>MOVIES PAGE UPCOMING...</p> */}
            <div className="w-[90%] p-2 bg-[rgba(255,255,255,0.1)] flex flex-col">
                <TrendingSlider data={trending} apiConfig={apiConfig} type={'movies'} path={'movie-detail'}/>
            </div>
            <div className="flex flex-col justify-start w-[95%] mx-auto max-[1200px]:w-[100%]">
                <p className="text-2xl capitalize">popular movies</p>
                <MoviesSlider movies={popular} imagePath={apiConfig}/>
                <p className="text-2xl capitalize">top rated movies</p>
                <MoviesSlider movies={rated} imagePath={apiConfig}/>
                <p className="text-2xl capitalize">marvel comics</p>
                <MoviesSlider movies={marvelComics} imagePath={apiConfig}/>
            </div>

        </div>
    )
}