import React from "react";
import { Fade, Slide } from "react-awesome-reveal";


const ContactUs2 = () => {
    return(
        <>
            <div className="inline-flex bg-transparent justify-center items-center w-auto h-auto pt-20 gap-x-1.5 pl-20">
                <Slide direction="left" duration={2000} triggerOnce={true}>
                    <div className="flex items-center justify-start w-[480px] h-[360px] rounded border border-black bg-white mx-20 my-20 relative overflow-hidden">
                        <img
                            className="object-cover w-auto h-[360px]"
                            src="/maps.png" 
                            alt="maps"
                        />
                    </div>
                </Slide>
                <div className="flex items-start justify-center w-auto h-auto text-black ml-20 ">
                    <Fade cascade damping={0.3} triggerOnce={true}>
                        <div className="flex flex-col items-start">
                            <Fade direction="down" duration={2000}>
                                <div className="w-[200px] text-black  text-[1.5rem] font-bold ">
                                    Contact Us
                                </div>
                            </Fade>
                            <Fade direction="up" duration={2000}>
                                <div className="inline-flex items-center w-[450px] mt-2.5 gap-2">                           
                                    <img src="mapsLocation.png" alt="mapsLocation" />
                                    <p>Jl.Somewhere in Malang, RT 9 RW 11 Kode Pos 61234, Kota Malang, Jawa Timur, Indonesia </p>
                                </div>
                            </Fade>
                            <Fade direction="up" duration={2000}>
                                <div className="inline-flex items-center w-[840px] mt-2.5 gap-2">                           
                                    <img src="mailLogo.png" alt="mail" />
                                    <p>gainureasytravel@travel.com</p>
                                </div>
                            </Fade>
                            <Fade direction="up" duration={2000}>
                                <div className="inline-flex items-center w-[840px] mt-2.5 gap-2">                           
                                    <img src="waLogo.png" alt="waLogo" />
                                    <p>+62 81234567890123</p>
                                </div>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="w-auto h-[200px] bg-transparent"></div>
        </>
    );
};

export default ContactUs2;