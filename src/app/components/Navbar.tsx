"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Main Navbar */}
        <nav className={`fixed top-0 left-0 w-[95%] z-50 bg-gray-300 rounded-full m-4 ${isMenuOpen ? "rounded-none" : ""}`}>
          <div className="bg-gray-300 rounded-full">
            <div className="flex justify-between items-center h-16 px-4 md:px-0">
              {/* Logo */}
              <div className="md:ml-20">
                <h1 className="font-bold text-2xl text-green-600">
                  TASTY<span className="text-black">GO.</span>
                </h1>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex gap-10 mr-32 items-center">
                <li className="hover:text-[18px] transition-all">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-[18px] transition-all">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-[18px] transition-all">
                  <a href="#menu">Menu</a>
                </li>
                <li className="hover:text-[18px] transition-all">
                  <a href="#contact">Contact</a>
                </li>
                <button className="bg-gray-400 text-black h-9 w-28 rounded-md font-semibold hover:bg-gray-500 transition-all">
                  Order Now
                </button>
              </ul>

              {/* Custom Hamburger Menu Button */}
              <button
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div
                  className={`w-6 h-0.5 bg-black transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-black transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-black transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed left-0 right-0 top-0 bg-gray-300 z-40 shadow-lg rounded-b-3xl transition-all duration-300 ease-in-out ${
            isMenuOpen ? "h-80 opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center h-full pt-16">
            <ul
              className={`flex flex-col gap-4 items-center transition-all duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <li className="hover:text-[18px] transition-all">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-[18px] transition-all">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-[18px] transition-all">
                <a href="#menu">Menu</a>
              </li>
              <li className="hover:text-[18px] transition-all">
                <a href="#contact">Contact</a>
              </li>
              <button className="bg-gray-400 text-black h-9 w-28 rounded-md font-semibold hover:bg-gray-500 transition-all">
                Order Now
              </button>
            </ul>
          </div>
        </div>
      </div>

      {/* Spacer div that pushes content down when menu is open */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "h-80" : "h-0"
        }`}
      />

      {/* Spacer div to create space between navbar and hero section */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
