// MovieList.jsx
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';

const MovieList = ({ moviesWithSearch, addToWatchlist }) => {        
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=7d776c13726428fd6907f0d7d376b6d9";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (moviesWithSearch.length !== 0) {
          setMovies(moviesWithSearch);
        } else {
          fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
              const dataHolder = data.results.map(movie => ({
                ...movie,
                rating: 0
              }));
              setMovies(dataHolder);
            })
            .catch(error => {
              console.error('Error fetching movies:', error);
            });
        }
    }, [moviesWithSearch]); // Make sure to include moviesWithSearch in the dependency array
      
    const handleRatingChange = (movieTitle, newRating) => {
        const updatedMovies = movies.map(movie => {
          if (movie.title === movieTitle) {
            return { ...movie, rating: newRating };
          }
          return movie;
        });
        setMovies(updatedMovies);
    };

    return (
        <div className="movie-list">
            {movies.map(movie => (
            <div key={movie.id}>
                <MovieCard
                    movie={movie}
                    onRatingChange={handleRatingChange}
                    addToWatchlist={() => addToWatchlist(movie)}
                />
            </div>
            ))}
        </div>
    )
}

export default MovieList;
