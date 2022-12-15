import React from "react";
import { apiConfig } from "../../../api/apiConfig";

export const TvShowSeasons = ({tvShow, modal, setModal}) => {

    const handleModal = (seasonNumber) => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setModal(() => {
            return {
                state:true,
                season_number:seasonNumber
            }
        })
    }

    return (
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
                        <div key={season.id}
                            onClick={() => handleModal(season.season_number)}
                        >
                            <img className="hover:scale-[1.02] h-full" src={apiConfig.imageUrl('original', season.poster_path)} alt={season.name} />
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}