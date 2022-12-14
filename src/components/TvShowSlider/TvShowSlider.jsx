import React from "react";
import {Link} from "react-router-dom"

export const TvShowSlider = ({tvShows, imagePath}) => {

    const handleScrollUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    
    const movieContainer = (tvShows) => {
        return tvShows && tvShows.filter(tvShow => tvShow.poster_path !== null).map((tvShow,index) => {
            return (
                <div onClick={handleScrollUp} key={index}
                    className="movie-card hover:scale-[1.05]"
                >
                    <Link to={`/tv-show-detail/${tvShow.id}`}>
                            <img className="h-[300px]" src={imagePath.imageUrl('original',tvShow.poster_path === null ? tvShow.backdrop_path : tvShow.poster_path)} alt={tvShow.name} />
                    </Link>
                </div>
            )
        })
    }
    
    return (
        <div className="cards-container">
            {movieContainer(tvShows)}
        </div>
    )
}