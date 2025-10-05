import axios from "axios" 
const VITE_API_KEY = "7f7556ac95e635adf1ef6b14072d9ba7";
const VITE_BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await axios.get(`${VITE_BASE_URL}/movie/popular?api_key=${VITE_API_KEY}`)
    console.log(response.data);
    
    return response.data.results
};

export const searchMovies = async (query)=>{
    console.log(query);
    
    const response = await axios.get(`${VITE_BASE_URL}/search/movie?api_key=${VITE_API_KEY}&query=${encodeURIComponent(query)}`)
    return response.data.results
}