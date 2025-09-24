import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Nutrition from './pages/Nutrition';
import Workouts from './pages/Workouts';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Cursor from './components/Cursor';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Cursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
