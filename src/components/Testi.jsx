import React from 'react';
import './Testi.css';

const Testi = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="/img.png" alt="Rohan Verma" className="avatar-image" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Rohan Verma</h4>
              </div>
            </div>
            <p className="testimonial-text">
              "We needed temperature-sensitive cargo delivered overseas. They managed it with precision and care."
            </p>
            <div className="testimonial-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="/img (1).png" alt="Meera Patel" className="avatar-image" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Meera Patel</h4>
              </div>
            </div>
            <p className="testimonial-text">
              "Fast shipping and real-time updates made our international deliveries stress-free. A truly dependable partner."
            </p>
            <div className="testimonial-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src="/img (2).png" alt="Rohan Verma" className="avatar-image" />
              </div>
              <div className="author-info">
                <h4 className="author-name">Rohan Verma</h4>
              </div>
            </div>
            <p className="testimonial-text">
              "Their global network helped us cut costs and expand into new markets. Couldn't ask for a better logistics partner."
            </p>
            <div className="testimonial-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testi;
