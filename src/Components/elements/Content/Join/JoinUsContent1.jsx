import React from "react";
import Button from "../../button/button";
import { Fade, Slide} from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import { Slide } from "react-reveal";


const JoinUsContent1 = () =>{

    return(
        <div className="bg-gradient-to-b from-white to-ce2d2d flex justify-center items-center pt-10 pb-10 pl-10 pr-10 w-auto h-auto">
            <div className="flex items-center justify-center Jakarta Sans w-auto h-auto text-black font-[text-[3.5rem] leading-[normal]] gap-x-20">
                <div className="flex-col items-center justify-center ">
                    <Fade direction="down" duration={2000}>
                        <div className="Jakarta Sans w-[450px] text-black font-[plus text-[3.5rem] font-bold leading-[normal]] mb-5">
                            Be the part of change with us.
                        </div>
                    </Fade>
                    <Fade direction="left" duration={2000}>

                    <div className="flex w-[422px] text-black font-serif text-xl mb-10 text-justify">
                        We provide transparency, quality transaction between you and your clients. With our resources and human intelligence power, we can grow together.
                    </div>
                    </Fade>
                    <Fade direction="up" duration={2000}>
                        <div className="flex w-auto h-auto gap-10">
                            <Button type="button" 
                                className="flex justify-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                   <Link to = "/VendorSignIn">Register now as a vendor </Link> 
                            </Button>
                        </div>
                    </Fade>
                </div>
                <Slide direction="right" duration={2000}>
                    <div className="flex-shrink-0 w-[670px] h-[480px] rounded border border-black bg-white relative overflow-hidden">
                        <img
                            className="object-cover w-full h-full"
                            src="/image.png" 
                            alt="car image"
                        />
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default JoinUsContent1;