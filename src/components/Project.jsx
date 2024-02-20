import React from "react";
import { Link } from "react-router-dom";
import ItemProject from "./ItemProject";
import { dataProject } from "../utils/project";

const Project = () => {
    const datas = dataProject();
    return (
        <>
            <div data-aos="fade-in" data-aos-offset="200" id="project">
                <h1 className="md:mt-10 mt-3 mb-4 text-3xl font-sans font-extrabold tracking-tight leading-none md:text-3xl">
                    Highlighted Projects
                </h1>
                <div className="text-sm md:text-md">
                    Here are some of my projects that I have worked on recently.
                    Want to see
                    <Link
                        to="https://github.com/PradnyaKuswara"
                        className="mx-2 underline text-teal-900"
                    >
                        more?
                    </Link>
                </div>
                <ItemProject datas={datas} />
            </div>
        </>
    );
};

export default Project;
