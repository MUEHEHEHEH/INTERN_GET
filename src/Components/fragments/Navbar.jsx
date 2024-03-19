import React from "react";
import {Link} from "react-router-dom";
import Button from "../elements/button/button";
import { Fade } from "react-awesome-reveal";

const Navbar = () =>{
    const menuItems = [
        { path: '/Home', label: 'Home' },
        { path: '/BookNow', label: 'Book Now' },
        { path: '/JoinUs', label: 'Join Us' },
        { path: '/ContactUs', label: 'Contact Us' }
      ];
    return(
        <nav className="top-10 left-10 w-1080 h-48 bg-transparent border-gray-200 dark:bg-gray-900">
                {/* <Fade direction="left" triggerOnce={true} duration={2000}> */}
                    <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                        <div className="flex items-center justify-start w-1/3">
                            <Fade direction="left" triggerOnce={true} duration={1000}>
                                <img src="/Logo.png" className="h-10" alt="GET Logo" />
                            </Fade>
                        </div>
                        <div className="flex items-center md:order-2 space-x-3">
                        <Fade direction="down" triggerOnce={true} duration={2000}>
                            <Button
                                type="button"
                                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                > <Link to = "/SignUp"> Sign Up</Link>
                
                            </Button>
                        </Fade>
                        </div>
                        <div className="items-center justify-between">
                            <Fade cascade damping={0.2}>
                                <ul className="flex font-medium p-4 md:p-0 mt-4 border rounded-lg bg-transparent-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {menuItems.map((menuItem, index) => (
                                    <li key={index}>
                                    <Fade direction="down" triggerOnce={true} duration={1000}>
                                        <Link to={menuItem.path} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        {menuItem.label}
                                        </Link>
                                    </Fade>
                                    </li>
                                ))}
                                </ul>
                            </Fade>
                        </div>
                    </div>
                {/* </Fade> */}
            </nav>

    );
};

export default Navbar;