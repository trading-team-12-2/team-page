"use client";

import React from 'react';

const Navbar: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/70 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="text-xl font-bold tracking-widest text-white">
          ALGO<span className="text-primary font-normal">FUTURE</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
        <a 
          href="#performance" 
          className="hover:text-white transition-colors"
          onClick={(e) => handleScrollTo(e, "#performance")}
        >
          Performance
        </a>
        <a 
          href="#story" 
          className="hover:text-white transition-colors"
          onClick={(e) => handleScrollTo(e, "#story")}
        >
          Story
        </a>
        <a 
          href="#vision" 
          className="hover:text-white transition-colors"
          onClick={(e) => handleScrollTo(e, "#vision")}
        >
          Vision
        </a>
        <a 
          href="#careers" 
          className="hover:text-white transition-colors"
          onClick={(e) => handleScrollTo(e, "#careers")}
        >
          Careers
        </a>
      </div>

      <button 
        className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all cursor-pointer"
        onClick={(e) => handleScrollTo(e, "#contact")}
      >
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
