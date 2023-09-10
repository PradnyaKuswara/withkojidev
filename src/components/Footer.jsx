import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 border border-t border-black">
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 md:px-8">
        <nav className="flex flex-wrap items-center justify-between -mx-5 -my-2">
          <div className="px-5">
            <a
              href=""
              className="text-md md:text-lg leading-none text-black hover:text-gray-900"
            >
              Let's get in touch :)
            </a>
          </div>
          <div className="px-5 flex gap-6">
            <Link
              to="https://www.instagram.com/pkuswara/"
              className="text-black text-xl hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Instagram</span>
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="https://www.instagram.com/pkuswara/"
              className="text-black text-xl hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Github</span>
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.instagram.com/pkuswara/"
              className="text-black text-xl hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Linkedin</span>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </nav>
        <div className="flex">
            <p className="text-md md:text-lg text-black">
              I Gusti Ngurah A Pradnya Kuswara
            </p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
