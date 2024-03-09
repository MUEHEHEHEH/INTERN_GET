import React from "react";
import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import ContactUsContent1 from "../Components/elements/Content/ContactUsContent1";
import ContactUsContent2 from "../Components/elements/Content/ContactUsContent2";
import Footer from "../Components/fragments/Footer";

const ContactUs = () => {
    return(
        <BackGround>
            <Navbar/>
            <ContactUsContent1/>
            <ContactUsContent2/>
            <Footer/>
        </BackGround>
    );
};

export default ContactUs;