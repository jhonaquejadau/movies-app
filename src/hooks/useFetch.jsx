import { useState, useEffect } from "react";

export const useFetch = (url, movieId = false) => {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(movieId ? data : data.results)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return movies
}