import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex gap-10 justify-center items-center">
        <div className="animate__animated animate__fadeInLeft">
          <img
            src="/images/kuswara.jpg"
            alt="Kuswara"
            className="rounded-b-full drop-shadow-lg"
            style={{ width: "350px" }}
          />
        </div>
        <div className="animate__animated animate__fadeInRight">
          <h1 className=" mb-4 text-xl  tracking-tight text-justify text-gray-500 leading-none lg:text-3xl">
            Hi,
          </h1>
          <h1 className="mb-4 text-lg tiempos font-extrabold tracking-tight  leading-none md:text-3xl">
            I am <span class="text-teal-900 text-lg md:text-3xl">I Gusti Ngurah A Pradnya Kuswara</span>
          </h1>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-5 gap-16 md:gap-4 md:place-content-center md:place-items-center">
        <div className="md:col-span-3" data-aos="fade-right">
          <p className="pe-0 lg:pe-6 text-justify  font-light text-gray-500 lg:mb-8 t text-sm lg:text-md">
            Motivated and enthusiastic Informatics student with a passion for
            technology. Dedicated to expanding knowledge and skills in various
            programming languages and software development methodologies. Have
            basic knowledge of the PHP programming language, Laravel framework,
            and building application android with Android Studio Kotlin. A quick
            learner with excellent problem-solving abilities and a collaborative
            mindset.
          </p>
          <Link
            to="https://drive.google.com/file/d/1UEJ65sh3S04tJePsoiF5504XzYkxJ-Ze/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center text-sm justify-center px-4 py-2 mr-3 mt-3 lg:mt-0 transition ease-in-out delay-150 hover:scale-110 text-center text-white border bg-teal-900 border-gray-300 rounded-lg hover:bg-teal-900 hover:bg-opacity-70 focus:ring-4 focus:ring-gray-100"
          >
            Resume
          </Link>
          <Link className="inline-flex items-center justify-center px-7 py-3 mr-3 mt-3 lg:mt-0 transition ease-in-out delay-150 hover:scale-110 duration-300 text-base font-medium text-center text-gray-900  rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
            Project
            <i className="ms-2 fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </div>
        <div className=" md:col-span-2" data-aos="fade-in" data-aos-offset="250">
          <div className="mb-5">
            <h1 className="mb-4 text-lg text-gray-500 tracking-tight text-left lg:text-right leading-none xl:text-xl">
              Years of Experience
            </h1>
            <h2 className="mb-4 text-4xl font-extrabold text-right leading-none">
              1+
            </h2>
          </div>
          <div className="mb-5">
            <h1 className="mb-4 text-lg text-gray-500 tracking-tight text-left lg:text-right leading-none xl:text-xl">
              Complete Project
            </h1>
            <h2 className="mb-4 text-4xl font-extrabold text-right leading-none">
              2+
            </h2>
          </div>
          <div className="mb-5">
            <h1 className="mb-4 text-lg text-gray-500 tracking-tight text-left lg:text-right leading-none xl:text-xl">
              Contact
            </h1>
            <div className="flex justify-end space-x-6">
              <Link
                to="https://www.instagram.com/pkuswara/"
                className="text-black hover:text-gray-500"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                to="https://github.com/PradnyaKuswara"
                className="text-black hover:text-gray-500"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/pradnya-kuswara/"
                className="text-black hover:text-gray-500"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Hero;
