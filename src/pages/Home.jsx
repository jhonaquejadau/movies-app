import React from "react";
import { MoviesCarousel } from "../components/MoviesCarousel";
import { useFetch } from "../hooks/useFetch";
import { apiConfig } from "../api/apiConfig";
import { MoviesSlider } from "../components/MoviesSlider";
import { useState } from "react";

export default function Home(){

    const [formData, setFormData] = useState({
        title:""
    });
    const upcoming = useFetch(apiConfig.category('movie','upcoming'))
    const popular = useFetch(apiConfig.category('movie', 'popular'))

    const handleSearch = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setFormData({
            [name]:value
        })
    }

    return (
        <div className="flex flex-col items-center w-[100%] h-full mx-auto text-slate-200">
        
            <div className="w-[100%]">
                <MoviesCarousel upcoming={upcoming} apiConfig={apiConfig} />
            </div>

            <section className="w-full h-full flex flex-col items-center bg-gradient-to-b from-black to-purple-900">
                <div className="w-[100%] py-4 px-[6em]">
                    <p className="text-5xl text-slate-200 font-bold uppercase">welcome</p>
                    <p className="text-3xl text-slate-200 mb-4">Movies, TV Shows, Peoples, and more...</p>
                    <div className="relative flex flex-row justify-center items-center w-[90%] h-[3em] p-0 mb-8">
                        <input 
                            type="text"
                            placeholder="Search for Movies, TV Shows, Person...."
                            className="relative w-[100%] h-[100%] rounded-3xl px-8"
                            name="title"
                            value={formData.title}
                            onChange={handleSearch}
                        />
                        <button className="absolute right-0 h-[100%] px-8 text-slate-200 font-bold rounded-3xl bg-gradient-to-r from-purple-900 to-purple-500">Search</button>
                    </div>
                </div>

                <div className="flex flex-col w-[90%] p-4 max-[900px]:w-[100%] max-[900px]:p-4">
                    <p className="text-2xl text-left mb-4 w-fit capitalize">what's popular</p>
                    <MoviesSlider movies={popular} imagePath={apiConfig}/>
                    <p className="text-2xl text-left mb-4 w-fit capitalize">what's upcoming</p>
                    <MoviesSlider movies={upcoming} imagePath={apiConfig}/>
                    <p className="text-2xl text-left mb-4 w-fit capitalize">top rated movies</p>
                    <MoviesSlider movies={upcoming} imagePath={apiConfig}/>
                </div>
            </section>

            
        </div>
    )
}