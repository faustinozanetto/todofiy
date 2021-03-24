import React, { ReactNode } from 'react';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
