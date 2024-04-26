import React, { useState } from 'react';
import StarRating from './StarRating';
import './MovieCard.css';
// poster_path, title, overview, rating

const MovieCard = ({ movie, onRatingChange, addToWatchlist}) => {
  const API_IMG ="https://image.tmdb.org/t/p/w500/";

  return (
    <div className='card'>
      <div className='hero'>
        <img className='poster' src={API_IMG + movie.poster_path} alt={movie.title} />
        <h2 className='title'>{movie.title}</h2>
      </div>
      <p className='overview'>{movie.overview}</p>
      <p className='overview'>{movie.rating}</p>
      <StarRating
        movieTitle={movie.title}
        rating={movie.rating}
        onRatingChange={(movieId, newRating) => onRatingChange(movieId, newRating)}
      />
      <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
