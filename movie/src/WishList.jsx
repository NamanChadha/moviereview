// Wishlist.jsx
import { useState } from 'react';

const Wishlist = ({ watchlist, removeFromWatchlist }) => {
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Handler function to update the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the watchlist based on the search term
  const filteredWatchlist = watchlist.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wishlist">
      <h2>My Wishlist</h2>
      {/* Search bar */}
      <input 
        type="text" 
        placeholder="Search in Wishlist" 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      {/* List of movies in the wishlist */}
      <div className="wishlist-movies">
        {filteredWatchlist.map(movie => (
          <div key={movie.id} className="wishlist-movie">
            <img src={movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            {/* Button to remove movie from the wishlist */}
            <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
