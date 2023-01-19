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
                    className="flex flex-col min-w-[200px] min-h-full pb-4 hover:scale-[1.05]"
                >
                    <Link to={`/tv-show-detail/${tvShow.id}`}>
                            <img className="w-full h-[300px]" src={imagePath.imageUrl('original',tvShow.poster_path === null ? tvShow.backdrop_path : tvShow.poster_path)} alt={tvShow.name} />
                    </Link>
                </div>
            )
        })
    }
    
    return (
        <div className="w-full h-full flex flex-row gap-2 overflow-x-auto">
            {movieContainer(tvShows)}
        </div>
    )
}