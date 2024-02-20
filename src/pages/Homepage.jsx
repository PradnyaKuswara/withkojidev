import React from "react";
import Hero from "../components/Hero";
import Project from "../components/Project";
import DocumentTitle from "../components/DocumentTitle";
import Contact from "../components/Contact";

export default function Homepage() {
    DocumentTitle("HomePage");
    return (
        <>
            <Hero />
            <Project />
            <Contact />
        </>
    );
}
