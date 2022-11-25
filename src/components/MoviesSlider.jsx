import React from "react";
import {Link} from "react-router-dom"

export const MoviesSlider = ({movies, imagePath}) => {

    const handleScrollUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    
    const movieContainer = (movies) => {
        return movies && movies.map((movie,index) => {
            return (
                <div onClick={handleScrollUp} key={index}
                    className="movie-card hover:border-2 hover:border-purple-500"
                >
                    <Link to={`/movie-detail/${movie.id}`}>
                            <img src={imagePath.imageUrl('original',movie.poster_path)} alt={movie.original_title} />
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