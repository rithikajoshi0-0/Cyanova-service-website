import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Add page transition class
    document.body.classList.add('page-transitioning');
    
    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transitioning');
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);
};
