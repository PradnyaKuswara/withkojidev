import React from "react";
import { HashLink } from "react-router-hash-link";

class HeaderMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        };

        this.btnClose = this.btnClose.bind(this);
    }

    btnClose = () => {
        document.querySelector(".menu").classList.toggle("hidden");
    };

    render() {
        return (
            <>
                <div className="menu hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="layout fixed inset-y-0 right-0 z-10 w-full h-64 shadow-lg overflow-y-auto bg-white px-6 py-6 sm:max-w-full sm:ring-4 sm:ring-gray-900/10 animate__animated animate__fadeInDown">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={this.btnClose}
                                type="button"
                                className="btn-close -m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <hr className="mt-6"></hr>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <HashLink
                                        to="/#root"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-white hover:bg-teal-900"
                                    >
                                        Home
                                    </HashLink>
                                    <HashLink
                                        to="/#project"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-white hover:bg-teal-900"
                                    >
                                        Project
                                    </HashLink>
                                    <HashLink
                                        to="/#contact"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-white hover:bg-teal-900"
                                    >
                                        Contact
                                    </HashLink>
                                </div>
                                <div className="py-6">
                                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                                        2023
                                    </span>
                                    <div className="hover:underline">
                                        Portofolio I Gusti Ngurah A Pradnya
                                        Kuswara
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HeaderMobile;
