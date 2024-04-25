import {useEffect, useState} from 'react'
import './App.css';
import MovieCard from './MovieCard';
import Login from './Login';
import WatchlistPage from './WatchlistPage';

const ProtectedPage = ({ onLogout }) => {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=7d776c13726428fd6907f0d7d376b6d9";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=7d776c13726428fd6907f0d7d376b6d9&query=";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Add a rating property set to 0 for each movie object
        const moviesWithRating = data.results.map(movie => ({
          ...movie,
          rating: 0
        }));
        setMovies(moviesWithRating);
      });

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + searchTerm)
      .then((res) => res.json())
      .then(data => {
        // Add a rating property set to 0 for each movie object
        const moviesWithRating = data.results.map(movie => ({
          ...movie,
          rating: 0
        }));
        setMovies(moviesWithRating);
      });
  };

  const handleAddToWatchlist = (movieId) => {
    // Check if the movie is already in the watchlist
    if (!watchlist.some(movie => movie.id === movieId)) {
      // If not, find the movie in the movies array and add it to the watchlist
      const movieToAdd = movies.find(movie => movie.id === movieId);
      setWatchlist([...watchlist, movieToAdd]);
    }
  };

  const handleRemoveFromWatchlist = (movieId) => {
    // Filter out the movie with the specified ID from the watchlist
    const updatedWatchlist = watchlist.filter(movie => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
  };

  const handleRatingChange = (movieTitle, newRating) => {
    const updatedMovies = movies.map(movie => {
      if (movie.title === movieTitle) {
        return { ...movie, rating: newRating };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const handleToggleWatchlist = () => {
    setShowWatchlist(!showWatchlist);
  };


  return (
    <div className="App">
      <button onClick={onLogout}>Logout</button>

      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setSearchTerm(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className='appContainer'>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            {...movie}
            onAddToWatchlist={handleAddToWatchlist}
            onRemoveFromWatchlist={handleRemoveFromWatchlist}
            isOnWatchlist={watchlist.some(watchlistMovie => watchlistMovie.id === movie.id)}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>

      <button onClick={handleToggleWatchlist}>View Watchlist</button>
      {showWatchlist && <WatchlistPage watchlist={watchlist} />}

    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleLogout = () => {
    console.log("Meow");
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <ProtectedPage onLogout={handleLogout}/>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
