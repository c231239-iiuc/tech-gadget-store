import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-1 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} TechGadget Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
