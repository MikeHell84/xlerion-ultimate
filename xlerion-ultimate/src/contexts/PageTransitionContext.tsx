"use client";

import React, { createContext, useContext } from 'react';

interface PageTransitionContextType {
  startPageTransition: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const PageTransitionProvider: React.FC<{ children: React.ReactNode; startPageTransition: (href: string) => void }> = ({ children, startPageTransition }) => {
  return (
    <PageTransitionContext.Provider value={{ startPageTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};
