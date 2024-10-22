import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll'
import logo from "../assets/logo.png";
import contact from "../assets/contact.png";

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to manage menu visibility

  function handleMenuToggle() {
    setIsMenuVisible(!isMenuVisible); // Toggle menu visibility
  }

  return (
    <>
      <nav className="bg-black flex justify-between items-center p-2 fixed top-0 left-0 right-0 z-50">
        {/* Logo and Mobile Menu Icon */}
        <div className="flex items-center">
          <MenuIcon
            className="text-white h-8 w-8 cursor-pointer md:hidden" // Menu icon for mobile
            onClick={handleMenuToggle}
          />
          <img className="h-10 ml-4 rounded-full m-2" src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-yellow-400 cursor-pointer'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-yellow-400 cursor-pointer'>About</Link>
          <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-yellow-400 cursor-pointer'>Skills</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-yellow-400 cursor-pointer'>Education</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className='hover:text-yellow-400 cursor-pointer'>Projects</Link>

        </div>

        {/* Login Button (Visible on all screens) */}
        <div className="flex items-center">
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} ><button className="flex me-4 bg-white px-2 py-2 rounded-full text-black font-bold hover:bg-yellow-600 transition-all">
            <img className="h-5 px-3 mt-1" src={contact} alt="Logo" />
            Contact Me
          </button></Link>


        </div>

        {/* Mobile Menu */}
        {isMenuVisible && (
          <div className="fixed inset-0 bg-black text-white z-50 md:hidden">
            <div className="flex justify-between items-center bg-black p-4 ">
              <XIcon
                onClick={handleMenuToggle}
                className="text-white h-8 w-8 cursor-pointer"
              />
              <img className="h-10" src={logo} alt="Logo" />
            </div>

            <div className="flex flex-col items-center mt-4 space-y-4 ">
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className=" text-lg font-bold hover:bg-yellow-400 py-2 w-full text-center rounded-lg cursor-pointer" onClick={()=>setIsMenuVisible(false)}>Home</Link>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className=" text-lg font-bold hover:bg-yellow-400 py-2 w-full text-center rounded-lg cursor-pointer" onClick={()=>setIsMenuVisible(false)}>About</Link>
              <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className=" text-lg font-bold hover:bg-yellow-400 py-2 w-full text-center rounded-lg cursor-pointer" onClick={()=>setIsMenuVisible(false)}>Skills</Link>
              <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className=" text-lg font-bold hover:bg-yellow-400 py-2 w-full text-center rounded-lg cursor-pointer" onClick={()=>setIsMenuVisible(false)}>Education</Link>
              <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className=" text-lg font-bold hover:bg-yellow-400 py-2 w-full text-center rounded-lg cursor-pointer" onClick={()=>setIsMenuVisible(false)}>Projects</Link>

            </div>
          </div>
        )}
      </nav>

      {/* Add this to ensure the content below the navbar is not hidden behind it */}
      <div className="mt-16">
        {/* Other content of your app goes here */}
      </div>
    </>
  );
}
