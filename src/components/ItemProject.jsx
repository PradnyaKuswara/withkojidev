import React from "react";

const ItemProject = ({ datas }) => {
  return (
    <>
      {datas.map((data) => (
        <div
          className="grid grid-flow-row mx-auto mt-5 my-3"
          data-aos="fade-in"
        >
          <div className="shadow-lg max-w-xs md:max-w-full mx-auto  rounded-lg  bg-white p-8 my-3">
            <div className="flex flex-col md:flex-row justify-between items-center my-3">
              <h1 className="text-xl md:text-3xl font-bold ">
                {data.title}
                <span className="text-sm text-gray-500 text-center">
                  ({data.role})
                </span>
              </h1>
              <div className="rounded-full text-center mt-3 lg:mt-0  px-5 py-2 text-xs font-semibold   text-white bg-teal-900 hover:bg-opacity-75">
              {data.type}
              </div>
            </div>
            <p className="text-xs md:text-sm my-3 text-justify">{data.desc}</p>
            <h1 className="text-xl font-semibold">Preview</h1>
            <div className="mt-5 flex flex-col bg-white">
              <div className="flex overflow-x-scroll pb-10  ">
                <div className="flex flex-nowrap max-w-xs lg:max-w-lg">
                  {data.image.map((image) => (
                    <div className="inline-block px-3 transition ease-in-out delay-100 hover:px-8">
                      <div className={`${data.image_class}hover:overflow-visible  cursor-pointer max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300 ease-in-out hover:scale-125 delay-150`}>
                        <img
                          className={data.image_class}
                          src={image}
                          alt="login-page"
                        ></img>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex flex-col lg:flow-root ">
                <a href={data.link_online} target="_blank">
                  <span className={`${data.link_online_class} my-5 p-5 hover:text-teal-900 hover:underline text-lg font-semibold`}>
                    <i className="mx-2 fas fa-solid fa-link"></i>
                    GofitSport
                  </span>
                </a>
                <a href={data.link_github} target="_blank">
                  <span className="my-5 p-5 hover:text-teal-900 hover:underline text-lg font-semibold">
                    <i className="mx-2 fas fa-brands fa-github"></i>
                    GofitSport
                  </span>
                </a>
                <p className="my-1 p-5 lg:my-2 lg:p-0 float-right text-xs text-gray-500">
                  {data.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemProject;
