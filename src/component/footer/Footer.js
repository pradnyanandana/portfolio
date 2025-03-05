import React from "react";

const Footer = (props) => {
    return (
        <footer id="footer" className="bg-gray-900 py-2" aria-labelledby="footerHeading">
            <div className="container mx-auto px-2">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <p className="text-sm text-white md:mt-0 md:order-1 font-inter text-gray-100 text-center">
                        ©{new Date().getFullYear()} Pradnyanandana. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
