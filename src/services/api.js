const API_KEY = "56fade2ad4fd4c968dec0c1a40e4e1f8"
const BASE_URL = "https://api.themoviedb.org/3"
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json();
    return data.results;
}

export const searchMovies = async(query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    console.log(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    const data = await response.json();
    return data.results;
}