import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from "react";
import HeaderMobile from "./HeaderMobile";


const Header = () => {

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav
        className="flex items-center justify-between py-4  rounded-full max-w-screen-xl z-10 fixed md:left-0 md:right-0 w-screen mt-5 mx-auto  px-6  md:px-8 border border-black shadow-sm bg-gray-100"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <Link to="/" className="-m-1.5">
            <div className="relativ">
              <img
                src="/images/KOJIDEV.png"
                className="h-8 w-8 rounded-full"
                alt=""
              />
            </div>
          </Link>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="btn-open -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:gap-12">
          <HashLink
            smooth
            to="/#root"
            className="text-xs leading-6 text-gray-900 hover:text-black hover:font-bold"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#project"
            className="text-xs leading-6 text-gray-900 hover:text-black hover:font-bold"
          >
            Project
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="text-xs leading-6 text-gray-900 hover:text-black hover:font-bold"
          >
            Contact
          </HashLink>
        </div>
      </nav>
      <HeaderMobile />
    </header>
  );
};

export default Header;
