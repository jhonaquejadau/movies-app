import React from "react";
import {Link} from "react-router-dom"

export const MoviesSlider = ({movies, imagePath}) => {

    const handleScrollUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    
    const movieContainer = (movies) => {
        return movies && movies.filter(movie => movie.poster_path !== null).map((movie,index) => {
            return (
                <div onClick={handleScrollUp} key={index}
                    className="movie-card hover:scale-[1.05]"
                >
                    <Link to={`/movie-detail/${movie.id}`}>
                            <img className="h-[300px]" src={imagePath.imageUrl('original',movie.poster_path === null ? movie.backdrop_path : movie.poster_path)} alt={movie.original_title} />
                    </Link>
                    <p className="text-[1rem] text-slate-100 font-bold opacity-80">{movie.title}</p>
                    <p className="text-[0.75rem] text-slate-200 italic opacity-60">{movie.release_date}</p>
                </div>
            )
        })
    }
    
    return (
        <div className="cards-container">
            {movieContainer(movies)}
        </div>
    )
}