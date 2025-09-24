import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import useScrollAnimation from '../components/useScrollAnimation';

const Home = () => {
  useScrollAnimation();

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <section className="home__hero animate-on-scroll">
        <div className="hero-background"></div>
        <div className="home__hero-content animate-on-scroll">
          <h1 className="main-brand"><span className="fitwith">FitWith</span><span className="me">Me</span></h1>
          <h2 className="hero-subtitle">Transform Your Body, Transform Your Life</h2>
          <p>Join our community of fitness enthusiasts and start your journey to a healthier lifestyle today.</p>
          <div className="home__cta">
            <Link to="/programs" className="btn btn--primary">Start Your Journey</Link>
            <Link to="/about" className="btn btn--secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="features animate-on-scroll">
        <div className="container">
          <h2 className="features__title animate-on-scroll">Why Choose Us</h2>
          <div className="features__grid">
            <div className="features__card animate-on-scroll">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80" alt="Expert fitness guidance" />
              </div>
              <h3>Expert Guidance</h3>
              <p>Get personalized training programs and nutrition plans from certified fitness professionals with years of experience in transforming lives.</p>
            </div>
            <div className="features__card animate-on-scroll">
              <div className="feature-image">
                <img src="https://plus.unsplash.com/premium_photo-1664299208816-ef56887db111?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwdHJhY2slMjBwcm9jZXNzfGVufDB8fDB8fHww" alt="Track your fitness progress" />
              </div>
              <h3>Track Progress</h3>
              <p>Monitor your fitness journey with our advanced tracking tools, detailed analytics, and milestone celebrations to keep you motivated.</p>
            </div>
            <div className="features__card animate-on-scroll">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a" alt="Fitness community support" />
              </div>
              <h3>Community Support</h3>
              <p>Join a vibrant community of fitness enthusiasts, share your journey, and get inspired by others' success stories.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="programs animate-on-scroll">
        <div className="container">
          <h2 className="programs__title animate-on-scroll">Featured Programs</h2>
          <div className="programs__grid">
            <div className="programs__card animate-on-scroll">
              <h3>30-Day Transformation</h3>
              <p>Kickstart your fitness journey with our comprehensive 30-day program. Includes daily workouts, meal plans, and progress tracking.</p>
              <ul className="programs__features">
                <li>Daily HIIT Workouts</li>
                <li>Customized Meal Plans</li>
                <li>24/7 Support</li>
              </ul>
              <Link to="/programs" className="btn btn--primary">Learn More</Link>
            </div>
            <div className="programs__card animate-on-scroll">
              <h3>Strength & Power</h3>
              <p>Build muscle and increase your strength with our progressive training program. Perfect for all fitness levels.</p>
              <ul className="programs__features">
                <li>Progressive Overload</li>
                <li>Form Guidance</li>
                <li>Recovery Protocols</li>
              </ul>
              <Link to="/programs" className="btn btn--primary">Learn More</Link>
            </div>
            <div className="programs__card animate-on-scroll">
              <h3>Flexibility & Mobility</h3>
              <p>Improve your range of motion and prevent injuries with our specialized flexibility program.</p>
              <ul className="programs__features">
                <li>Dynamic Stretching</li>
                <li>Mobility Drills</li>
                <li>Recovery Techniques</li>
              </ul>
              <Link to="/programs" className="btn btn--primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials animate-on-scroll">
        <div className="container">
          <h2 className="testimonials__title animate-on-scroll">Success Quotes</h2>
          <div className="testimonials__grid">
            <div className="testimonials__card animate-on-scroll">
              <p className="testimonials__quote">"WINNING HAPPENS BEFORE YOU WIN."</p>
              <p className="testimonials__author">- Chris Bumstead (CBum)</p>
            </div>
            <div className="testimonials__card animate-on-scroll">
              <p className="testimonials__quote">"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion."</p>
              <p className="testimonials__author">- Muhammad Ali</p>
            </div>
            <div className="testimonials__card animate-on-scroll">
              <p className="testimonials__quote">"If you do not believe in yourself, no one will do it for you"</p>
              <p className="testimonials__author">- Kobe Bryant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta animate-on-scroll">
        <div className="container">
          <div className="cta__content animate-on-scroll">
            <h2>Start Your Journey Today</h2>
            <p>Join thousands of others who have transformed their lives with our proven programs. Take the first step towards a healthier, stronger you!</p>
            <div className="cta__buttons">
              <Link to="/contact" className="btn btn--primary">Get Started</Link>
              <Link to="/programs" className="btn btn--secondary">View Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;