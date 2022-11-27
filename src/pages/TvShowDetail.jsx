import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { apiConfig } from "../api/apiConfig";
import MoviesBanner from "../components/pages/movie-detail/MoviesBanner";

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
    console.log(id)
    
    return (
        <>
            <section className="flex flex-col w-[100%] h-full text-slate-200">
                {/* <MoviesBanner movie={tvShow} imagePath={apiConfig}/> */}
                <div className="w-full">
                    <img src={apiConfig.imageUrl('original', tvShow.backdrop_path)} alt="tv" ></img>

                </div>
            </section>
        </>
    )
}