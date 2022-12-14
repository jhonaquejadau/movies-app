import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../api/apiConfig";
import { Loader } from "../components/Loader";

export const TvShowDetail = () => {
    
    const {id} = useParams();
    const [tvShow, setTvShow] = useState([]);

    const getTvShowDetail = async (id) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`)
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
                <div className="relative w-full  h-full">
                    <img className=" w-full h-[600px] object-cover object-bottom" src={apiConfig.imageUrl('original', tvShow.backdrop_path)} alt={tvShow.name} ></img>
                        
                    <div className=" absolute bottom-0 flex flex-row justify-center items-center text-[1.25rem] text-center w-full h-[90%] ">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-full h-[400px] object-cover" src={apiConfig.imageUrl('original',tvShow.poster_path)} alt={tvShow.name} />
                            <p className={`${tvShow.tagline !== "" ? 'block' : 'hidden'} w-full bg-[rgba(255,255,255,0.2)] p-2`}>{tvShow.tagline}</p>
                        </div>
                        <div className="flex flex-col jsutify-start items-center">
                            <p className={`${tvShow.created_by.length > 0 ? 'block' : 'hidden'} capitalize`}>created by:</p>
                            <div className="flex flex-row items-center">
                                {tvShow.created_by.map(created => {
                                    return (
                                        <div key={created.id}
                                        >
                                            <p>{created.name}</p>
                                            <img className="w-[150px] h-[150px] object-cover object-top rounded-[0.5em]" src={apiConfig.imageUrl('original', created.profile_path)} alt={created.name} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col justify-start items-center w-full h-[100%] bg-[rgba(0,0,0,0.5)]">
                    <p className="text-2xl capitalize">seasons</p>
                    <div className="grid grid-cols-6 gap-2 h-full w-full">
                        {tvShow.seasons.filter(season => season.poster_path !== null).map(season => {
                            return (
                                <div key={season.id}>
                                    <p>{season.name}</p>
                                    <img src={apiConfig.imageUrl('original', season.poster_path)} alt={season.name} />
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </section>
        )
    }
    
}