import { useState } from 'react';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import MovieList from './MovieList';
import Wishlist from './WishList'; // Import the Wishlist component

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moviesWithSearch, setMoviesWithSearch] = useState([]);
  const [searchTerm,SetsearchTerm] = useState([])
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist(prevWatchlist => [...prevWatchlist, movie]); // Append movie to the watchlist
};

  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=7d776c13726428fd6907f0d7d376b6d9&query=";
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + searchTerm)
      .then((res) => res.json())
      .then(data => {
        const dataHolder = data.results.map(movie => ({
          ...movie,
          rating: 0
        }));
        setMoviesWithSearch(dataHolder);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };
  
  const setPage = (targetPage) => {
    setCurrentPage(targetPage);
  }

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  const removeFromWatchlist = (movieId) => {
    setWatchlist(prevWatchlist => prevWatchlist.filter(movie => movie.id !== movieId));
  };
  return (
    <div>
      {isLoggedIn && (
        <header className="header">
          <div className="logo">
          <img src='./bingebuddy.png' style={{width:'100px', height:'80px'}}/>
          </div>
          <div className="navigation">
            <button onClick={() => setCurrentPage("Home")}>Home</button>
            <button onClick={() => setCurrentPage("Profile")}>Profile</button>
            <button style={{ backgroundColor: '#d35400' }} onClick={handleLogout}>Logout</button>
          </div>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <input onChange={(e) => SetsearchTerm(e.target.value)} />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </header>
      )}
      <div className="main-app">
        {isLoggedIn ? (
          currentPage === 'Home' ? (
            <MovieList 
              moviesWithSearch={moviesWithSearch} 
              addToWatchlist={addToWatchlist} // Pass addToWatchlist function as prop
            />
          ) : currentPage === 'Profile' ? (
            <Profile />
          ) : (
            <Wishlist 
              watchlist={watchlist} 
              removeFromWatchlist={removeFromWatchlist} // Pass removeFromWatchlist function as prop
            />
          )
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
