import React from "react";
import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import FormSignUp from "../Components/fragments/FormSignUp";

const SignUp = () =>{
    return(
        <BackGround>
            <Navbar/>
            <div className="flex items-start justify-center w-[1280px] h-[1480px] rounded-[1rem] bg-white mx-20 pb-20 ">
                <FormSignUp />
            </div>
        </BackGround>
    );
};

export default SignUp;