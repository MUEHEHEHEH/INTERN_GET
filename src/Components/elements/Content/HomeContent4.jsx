import React from "react";

const HomeContent4 = () =>{
    return(
        <>
            <div className="flex flex-col items-center justify-center w-auto h-auto bg-white">
                <h1 className="flex items-center justify-center Jakarta Sans text-center font-[plus text-[2.5rem] py-2">
                    <span className="font-bold">Our Promises </span>
                </h1>
                <div className="flex items-center justify-between">
                    We promised the best quality service and quality product  for our rental vehicles.
                </div>
                
                <div className="flex flex-row items-center justify-center py-10 gap-x-10 ">
                    <div className="w-[300px] relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                        <img className="rounded-lg w-auto h-[300px] " src="/Rectangle.png" alt="" /> 
                            <div className="p-5">
                                <h5 className="mb-2 ml-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Quality Checking</h5>
                                <p className="mb-3 ml-5 text-lg text-gray-700 dark:text-gray-400">We regulated to each vendor that they should provide, maintain the best quality product, and regularly check their fleet. </p>
                            </div>
                    </div>
                    <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-auto h-[300px] " src="/transparencey.png" alt="" /> 
                        <div className="p-5">
                            <h5 className="mb-2 ml-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Transparency </h5>
                            <p className="mb-3 ml-5 font-sm text-gray-700 dark:text-gray-400">Our company is committed to fostering a culture of transparency, ensuring open communication channels between our clients and vendors at all times. </p>
                        </div>
                    </div>
                    <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-auto h-[300px]" src="/speed.png" alt="" /> 
                        <div className="p-5">
                            <h5 className="mb-2 ml-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Speed</h5>
                            <p className ="mb-3 ml-5 font-sm text-gray-700 dark:text-gray-400">With our features like costumer service, online booking system, efficient Check-in/Check-Out, and Flexible Pickup and Drop-off, we aim to speed up time efficiency. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-auto h-[600px] bg-transparent"></div>

        </>
    );
};

export default HomeContent4;