import React from "react";

export const MovieVideos = ({movie}) => {
    const trailer = movie && movie.filter(video => video.name === 'Official Trailer')
    return (
        <div dangerouslySetInnerHTML={{ __html: 
            `<iframe width="100%" height="600" classname="" src=https://www.youtube.com/embed/${trailer && trailer[0].key}/>`}}
        >
        </div>
    )
}