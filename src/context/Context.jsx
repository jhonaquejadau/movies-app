import {useState ,useEffect, createContext } from "react";

const Context = createContext();

const ContextProvider = ({children}) => {

    const urls = {
        base: "https://api.themoviedb.org/3/movie/436270?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e",
        image: "https://image.tmdb.org/t/p/original/",
        config: "https://api.themoviedb.org/3/configuration?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e",
        popular: "https://api.themoviedb.org/3/movie/popular?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US"
    } 
    
    const [movies, setMovies] = useState([]);

    const getMoviesApi = async () => {
        const response = await fetch(urls.popular)
        const data = await response.json()
        setMovies(data.results)
    } 

    useEffect(() => {
        getMoviesApi()
    }, [])

    
    return (
        <Context.Provider value={{movies, urls}}>
            {children}            
        </Context.Provider>
    )
} 

export {ContextProvider, Context as ContextConsumer}