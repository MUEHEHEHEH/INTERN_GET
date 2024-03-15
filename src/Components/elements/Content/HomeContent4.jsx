import React from "react";
import { Fade } from "react-awesome-reveal";

const HomeContent4 = () =>{
    return(
        <>
            <div className="flex flex-col items-center justify-center w-auto h-auto bg-slate-50">
                <Fade cascade damping={0.3}>
                    <Fade direction="down" duration={2000} triggerOnce={true} delay={1000}>
                        <h1 className="flex items-center justify-center Jakarta Sans text-center font-[plus text-[2.5rem] py-2">
                            <span className="font-bold">Our Promises </span>
                        </h1>
                    </Fade>
                    <Fade direction="down" triggerOnce={true} duration={2000} delay={1000}>
                        <div className="flex items-center justify-between">
                            We promised the best quality service and quality product  for our rental vehicles.
                        </div>
                    </Fade>
                </Fade>
                
                <div className="flex flex-row items-center justify-center py-10 gap-x-10 ">
                    <Fade cascade damping={0.3}>
                        <Fade direction="left" triggerOnce={true} duration={2000} >
                            <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow  ">
                                <img className="rounded-lg w-auto h-[300px] " src="/Rectangle.png" alt="" /> 
                                    <div className="p-5">
                                        <h5 className="mb-2 ml-5 text-xl text-justify font-bold  text-gray-900 ">Quality Checking</h5>
                                        <p className="mb-3 ml-5 text-lg text-justify text-gray-700 ">We regulated to each vendor that they should provide, maintain the best quality product, and regularly check their fleet. </p>
                                    </div>
                            </div>
                        </Fade>
                        <Fade direction="left" triggerOnce={true} duration={2000}>
                            <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                                <img className="rounded-lg w-auto h-[300px] " src="/transparencey.png" alt="" /> 
                                <div className="p-5">
                                    <h5 className="mb-2 ml-5 text-xl text-justify font-bold  text-gray-900 ">Transparency </h5>
                                    <p className="mb-3 ml-5 font-sm text-justify text-gray-700 ">Our company is committed to fostering a culture of transparency, ensuring open communication channels between our clients and vendors at all times. </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction="left" duration={2000} triggerOnce={true}>
                            <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow">
                                <img className="rounded-lg w-auto h-[300px]" src="/speed.png" alt="" /> 
                                <div className="p-5">
                                    <h5 className="mb-2 ml-5 text-xl font-bold text-justify  text-gray-900" >Speed</h5>
                                    <p className ="mb-3 ml-5 font-sm text-justify text-gray-700 ">With our features like costumer service, online booking system, efficient Check-in/Check-Out, and Flexible Pickup and Drop-off, we aim to speed up time efficiency. </p>
                                </div>
                            </div>
                        </Fade>
                    </Fade>
                </div>
            </div>
            <div className="w-auto h-[450px] bg-gradient-to-b from-white to-ce2d2d opacity-50"></div>

        </>
    );
};

export default HomeContent4;