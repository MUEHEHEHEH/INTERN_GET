import React from "react";
import Navbar from "../Components/fragments/Navbar";
import BackGround from "../Components/layouts/BG";
import Button from "../Components/elements/button/button";
import { dummyData } from "../util/fleetDetailsData";
import { appointments } from "../util/fleetDetailsData";
import CarPrice from "../Components/fragments/CarPrice";
import Footer from "../Components/fragments/Footer";
import Inputform from "../Components/elements/input/Form";
import DriverDetail from "../Components/fragments/DriverDetails";
import Payment from "../Components/fragments/Payment";
import Location from "../Components/fragments/Location";

const CheckOut = () => {
    const handleOnClickBack = (e) => {
        e.preventDefault();
        window.location.href = "/Preferences"
    }
    return(
        <>
            <Navbar/>
            <div className="w-auto h-[3027px] relative bg-gradient-to-b from-white to-rose-300">
                <div className="flex-col justify-center items-start pb-5 pl-20 flex">
                    <div className="p-2.5 justify-start items-start gap-[19px] inline-flex">
                    <div className="w-[417px] h-[7px] bg-red-500" />
                    <div className="w-[417px] h-[7px] bg-red-500" />
                    <div className="w-[417px] h-[7px] bg-red-500" />
                    </div>
                    <Button onClick={handleOnClickBack} className="text-blue-400 text-base font-light font-['Plus Jakarta Sans'] pb-2.5">Back to previous page</Button>
                    <div className="text-neutral-700 text-4xl font-bold font-['Plus Jakarta Sans'] pb-5">Check-out</div>
                    <div className="text-black text-base font-light font-['Plus Jakarta Sans']">U are almost there!</div>
                </div>
                <div className="justify-start items-start gap-11 inline-flex pl-20 pt-10">
                    <div className="w-[699px] h-[1400px] flex-col justify-start items-start gap-10 inline-flex">
                    <div className="px-8 py-4 bg-white rounded-[20px] border-2 border-zinc-400 flex-col justify-start items-start gap-7 flex">
                        <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">Main Driver’s Details</div>

                        <DriverDetail/>

                    </div>
                    <div className="px-8 py-4 bg-white rounded-[20px] border-2 border-zinc-400 flex-col justify-start items-start gap-7 flex">
                        <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">Payment</div>
                            <Payment/>
                        <div className="justify-center items-center gap-7 inline-flex">
                        <div className="w-9 h-6 relative" />
                        <div className="w-[38px] h-[29.54px] relative" />
                        <div className="w-9 h-[11.67px] relative" />
                        </div>
                    </div>
                    <div className="px-8 py-4 bg-white rounded-[20px] flex-col justify-start items-start gap-7 flex">
                        <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">Terms and Conditions</div>
                        <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">By Clicking Book now, you are confirming that u have read and agreed with <br/>our terms of service and our vendor’s  policy.</div>
                    </div>
                    <div className="w-[697px] px-6 py-3 bg-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <Button className="text-white text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Book now!</Button>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-green-50 rounded-lg justify-center items-center gap-2.5 inline-flex">
                        <div className="w-12 h-12 relative" />
                        <div className="text-green-600 text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Contact Vendor</div>
                    </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-11 inline-flex">
                    <div className="ml-20 h-[339px] px-[42px] py-6 bg-white rounded-2xl border-2 border-zinc-400 flex-col justify-start items-start gap-6 flex">
                        <div className="justify-center items-center gap-6 inline-flex">
                        <div className="text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">Pick-up and Drop off</div>
                        <div className="w-[41px] h-[41px] relative" />
                        </div>
                        <div className="justify-start items-start gap-[35px] inline-flex">
                        <div className="flex-col justify-center items-center gap-[18px] inline-flex">
                            <div className="w-8 h-8 bg-red-900 rounded-full" />
                            <div className="absolute ml-10 mb-5 w-[40px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                            <div className="w-8 h-8 mt-20 bg-rose-950 rounded-full" />
                        </div>
                        <div className="flex-col justify-start items-start gap-[58px] inline-flex">
                            {appointments.map((appointment) => (
                                <Location
                                    key={appointment.id}
                                    appointment={appointment}
                                />
                            ))}
                            
                        </div>
                        </div>
                    </div>
                    <div className="w-[680px] h-[179px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="h-[178px] px-[24px] py-6 bg-white rounded-2xl border-t-4 border-red-500 flex-col justify-start items-start gap-3.5 flex">
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
            <Footer/>

         
        
        </>
    );
};

export default CheckOut;