import React from "react";

import { CircularProgressbar } from 'react-circular-progressbar';
import {CgPentagonUp} from "react-icons/cg"
import {AiOutlineStar} from "react-icons/ai"
import {FaList} from "react-icons/fa"

export default function MoviesBanner({movie, imagePath}) {
    return (
        <div className="flex flex-row relative justify-center items-center text-slate-200">
            <div className="w-full h-[800px] max-[1260px]:h-[1000px]">
                <img className="w-[100%] h-[100%] opacity-80 object-cover" src={imagePath.imageUrl('original',movie.backdrop_path)} alt={movie.original_title} />
            </div>
            
            <div className="flex flex-row items-center absolute bottom-0 w-[100%] h-[100%] px-[10em] bg-gradient-to-t from-black to-[rgba(0,0,0,0)]] max-[1260px]:flex-col">

                <div className=" flex flex-col items-center mr-[4em] max-[1260px]:mt-16">
                    <div className="w-[300px]">
                        <img className="w-full h-full object-fit" src={imagePath.imageUrl('original',movie.poster_path)} alt={movie.original_title} />
                    </div>
                    <div className="w-full h-full bg-orange-500 p-2 text-center ">Streaming On</div>
                </div>

                <div className="w-full p-4 border-2 rounded max-[1260px]:mt-4 max-[1260px]:flex max-[1260px]:flex-col max-[1260px]:items-center">
                    <p className="text-[2.5rem] font-bold">{movie.original_title}</p>
                    
                    <div className="flex flex-row justify-evenly items-center w-[80%] text-xl bg-[rgba(255,255,255,0.4)]">
                        <p>{movie.release_date}</p>
                        {movie.genres && movie.genres.map((gen, index) => <p key={index}>{gen.name}</p>)}
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
                                        <img  className="w-full h-full object-contain" src={imagePath.imageUrl('w92',logo.logo_path) } alt={logo.name}/>
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
    )
}