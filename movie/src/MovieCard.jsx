import React, { useState } from 'react';
import StarRating from './StarRating';
import './MovieCard.css';

const MovieCard = ({ poster_path, title, overview, rating, onRatingChange}) => {
  const API_IMG ="https://image.tmdb.org/t/p/w500/";

  return (
    <div className='card'>
      <div className='hero'>
        <img className='poster' src={API_IMG + poster_path} alt={title} />
        <h2 className='title'>{title}</h2>
      </div>
      <p className='overview'>{overview}</p>
      <p className='overview'>{rating}</p>
      <StarRating
        movieTitle={title}
        rating={rating}
        onRatingChange={(movieId, newRating) => onRatingChange(movieId, newRating)}
      />
    </div>
  );
};

export default MovieCard;
