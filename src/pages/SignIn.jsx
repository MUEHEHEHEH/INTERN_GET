import React from "react";
import Navbar from "../Components/fragments/Navbar";
import BackGround from "../Components/layouts/BG";
import FormSignIn from "../Components/fragments/FormSignIn";


const SignIn = () => {
    return(
        <BackGround>
            <>
            <Navbar />
            <FormSignIn />
            </>
         </BackGround>
    );
};




export default SignIn;