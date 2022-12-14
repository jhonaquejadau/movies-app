import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../api/apiConfig";
import { Loader } from "../components/Loader";
import {TvShowSlider} from "../components/TvShowSlider"

export const TvShowDetail = () => {
    
    const {id} = useParams();
    const [tvShow, setTvShow] = useState([]);
    // https://api.themoviedb.org/3/tv/1399?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US&append_to_response=recommendations
    const getTvShowDetail = async (id) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US$&append_to_response=recommendations`)
        const data = await res.json()
        setTvShow(data)
    }

    useEffect(() => {
        getTvShowDetail(id)
    }, [id])

    console.log(tvShow)

    if(tvShow.length === 0){
        return (
            <Loader />
        )
    } else {

        return (
            <section className="w-[100%] h-full text-slate-200 bg-gradient-to-b from-black to-[#030337]">

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

                <div className="flex flex-col items-center w-full h-[100%] bg-gradient-to-b from-black to-[#030337] ">
                    <div className="w-[90%] h-full">
                        <div className="flex flex-row items-center w-full h-full text-xl max-[1200px]:justify-center">
                            {tvShow.spoken_languages.map((lang, index) => {
                                return (
                                    <div key={index}>
                                        <p className="capitalize"><span className="font-bold">language:</span> {lang.name !== null || undefined ? lang.name : lang.english_name}</p>
                                    </div>
                                )
                            })}
                            <p className="capitalize mx-8"><span className="font-bold">seasons:</span> {tvShow.number_of_seasons}</p>
                            <p className="capitalize"><span className="font-bold">episodes:</span>  {tvShow.number_of_episodes}</p>
                        </div>
                        <p className="text-2xl font-bold capitalize mt-6">seasons</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 h-full w-full">
                            {tvShow.seasons.filter(season => season.poster_path !== null).map(season => {
                                return (
                                    <div key={season.id}>
                                        <img className="hover:scale-[1.02]" src={apiConfig.imageUrl('original', season.poster_path)} alt={season.name} />
                                        <p>{season.name}</p>
                                    </div>
                                )
                            })} 
                        </div>
                        <div className="flex flex-col w-[100%] mt-6">
                            <p className="text-2xl capitalize my-2 font-bold">more like this</p>
                            <TvShowSlider tvShows={tvShow.recommendations.results} imagePath={apiConfig}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}