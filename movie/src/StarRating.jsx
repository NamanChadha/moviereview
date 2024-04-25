import React from 'react';
import './StarRating.css';

const StarRating = ({ movieTitle, rating, onRatingChange }) => {

  const handleIncrement = () => {
    if (rating < 5) {
      onRatingChange(movieTitle, rating + 1);
    }
  };

  const handleDecrement = () => {
    if (rating > 0) {
      onRatingChange(movieTitle, rating - 1);
    }
  };

  return (
    <div className="star-rating">
      <button onClick={handleDecrement}>-</button>
      <span>{rating}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default StarRating;
