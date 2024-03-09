import React from "react";
import Button from "../button/button";


const HomeContent1 = () =>{
    return(
        <div className="flex justify-center items-center pt-10 pb-10 pl-10 pr-10 w-auto h-auto">
            <div className="flex items-center justify-center Jakarta Sans w-auto h-auto text-black font-[plus text-[3.5rem] font-bold leading-[normal]] gap-x-20">
                <div className="flex-col items-center justify-center gap-10">
                    <div className="Jakarta Sans w-[450px] text-black font-[plus text-[3.5rem] font-bold leading-[normal]] mb-5">
                        The most reliable travel companion.
                    </div>
                    <div className="flex w-[422px] text-black font-serif text-xl mb-5">
                        Get ready to hit the road and seize every moment with Gain ur Easy Travel. Your journey starts here.
                    </div>
                    <div className="flex w-auto h-auto gap-10">
                        <Button type="button" 
                            className=" text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                Book now
                        </Button>
                        <Button className="mb-2 me-2 flex flex-col justify-center w-[13.1875rem] text-center font-[Roboto] text-lg leading-[normal] underline text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            Browse all vehicles
                        </Button>
                    </div>
                </div>
                <div className="flex-shrink-0 w-[670px] h-[480px] rounded border border-black bg-white relative overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src="/content1.png" 
                        alt="car image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeContent1;