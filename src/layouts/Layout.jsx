import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl p-5 py-36 mx-auto md:p-8 md:py-36">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
