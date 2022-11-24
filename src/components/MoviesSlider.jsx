import React from "react";
import {Link} from "react-router-dom"

export const MoviesSlider = ({movies, urls}) => {

    const handleScrollUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    
    const movieContainer = (movies) => {
        return movies && movies.map((movie,index) => {
            return (
                <div onClick={handleScrollUp} key={index}
                    className="movie-card"
                >
                    <Link to={`/movie-detail/${movie.id}`}>
                            <img src={urls.image + movie.poster_path} alt={movie.original_title} />
                    </Link>
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