import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-amber-400 w-full h-[410px] pt-20 border-gray-600 border-y-2 shadow">
      <div className="mx-auto w-full max-w-screen-xl p-6">
        <ul className="flex items-center justify-center pb-5 text-md font-medium text-gray-500 dark:text-gray-400 ">
          <Fade direction="left" triggerOnce={true} duration={2000}>
            <li>
              <Link to="/Home" className="hover:underline px-10 text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/BookNow" className="hover:underline px-20 text-black">
                Book now
              </Link>
            </li>
            <li>
              <img
                src="/Logo.png"
                className="flex items-center justify-center w-[15rem] h-14 ml-20"
                alt="Logo"
              />
            </li>
            <li>
              <Link to="/JoinUs" className="hover:underline px-20 text-black">
                Join Us
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="hover:underline px-10  text-black"
              >
                Contact Us
              </Link>
            </li>
          </Fade>
        </ul>
        <hr className="my-6 border-black " />
        <Fade direction="up" triggerOnce={true} duration={3000}>
          <p className="text-center text-md pl-20 ml-20 w-[989px] h-[30px] flex justify-center align-center pb-0 tracking-wide ">
            Under section 107 of the copyright Act 1976, allowance is mad for
            FAIR USE for purpose such a as criticism, comment, news reporting,
            teaching, scholarship and research. Fair use is a use permitted by
            copyright statues that might otherwise be infringing. Non- Profit,
            educational or personal use tips the balance in favor of FAIR USE.
          </p>

          <div className="flex items-start justify-center mt-20">
            <span className="text-sm text-black sm:text-center dark:text-gray-400 ">
              © 2023 — 2024 Privacy — Terms.
            </span>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
