import React from "react";
import Button from "../button/button";


const HomeContent2 = () =>{
    return(
        <>
            <div className="flex items-start justify-center h-[250px] mt-40">
                <img src="/logo2.png" alt="" />
            </div>

            <div className="flex bg-white justify-center items-center w-auto h-auto pt-10 gap-x-10">
                <div className="flex items-center justify-start w-[480px] h-[360px] rounded border border-black bg-white mx-20 my-20 relative overflow-hidden">
                    <img
                        className="object-cover w-auto h-auto"
                        src="/content2.png" 
                        alt="car2"
                    />
                </div>
                <div className="flex-col items-center justify-center Jakarta Sans w-auto h-auto text-black font-[plus text-[3.5rem] font-bold leading-[normal]] ">
                    
                        <div className="Jakarta Sans w-[200px] text-black font-[plus text-[1.5rem] font-bold leading-[normal]] ">
                            Our identitity
                        </div>
                        <div className="Jakarta Sans w-[477px] text-black font-[plus text-[2rem] font-bold leading-[normal]] mt-2.5">
                            <h1>Quality-passed Vehicles.</h1>
                        </div>
                        <div className="flex justify-center w-[422px] text-black font-serif text-xl mt-5">
                            Our fleets has been surpassed our vehicle quality control check and will provide the best quality so you can enjoy your travel better.
                        </div>
                        <Button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-5 text-center me-2  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                            Browse all vehicles
                        </Button>      
                    
                </div>
            </div>
        </>
    );
};

export default HomeContent2;