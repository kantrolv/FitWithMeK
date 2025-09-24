// /src/pages/Programs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Programs.css';

const Programs = () => {
  return (
    <section className="programs-landing">
      <div className="container">
        <div className="programs-hero">
          <span className="programs-badge">Coming Soon</span>
          <h1 className="programs-heading">Programs</h1>
          <p className="programs-subheading">We’re crafting tailored training plans to match your goals. Stay tuned!</p>
          <div className="programs-actions">
            <Link to="/contact" className="btn btn--primary">Notify Me</Link>
            <Link to="/workouts" className="btn btn-secondary">Explore Workouts</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;