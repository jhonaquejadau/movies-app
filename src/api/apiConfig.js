// const API_KEY = "24f4aa2d151dcbaa881cb0b8a6be9c6e"

const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/movie/436270?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e",
    imageUrl: (size = 'original',path) => `https://image.tmdb.org/t/p/${size}${path}`,
    config: "https://api.themoviedb.org/3/configuration?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e",
    category: (category,type) => `https://api.themoviedb.org/3/${category}/${type}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&language=en-US`,
    detailUrl: (category,id, append_to_response) => `https://api.themoviedb.org/3/${category}/${id}?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&append_to_response=${append_to_response}`,
    search: (name, page) => `https://api.themoviedb.org/3/search/company?api_key=24f4aa2d151dcbaa881cb0b8a6be9c6e&query=${name}&page=${page}`

}

export {apiConfig}