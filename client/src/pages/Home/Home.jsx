import React from 'react';
import './Home.css';
import Haircut from './assets/image/Haircuts.jpg';
import Pedicure from './assets/image/Pedicure.jpg';
import Facial from './assets/image/Facial.jpg';
import Salon from './assets/image/Salon.jpg';

export default function Home({ setIsLoggedIn }) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h2>Beauty and Elegance Redefined</h2>
          <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning</p>
          <button className="cta-button">Explore Menu</button>
        </div>
        <div className="hero-image">
          <img src={Salon} alt="Salon" />
        </div>
      </section>

      <section className="services">
        <h2>Our Exclusive Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src={Haircut} alt="Haircuts and Styling" />
            <h3>Haircuts and Styling</h3>
            <p>Land behold it created good saw after she'd our set.</p>
          </div>
          <div className="card">
            <img src={Pedicure} alt="Manicure and Pedicure" />
            <h3>Manicure and Pedicure</h3>
            <p>Land behold it created good saw after she'd our set.</p>
          </div>
          <div className="card">
            <img src={Facial} alt="Facial Treatments" />
            <h3>Facial Treatments</h3>
            <p>Land behold it created good saw after she'd our set.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
