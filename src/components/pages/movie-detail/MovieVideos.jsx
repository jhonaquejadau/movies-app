import React from "react";

export const MovieVideos = ({movie}) => {
    const trailer = movie && movie.filter(video => video.type === 'Trailer' ? (video.type === 'Trailer') : (video.type === 'Official Trailer'))
        .map(trailer => {
            return (
                <div key={trailer.key}
                >
                    <iframe
                    width="100%"
                    height="430"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            )
        })

    return (
        <div className="grid grid-cols-2 gap-2 max-[800px]:grid-cols-1">
            {trailer}  
        </div>
    )
}