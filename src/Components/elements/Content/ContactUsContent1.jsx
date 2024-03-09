import React from "react";
import Button from "../button/button";

const ContactUs1 = () => {
    return(
        <div className="flex justify-center items-center pt-10 pb-10 pl-10 pr-10 w-auto h-auto">
            <div className="flex items-center justify-center Jakarta Sans w-auto h-auto text-black font-[plus text-[3.5rem] font-bold leading-[normal]] gap-x-20">
                <div className="flex-col items-center justify-center gap-10">
                    <div className="Jakarta Sans w-[450px] text-black font-[plus text-[4.5rem] font-bold leading-[normal]] mb-5">
                        Get in Touch
                    </div>
                    <div className="flex w-[422px] text-black text-xl mb-5">
                        At Gain ur Easy Travel, 
                        we pride ourselves on providing exceptional service and support to our valued clients.
                        Whether you have questions, feedback, or need assistance, 
                        our dedicated team is here to help you every step of the way.
                    </div>
   
                </div>
                <div className="flex-shrink-0 w-[670px] h-[480px] rounded border border-black bg-white relative overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="/getInTouch.png" 
                        alt="getInTouch image"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs1;