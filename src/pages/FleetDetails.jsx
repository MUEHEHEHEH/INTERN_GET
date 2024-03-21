import React from "react";
import Navbar from "../Components/fragments/Navbar";
import Button from "../Components/elements/button/button";
import { dummyData } from "../util/fleetDetailsData";
import Footer from "../Components/fragments/Footer";
import CarDetails from "../Components/fragments/CarDetails";
import CarPrice from "../Components/fragments/CarPrice";
import CarSpecifications from "../Components/fragments/CarSpecifications";
import AboutCar from "../Components/fragments/AboutCar";

const FleetDetails = () => {
    const handleOnClickBack = (e) => {
        e.preventDefault();
        window.location.href="/BookNow";
    };
    const handleOnClickNext = (e) => {
        e.preventDefault();
        window.location.href="/Preferences";
    };

    return(
        <>
            <Navbar/>
            <div className="w-max-lg h-[2466px] relative bg-gradient-to-b from-white to-rose-300">
                <div className="left-[70px]  absolute flex-col justify-start items-center gap-6 inline-flex">
                    <div className="flex-col justify-start items-center gap-6 flex">
                    <div className="flex-col justify-start items-start gap-10 flex">
                        <div className=" justify-start items-start gap-[19px] inline-flex">
                        <div className="w-[417px] h-[7px] bg-red-500" />
                        <div className="w-[417px] h-[7px] bg-zinc-300" />
                        <div className="w-[417px] h-[7px] bg-zinc-300" />
                        </div>
                        <div className="flex-col justify-center items-start gap-[7px] flex">
                        <Button 
                            onClick={handleOnClickBack} 
                            className="text-blue-400 text-base font-medium font-['Plus Jakarta Sans']">
                                Back to search results 
                        </Button>
                        <div className="text-neutral-700 text-4xl font-bold font-['Plus Jakarta Sans']">Fleet Details</div>
                        <div className="text-black text-base font-light font-['Plus Jakarta Sans']">Next up... Preferences</div>
                        </div>
                    </div>
                    <div className="h-[1509px] justify-start items-start gap-9 inline-flex">
                        <div className="flex-col justify-start items-start gap-10 inline-flex">
                            {dummyData.map((car) => (
                                <CarDetails 
                                    key={car.id} 
                                    car={car} 
                                />
                            ))}
                            <div className="h-[346px] flex-col justify-start items-start gap-8 flex">
                                <div className="h-[170px] p-9 bg-white rounded-xl border border-zinc-400 flex-col justify-center items-start gap-2.5 flex">
                                {dummyData.map((car) => (
                                    <AboutCar 
                                        key={car.id} 
                                        car={car} 
                                    />
                                ))}
                                </div>
                                <div className="flex-col justify-start items-start gap-6 flex">
                                    <div className="w-[697px] px-6 py-3 bg-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                        <Button 
                                            onClick={handleOnClickNext} 
                                            className="text-white text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">
                                            Next
                                        </Button>
                                    </div>
                                    <Button className="w-[697px] px-6 py-3 bg-green-50 rounded-lg justify-center items-center gap-2.5 inline-flex">            
                                        <img src="/ic_baseline-whatsapp.png" alt="waLogo" />
                                        <div className="text-green-600 text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Contact Vendor</div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-center gap-10 inline-flex">
                            <div className="flex-col justify-start items-start gap-11 flex">
                                <div className="px-[42px] py-[21px] bg-white rounded-2xl border border-zinc-400 flex-col justify-start items-start gap-2.5 flex">
                                    {dummyData.map((car) => (
                                        <CarSpecifications
                                            key={car.id}
                                            car={car}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="w-[542px] h-[179px] flex-col justify-start items-center px-5 py-6 flex">
                                <div className="h-[178px] px-[42px] py-6 bg-white rounded-2xl border-t-4 border-red-500 flex-col justify-start items-start gap-3.5 flex">
                                <div>
                                    {dummyData.map((car) => (
                                        <CarPrice
                                            key={car.id}
                                            car={car}
                                        />
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    );

};

export default FleetDetails;