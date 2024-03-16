import React from "react";
import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import JoinUsContent1 from "../Components/elements/Content/Join/JoinUsContent1";
import JoinUsContent2 from "../Components/elements/Content/Join/JoinUsContent2";
import Footer from "../Components/fragments/Footer";
import { Fade } from "react-reveal";

const JoinUs = () => {
    return(
        <Fade>
            <BackGround>
                <Navbar/>
                <JoinUsContent1/>
                <JoinUsContent2/>
                <Footer/>
            </BackGround>
        </Fade>
    );
};

export default JoinUs;