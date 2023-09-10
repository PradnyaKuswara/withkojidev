import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
          Whoops, The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="rounded-md bg-teal-900 hover:opacity-75  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go Home
        </Link>
      </div>
      <div className="w-1/2  flex lg:items-end justify-center ">
        <img src="/images/404.png" alt="" />
      </div>
      <Outlet />
    </div>
  );
};

