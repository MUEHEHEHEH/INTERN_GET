import React from "react";
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <div className="bg-white w-full h-[410px] pt-20">
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-6">    
                    <ul className="flex items-center justify-center pb-5 text-md font-medium text-gray-500 dark:text-gray-400 ">
                        <li>
                            <Link to="/Home" className="hover:underline px-10 gap-2.5">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline px-10 gap-2.5">Book now</Link>
                        </li>
                        <li>
                            <img src="Logo.png" className="flex items-center justify-center w-[12rem] h-14 mx-20" alt="Logo" />
                        </li>
                        <li>
                            <Link to="/JoinUs" className="hover:underline px-10 gap-2.5">Join Us</Link>
                        </li>
                        <li>
                            <Link to="/ContactUs" className="hover:underline px-10 gap-2.5">Contact Us</Link>
                        </li>
                    </ul>     
                    <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 " />
                    <div className="flex items-start justify-center">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">© 2023 — 2024  Privacy — Terms.</span>
                    </div>
                    </div>
            </footer>

        </div>
    );
};

export default Footer;