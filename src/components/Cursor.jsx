import React, { useEffect, useState, useCallback } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  let moveTimeout = null;

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsMoving(true);

    // Clear previous timeout
    if (moveTimeout) {
      clearTimeout(moveTimeout);
    }

    // Create trail effect
    if (Math.random() > 0.5) { // 50% chance to create a trail
      const trail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      
      setTrails(prev => [...prev, trail]);
      
      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== trail.id));
      }, 500);
    }

    // Set timeout to detect when mouse stops moving
    moveTimeout = setTimeout(() => {
      setIsMoving(false);
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeout) {
        clearTimeout(moveTimeout);
      }
    };
  }, [handleMouseMove]);

  return (
    <>
      <div 
        className="cursor-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isMoving ? 1.2 : 1})`
        }}
      />
      {trails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`
          }}
        />
      ))}
    </>
  );
};

export default Cursor; 