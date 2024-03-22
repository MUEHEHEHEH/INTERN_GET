import React from "react";
import Navbar from "../Components/fragments/Navbar";
import BackGround from "../Components/layouts/BG";
import FormSignIn from "../Components/fragments/FormSignIn";
import { Fade } from "react-awesome-reveal";

const SignIn = () => {
  return (
    <Fade>
      <BackGround>
        <>
          <Navbar />
          <FormSignIn />
        </>
      </BackGround>
    </Fade>
  );
};

export default SignIn;
