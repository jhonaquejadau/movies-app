import { useEffect } from "react";
import {React, useState} from "react"

import { apiConfig } from "../../../api/apiConfig";

export const MoviesSearch = () => {
 
    const [formData, setFormData] = useState("")
    const [movieSearch, setMovieSearch] = useState([])

    const handleSearch = (event) => {
        event.preventDefault();
        const {value} = event.target;
        setFormData(value)
    }

    const url = apiConfig.searchMovie(formData);

    const getMovieSearch = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setMovieSearch(data.results)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        {formData && getMovieSearch(url)}
    }, [url])

    const filterMovie = movieSearch && movieSearch.filter(movie => movie.backdrop_path !== null)

    console.log('movie SEARCH')
    console.log(movieSearch)
    console.log(filterMovie)

    return (
        <div className="w-[90%]">
            <div className="w-[100%] mt-4">
                <p className="text-5xl text-slate-200 font-bold uppercase">welcome</p>
                <p className="text-3xl text-slate-200 mb-4">Movies, TV Shows, Peoples, and more...</p>
                <div className="relative flex flex-row justify-center items-center w-[100%] h-[3em] p-0 mb-4">
                    <input 
                        type="text"
                        placeholder="Search for Movies, TV Shows, Person...."
                        className="relative w-[100%] h-[100%] px-8  bg-[rgba(255,255,255,0.2)]"
                        name="title"
                        value={formData}
                        onChange={handleSearch}
                    />
                    <button className="absolute right-0 h-[100%] px-4 text-slate-200 font-bold bg-gradient-to-r from-purple-900 to-purple-500">Search</button>
                </div>
            </div>

            <div className={`${filterMovie ? 'w-[100%] grid grid-cols-4 gap-2' : 'flex justify-center items-center bg-[rgba(255,255,255,0.2)] h-[100px] mb-4'}`}>
                {filterMovie ? 
                    filterMovie.map(movie => {
                        return (
                            <div key={movie.id} className="relative w-[100%] h-[250px] hover:scale-[1.01]">
                                <img className="w-[100%] h-[100%] object-cover" src={apiConfig.imageUrl('original',movie.backdrop_path)} alt={movie.title} />
                                <p className="absolute bottom-0 bg-[rgba(255,255,255,0.2)] w-[100%] p-2 font-bold">{movie.title}</p>
                            </div>
                        )
                    }) :
                    <p>Ooops there isn't movies search!!</p>
                }
            </div>
        </div>
    )
}