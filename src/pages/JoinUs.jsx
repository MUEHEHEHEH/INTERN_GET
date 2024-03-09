import React from "react";
import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import JoinUsContent1 from "../Components/elements/Content/JoinUsContent1";
import JoinUsContent2 from "../Components/elements/Content/JoinUsContent2";
import Footer from "../Components/fragments/Footer";

const JoinUs = () => {
    return(
        <BackGround>
            <Navbar/>
            <JoinUsContent1/>
            <JoinUsContent2/>
            <Footer/>
        </BackGround>
    );
};

export default JoinUs;