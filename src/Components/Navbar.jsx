import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="w-full py-4 bg-blue-800 shadow sticky top-0" >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <a className="hover:text-gray-200 hover:underline px-4" href=" #">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200 hover:underline px-4" href=" #">
                  About
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center text-lg no-underline text-white pr-6">
            <a className="" href="# ">
            <FaFacebook />
            </a>
            <a className="pl-6" href=" #">
            <FaInstagram />

            </a>
            <a className="pl-6" href="# ">
              <FaXTwitter/>
            </a>
            <a className="pl-6" href="# ">
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </nav>

      {/* Text Header */}
      <header className="w-full container mx-auto bg-white" style={{position:"sticky", top:"48px", zIndex:"999"}}>
        <div className="flex flex-col items-center py-12">
          <a
            className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="# "
          >
            Minimal Blog
          </a>
          <p className="text-lg text-gray-600">Post Your Ideas</p>
        </div>
      </header>

      {/* Topic Navigation */}
      <nav className="w-full py-4 border-t border-b bg-gray-100">
        <div className="block sm:hidden">
          <a
            href="# "
            className=" md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
            onClick={() => setOpen(!open)}
          >
            Topics <i className={`fas ml-2 ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </a>
        </div>
        <div className={`${open ? 'block' : 'hidden'} w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <a href="# " className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
            <a href="# " className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
            <a href="# " className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
            <a href="# " className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
            <a href="# " className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
            <a href="# " className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
