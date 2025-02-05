import axios from "axios";

const API_KEY = "2ec0d66f5bdf1dd12eefa0723f1479cf";
const BASE_URL = "https://api.themoviedb.org/3";

const GlobalApi = {
    getTrendingVideos: () => axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`),
    getMovieByGenreId: (id) => axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`)
};

export default GlobalApi;
