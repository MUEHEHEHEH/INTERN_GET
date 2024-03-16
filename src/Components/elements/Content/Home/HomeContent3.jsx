import React from "react";
import { Fade, Slide, Zoom} from "react-awesome-reveal";
// import { Zoom } from "react-reveal";
// import { Flip } from "react-reveal";

const HomeContent3 = () =>{
    return(
        <div className="flex flex-col items-center justify-center w-auto h-[35rem] ">
            <Fade direction="down" duration={2000} >
                <h1 className="my-5 flex items-center justify-center Jakarta Sans text-center font-[plus text-[3.5rem]">
                    <span className="font-bold">Talk&nbsp;</span> About Numbers.
                </h1>
            </Fade>
            <Zoom direction="down" duration={2000} delay={1000}>
                <div className="flex flex-row items-center justify-between my-5 bg-[#D24D4D] rounded-3xl">
                    <img className="w-auto h-auto" src="/Frame_12.png" alt="Frame_102" />
                </div>
            </Zoom>
            <Fade direction="up" duration={2000}>
                <div className="flex flex-row items-center justify-between my-5">
                    <h1 className="w-autp h-auto font-serif">AND STILL COUNTING..</h1>
                </div>
            </Fade>
        </div>
    );
};

export default HomeContent3;
