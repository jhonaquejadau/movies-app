import React, {useContext} from "react";
import { ContextConsumer } from "../context/Context";
import {Link} from "react-router-dom"
import { MoviesCarousel } from "../components/MoviesCarousel";
import { useFetch } from "../hooks/useFetch";

export default function Home(){
    const {urls} = useContext(ContextConsumer);
    const upcoming = useFetch(urls.upcoming)
    const popular = useFetch(urls.popular)

    return (
        <div className="flex flex-col items-center w-[100%] h-full mx-auto text-slate-200">
        
            <div className="w-[100%]">
                <MoviesCarousel upcoming={upcoming} urls={urls} />
            </div>

            <div className="w-[90%] bg-black p-4 mt-6">
                <p className="text-5xl text-slate-200 font-bold uppercase">welcome</p>
                <p className="text-3xl text-slate-200 mb-4">Movies, TV Shows, Peoples, and more...</p>
                <div className="relative flex flex-row justify-center items-center w-[90%] h-[3em] p-0 m-0">
                    <input 
                        type="text"
                        placeholder="Search for Movies, TV Shows, Person...."
                        className="relative w-[100%] h-[100%] rounded-3xl px-8"
                    />
                    <button className="absolute right-0 h-[100%] px-8 text-slate-200 font-bold rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500">Search</button>
                </div>
            </div>

            <div className="flex flex-col w-[90%] p-4">
                <p className="text-3xl text-left mt-8 mb-4 hover:font-bold w-fit">Popular Movies</p>
                <div className="grid grid-cols-5 place-items-center gap-2 w-full">
                    { popular && popular.map(movie => {
                        return (
                            <Link to={`/movie-detail/${movie.id}`}>
                                <div key={movie.id}
                                    className="w-[100%] h-[100%]"
                                >
                                    <img className="w-[100%] hover:scale-[1.02]" src={urls.image + movie.poster_path} alt={`$`} />
                                    <p className="text-lg">{movie.title}</p>
                                </div>
                            </Link>
                        )
                    })

                    }
                </div>
            </div>
            
        </div>
    )
}