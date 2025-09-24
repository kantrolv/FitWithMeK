import React, { useState } from 'react';
import '../styles/Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FitWithMe</h3>
          <p className="footer-description">
            Transform your body and mind with our expert-led fitness programs. Join our community of dedicated fitness enthusiasts and start your journey to a healthier lifestyle today.
          </p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email for updates"
              aria-label="Email for newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="newsletter-button"
              disabled={subscribed}
            >
              {subscribed ? 'Subscribed! 🎉' : 'Subscribe'}
            </button>
          </form>
          <div className="social-links">
            <a href="https://www.instagram.com/kantrolvamshikrishna/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>

            <a href="https://x.com/Kvamshi90749974" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="/workouts">Workouts</a>
            <a href="/programs">Programs</a>
            <a href="/nutrition">Nutrition</a>
            <a href="/about">About Us</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <div className="footer-links">
            <a href="mailto:contact@fitwithme.com">kantrolvamshikrishnarao@gmail.com</a>
            <a href="tel:+1234567890">9703002022</a>
            <a href="/contact">Get Started</a>
            <a href="/faq">FAQ</a>
            <a href="/support">Support</a>
          </div>
        </div>

        <p className="copyright">© 2024 FitWithMe. All rights reserved. | Designed with ❤️ for fitness enthusiasts</p>
      </div>
    </footer>
  );
};

export default Footer;
  