import { FaSearch } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

function Navbar({
  showNavbar,
  setShowNavbar,
  scrollToSection,
  homeRef,
  contactRef,
  aboutRef,
  productRef,
  footerRef,
}) {
  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-between p-8">
        <div className="cursor-pointer">
          <img src={Logo} className="w-16 sm:w-20 rounded-full" />
        </div>

        <div className="hidden sm:flex sm:flex-row flex-col gap-5">
          <a
            onClick={() => scrollToSection(homeRef)}
            className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
          >
            HOME
          </a>
          <a
            onClick={() => scrollToSection(productRef)}
            className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
          >
            PRODUCT
          </a>
          <a
            onClick={() => scrollToSection(aboutRef)}
            className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
          >
            ABOUT
          </a>
          <a
            onClick={() => scrollToSection(aboutRef)}
            className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
          >
            CONTACT
          </a>
          <a className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white">
            <FaSearch />
          </a>
        </div>

        <button className="sm:hidden" onClick={handleNavbar}>
          {showNavbar ? (
            <X className="w-6 h-6 mr-5" />
          ) : (
            <Menu className="w-10 h-10 mr-5" />
          )}
        </button>
      </div>
      {showNavbar ? (
        <div className="flex justify-end w-full absolute top-16">
          <div className="sm:hidden flex  flex-col gap-5 bg-white p-5">
            <a
              onClick={() => {scrollToSection(homeRef); setShowNavbar(!showNavbar)}}
              className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
            >
              HOME
            </a>
            <a
              onClick={() => {scrollToSection(productRef); setShowNavbar(!showNavbar)}}
              className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
            >
              PRODUCT
            </a>
            <a
              onClick={() => {scrollToSection(aboutRef); setShowNavbar(!showNavbar)}}
              className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
            >
              ABOUT
            </a>
            <a
              onClick={() => {scrollToSection(contactRef); setShowNavbar(!showNavbar)}}
              className="font-bold hover:bg-red-400 cursor-pointer p-4 rounded-md hover:text-white"
            >
              CONTACT
            </a>
            <a className="font-bold hover:bg-red-400 p-4 rounded-md hover:text-white">
              <FaSearch />
            </a>
          </div>
        </div>
      ):<></>}
    </div>
  );
}

export default Navbar;
