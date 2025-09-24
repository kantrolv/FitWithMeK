import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Fit With<span>Me</span>
        </Link>

        <div className="nav-menu">
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workouts" className={`nav-link ${location.pathname === '/workouts' ? 'active' : ''}`}>
                <span className="nav-icon">💪</span>
                <span className="nav-text">Workouts</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nutrition" className={`nav-link ${location.pathname === '/nutrition' ? 'active' : ''}`}>
                <span className="nav-icon">🥗</span>
                <span className="nav-text">Nutrition</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}>
                <span className="nav-icon">📋</span>
                <span className="nav-text">Programs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonials" className={`nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}>
                <span className="nav-icon">⭐</span>
                <span className="nav-text">Testimonials</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="nav-cta">Get Started</Link>
          <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
            <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <p>Choose your path to fitness</p>
            </div>
            
            <ul className="mobile-nav-links">
              <li>
                <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
                  <span className="nav-icon">🏠</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/workouts" className="mobile-nav-link" onClick={toggleMenu}>
                  <span className="nav-icon">💪</span>
                  <span>Workouts</span>
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="mobile-nav-link" onClick={toggleMenu}>
                  <span className="nav-icon">🥗</span>
                  <span>Nutrition</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="mobile-nav-link" onClick={toggleMenu}>
                  <span className="nav-icon">📋</span>
                  <span>Programs</span>
                </Link>
              </li>
              
              <li>
                <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>
                  <span className="nav-icon">👤</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>
                  <span className="nav-icon">📞</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>

            <div className="mobile-menu-footer">
              <div className="social-links">
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="YouTube">📺</a>
                <a href="#" aria-label="TikTok">🎵</a>
              </div>
              <p className="copyright">© 2024 FitWithMe</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
