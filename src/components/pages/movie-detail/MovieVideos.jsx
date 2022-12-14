import React from "react";

export const MovieVideos = ({movie}) => {
    const trailer = movie && movie.filter(video => video.type === 'Trailer' ? (video.type === 'Trailer') : (video.type === 'Official Trailer'))
        .map(card => {
            return (
                <div key={card.key} 
                    dangerouslySetInnerHTML={{ __html: 
                    `<iframe width="100%" height="600" src=https://www.youtube.com/embed/${card.key}/>`}}
                >
                </div>
            )
        })
    console.log('videos')
    console.log(movie)
    console.log('trailer')
    console.log(trailer)
    return (
        <>
            {trailer}  
        </>
    )
}