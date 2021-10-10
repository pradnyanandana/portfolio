import React from "react";

const Footer = (props) => {
    return (
        <footer className="bg-white" aria-labelledby="footerHeading">
            <h2 id="footerHeading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 font-roboto">
                        ©2021 Pradnyanandana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
