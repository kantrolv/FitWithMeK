import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elements.forEach((el) => {
      // Reset animation state
      el.classList.remove('animate-in');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
        el.classList.remove('animate-in');
      });
    };
  }, []);
} 