import React from "react";
import Button from "../button/button";


const JoinUsContent1 = () =>{
    return(
        <div className="flex justify-center items-center pt-10 pb-10 pl-10 pr-10 w-auto h-auto">
            <div className="flex items-center justify-center Jakarta Sans w-auto h-auto text-black font-[plus text-[3.5rem] font-bold leading-[normal]] gap-x-20">
                <div className="flex-col items-center justify-center gap-10">
                    <div className="Jakarta Sans w-[450px] text-black font-[plus text-[3.5rem] font-bold leading-[normal]] mb-5">
                        Be the part of change with us.
                    </div>
                    <div className="flex w-[422px] text-black font-serif text-xl mb-5">
                        We provide transparency, quality transaction between you and your clients. With our resources and human intelligence power, we can grow together.
                    </div>
                    <div className="flex w-auto h-auto gap-10">
                        <Button type="button" 
                            className="flex justify-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                Register now as a vendor
                        </Button>
               
                    </div>
                </div>
                <div className="flex-shrink-0 w-[670px] h-[480px] rounded border border-black bg-white relative overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="/image.png" 
                        alt="car image"
                    />
                </div>
            </div>
        </div>
    );
};

export default JoinUsContent1;