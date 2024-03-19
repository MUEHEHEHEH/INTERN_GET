import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Footer = () =>{

    const menuItems = [
        { to: '/Home', label: 'Home', className: 'hover:underline px-10 text-black' },
        { to: '/BookNow', label: 'Book now', className: 'hover:underline px-20 text-black' },
        { to: '/JoinUs', label: 'Join Us', className: 'hover:underline px-20 text-black' },
        { to: '/ContactUs', label: 'Contact Us', className: 'hover:underline px-10 text-black' }
      ];
    return(
            <footer className="bg-amber-400 w-full h-[410px] pt-20 border-gray-600 border-y-2 shadow">
                    <div className="mx-auto w-full max-w-screen-xl p-6">    
                        <ul className="flex items-center justify-center pb-5 text-md font-medium text-gray-500 dark:text-gray-400 ">
                            <Fade direction="left" triggerOnce={true} duration={2000}>
                                {menuItems.map((menuItem, index) => (
                                    <li key={index} className="ml-5">
                                    {menuItem.to === '/Home' || menuItem.to === '/BookNow' || menuItem.to === '/JoinUs' || menuItem.to === '/ContactUs' ? (
                                        <Link to={menuItem.to} className={menuItem.className}>{menuItem.label}</Link>
                                    ) : (
                                        <img src="Logo.png" className="w-[15rem] h-14" alt="Logo" />
                                    )}
                                    </li>
                                ))}
                            </Fade>
                        </ul>     
                        <hr className="my-6 border-black " />
                        <Fade direction="up" triggerOnce={true} duration={3000}>
                            <p className="text-center text-md pl-20 ml-20 w-[989px] h-[30px] flex justify-center align-center pb-0 tracking-wide ">Under section 107 of the copyright Act 1976, 
                                allowance is mad for FAIR USE for purpose such a as criticism, comment, news reporting, teaching, scholarship and research.
                                Fair use is a use permitted by copyright statues that might otherwise be infringing. Non- Profit, educational or personal use tips the balance in favor of FAIR USE.
                            </p>

                            <div className="flex items-start justify-center mt-20">
                                <span className="text-sm text-black sm:text-center dark:text-gray-400 ">© 2023 — 2024  Privacy — Terms.</span>
                            </div>
                        </Fade>
                        </div>
            </footer>

    );
};

export default Footer;