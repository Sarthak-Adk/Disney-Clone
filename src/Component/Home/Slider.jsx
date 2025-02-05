import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos()  // ✅ Fixed function name
            .then((resp) => {
                if (resp.data.results) {
                    setMovieList(resp.data.results);
                }
            })
            .catch((error) => console.error("Error fetching trending movies:", error));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % movieList.length);
    };
    
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + movieList.length) % movieList.length);
    };

    return (
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
            {movieList.length > 0 ? (
                <>
                    <img
                        src={`${IMAGE_BASE_URL}${movieList[currentIndex].backdrop_path}`}
                        alt="Movie"
                        className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out"
                    />

                    {/* Left Button */}
                    <button 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
                        onClick={handlePrev}
                    >
                        ◀
                    </button>

                    {/* Right Button */}
                    <button 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
                        onClick={handleNext}
                    >
                        ▶
                    </button>
                </>
            ) : (
                <div className="flex items-center justify-center h-full text-white text-lg">
                    Loading movies...
                </div>
            )}
        </div>
    );
};

export default Slider;
