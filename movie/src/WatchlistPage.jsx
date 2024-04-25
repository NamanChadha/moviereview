import React from 'react';
import MovieCard from './MovieCard';

const WatchlistPage = ({ watchlist, onRemoveFromWatchlist }) => {
  return (
    <div className="watchlist-page">
      <h1>My Watchlist</h1>
      <div className="watchlist-container">
        {watchlist.map(movie => (
          <MovieCard
            key={movie.id}
            {...movie}
            onRemoveFromWatchlist={onRemoveFromWatchlist}
            isOnWatchlist={true} // Assuming all movies in watchlist are already on it
          />
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;
