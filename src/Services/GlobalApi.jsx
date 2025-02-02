import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "ebbbee7d879f073c3205a059044978e4";

const getTrandingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

export default {
    getTrandingVideos
};
