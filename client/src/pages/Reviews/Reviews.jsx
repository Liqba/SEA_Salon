import React, { useState, useEffect } from 'react';
import { getReviews } from '../../services/review.js';
import './Reviews.css';
import PopUpReview from '../../component/Navbar/PopupReview.jsx';
import { useNavigate } from 'react-router-dom';

export default function Reviews({ isLoggedIn, setIsLoggedIn }) {
  const [reviews, setReviews] = useState([
    {
      customer: {
        fullName: 'Mitch Olson'
      },
      rating: 5,
      comment: 'If you are looking to have a new website created or revamped then I would highly recommend Charley Gray. They bring a vast knowledge of innovative ideas, and creative solutions while never loosing site of the customers vision. Courtney and ...',
      date: '2 weeks ago',
      avatar: 'M'
    },
    {
      customer: {
        fullName: 'James Elbrecht'
      },
      rating: 5,
      comment: 'Since using Charley Grey, we have had a great response in our rankings in online searches. They also did a new website for us which has had an amazing response and looks fantastic. They are a fun, creative group to work with that delivers on time and on budget.',
      date: 'a week ago',
      avatar: 'J'
    }
  ]);

  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviews();
        setReviews(response.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleOpenPopup = () => {
    if (isLoggedIn) {
      setIsPopupOpen(true);
    } else {
      alert('Silahkan login terlebih dahulu');
      navigate('/login');
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <h1>Ulasan Salon SEA</h1>
        <p>Berikan ulasanmu disini</p>
        <div className="rating">
          <span className="rating-score">5.0</span>
          <span className="stars">★★★★★</span>
          <span className="review-count">16 reviews</span>
        </div>
        <button className="write-review" onClick={handleOpenPopup}>✎ Write a review</button>
      </div>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-content">
              <h3>{review.customer.fullName}</h3>
              <div className="review-meta">
                <span className="stars">{'★'.repeat(review.rating)}</span>
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      {isPopupOpen && (
        <PopUpReview onClose={handleClosePopup} onSubmit={handleAddReview} />
      )}
    </div>
  );
}
