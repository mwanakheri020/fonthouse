import React, { useState } from 'react';
import './Review.css'; // Make sure to adjust the path to your styling file

const Review = () => {
  const [rating, setRating] = useState(5); // Default to 5 stars
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log('Review Submitted:', { rating, comment });
    // Handle review submission here (e.g., API call)
  };

  return (
    <div className="review-container">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmitReview}>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here..."
            required
          />
        </div>
        <button type="submit" className="review-button">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;
