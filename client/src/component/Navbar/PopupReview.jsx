
import React, { useState } from 'react';
import './PopupReview.css';
import { createReview } from '../../services/review.js';
import { useNavigate } from 'react-router-dom'; 

export default function PopUpReview({ onClose, onSubmit }) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const review = await createReview({ rating, comment });
        navigate('/reviews');
        onSubmit();
    } catch (error) {
        console.error('Error creating review:', error);
    }
  };

  return (
    <div className="popup-review">
      <div className="popup-inner">
        <h2>Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))} required>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          <label>
            Comment:
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}
