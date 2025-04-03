
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-studio shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="text-white font-bold text-2xl">
                <span className="bg-studio-accent px-2 py-1 mr-1">33</span>
                Digital
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-studio-accent transition-colors"
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="text-white hover:text-studio-accent transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#thesis"
                className="text-white hover:text-studio-accent transition-colors"
              >
                Thesis
              </a>
              <a
                href="#about"
                className="text-white hover:text-studio-accent transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white hover:text-studio-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-studio-accent focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-studio animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-white hover:text-studio-accent"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-white hover:text-studio-accent"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#thesis"
              className="block px-3 py-2 text-white hover:text-studio-accent"
              onClick={toggleMenu}
            >
              Thesis
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-white hover:text-studio-accent"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-white hover:text-studio-accent"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
