import React, { ReactNode } from 'react';
import { usePageTransition } from '../../hooks/usePageTransition';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  usePageTransition();

  return (
    <div className="page-content animate-page-enter">
      {children}
    </div>
  );
};

export default PageTransition;
