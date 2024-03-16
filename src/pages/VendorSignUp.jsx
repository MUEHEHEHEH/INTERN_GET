import React from "react";
import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import VendorFormSignUp from "../Components/fragments/VendorFormSignUp";
import { Fade } from "react-reveal";
import Footer from "../Components/fragments/Footer";

const VendorSignUp = () =>{
    return(
        <Fade>
            <BackGround>
                <Navbar/>
                <div className="flex items-start justify-center w-[1280px] h-[1480px] rounded-[1rem] bg-white mx-20 pb-20 ">
                    <VendorFormSignUp/>
                </div>
                <Footer/>
            </BackGround>
        </Fade>
    );
};

export default VendorSignUp;