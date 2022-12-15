import React from "react";
import { apiConfig } from "../../../api/apiConfig";

export const TvShowBanner = ({tvShow}) => {
    return (
        <div className="relative w-full h-[100vh]">
            <img className="absolute w-full h-full object-cover" src={apiConfig.imageUrl('original', tvShow.backdrop_path)} alt={tvShow.name} ></img>
                
            <div className="absolute bottom-0 flex justify-center items-center w-full h-full bg-gradient-to-t from-black to-[rgba(0,0,0,0)] ">
                <div className="absolute bottom-0 w-[90%]">
                    <p className="text-7xl font-bold italic max-[1200px]:text-center">{tvShow.name}</p>
                    <p className="text-xl italic max-[1200px]:text-center">{tvShow.tagline}</p>
                    <div className="flex flex-row items-center w-full my-6 max-[1200px]:justify-center">
                        {tvShow.genres.map(genre => {
                            return (
                                <div key={genre.id} className="bg-[rgba(255,255,255,0.2)] mr-4 px-8 rounded">
                                    {genre.name}
                                </div>
                            )
                        })}
                    </div>
                    <p className="w-[90%] text-[1.25rem] opacity-70 mb-[2em] max-[1200px]:w-[100%]">{tvShow.overview}</p>
                </div>
            </div>
        </div>
    )
}