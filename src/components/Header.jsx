import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from "react";

const Header = () => {
  return (
    <header className="rounded-full max-w-screen-xl z-10 fixed md:left-0 md:right-0 w-screen mt-10 mx-auto  px-2  md:px-8 border shadow-md bg-teal-900">
      <nav
        className="flex items-center justify-between py-4 px-3"
        aria-label="Global"
      >
        <Link to="/" className="">
          <img src="/images/KOJIDEV.png" className="h-8 rounded-full" alt="" />
        </Link>
        <div className="flex md:hidden">
          <button
            type="button"
            className="btn-open -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
            className="text-xs leading-6 text-gray-100 hover:text-white hover:font-bold"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#project"
            className="text-xs leading-6 text-gray-100 hover:text-white hover:font-bold"
          >
            Project
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="text-xs leading-6 text-gray-100 hover:text-white hover:font-bold"
          >
            Contact
          </HashLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
