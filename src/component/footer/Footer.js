import React from "react";

const Footer = (props) => {
    return (
        <footer className="bg-gray-900 py-2" aria-labelledby="footerHeading">
            <div className="container mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <p className="text-sm lg:text-base text-white md:mt-0 md:order-1 font-roboto text-center">
                        ©2023 Pradnyanandana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
