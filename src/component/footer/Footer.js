import React from "react";

const Footer = (props) => {
    return (
        <footer className="bg-white" aria-labelledby="footerHeading">
            <div className="container mx-auto px-2 md:px-4">
                <div className="my-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 font-roboto">
                        ©2021 Pradnyanandana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
