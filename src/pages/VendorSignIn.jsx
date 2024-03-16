import React from "react";
import Navbar from "../Components/fragments/Navbar";
import BackGround from "../Components/layouts/BG";
import VendorFormSignIn from "../Components/fragments/VendorFormSignIn";
import { Fade } from "react-reveal";


const SignIn = () => {
    return(
        <Fade>
            <BackGround>
                <>
                <Navbar />
                <VendorFormSignIn />
                </>
            </BackGround>
        </Fade>
    );
};




export default SignIn;