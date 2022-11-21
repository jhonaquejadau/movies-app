import React, {useContext} from "react";
import { ContextConsumer } from "../context/Context";

export const Movies = () => {
    const {movies, urls} = useContext(ContextConsumer);
    console.log('context data')
    console.log(movies)
    console.log(urls.image)

    return (
        <div className="flex flex-col items-center w-[80%] h-full mx-auto">
            <p>Popular Movies</p>
            <div className="grid grid-cols-5 place-items-center p-2 gap-2 w-full">
                { movies && movies.map(movie => {
                    return (
                        <div key={movie.id}
                            className="w-[300px] h-[100%]"
                        >
                            <img className="hover:scale-[1.02]" src={urls.image + movie.poster_path} alt={`${movie.title}`} />
                            <p className="text-lg font-bold">{movie.title}</p>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}