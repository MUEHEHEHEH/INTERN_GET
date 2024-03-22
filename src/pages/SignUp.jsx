import React from "react";
import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import FormSignUp from "../Components/fragments/FormSignUp";
import { Fade } from "react-awesome-reveal";

const SignUp = () => {
  return (
    <Fade>
      <BackGround>
        <Navbar />
        <div className="flex items-start justify-center w-[1280px] h-[1480px] rounded-[1rem] bg-white mx-20 pb-20 ">
          <FormSignUp />
        </div>
      </BackGround>
    </Fade>
  );
};

export default SignUp;
