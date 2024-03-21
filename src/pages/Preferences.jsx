import React from "react";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import Button from "../Components/elements/button/button";
import { dummyData } from "../util/fleetDetailsData";
import CarPrice from "../Components/fragments/CarPrice";
import Inputform from "../Components/elements/input/Form";
import PickUpLocation from "../Components/fragments/PickUpLocation";
import DropOffLocation from "../Components/fragments/DropOffLocation";

const Preferences = () => {

    const BackToPreviewPage= (e) => {
        e.preventDefault();
        window.location.href="/FleetDetails";
    }; 
    const handleOnClickNext = (e) => {
        e.preventDefault();
        window.location.href="/CheckOut";
    };

    return(
        <>
            <div className="w-max-lg h-[2658px] relative bg-gradient-to-br from-white to-rose-300">
                <Navbar/>
                <div className="left-[65px] top-[122px] absolute flex-col justify-start items-center gap-20 inline-flex">
                    <div className="flex-col justify-start items-start  ml-5 gap-4 flex">
                        <div className="p-2.5 justify-start items-start gap-[10px] inline-flex">
                            <div className="w-[417px] h-[7px] bg-red-500" />
                            <div className="w-[417px] h-[7px] bg-red-500" />
                            <div className="w-[417px] h-[7px] bg-zinc-300" />
                        </div>
                        <Button onClick={BackToPreviewPage} className="text-blue-400 text-base font-medium font-['Plus Jakarta Sans']">Back to previous page</Button>
                        <div className="text-neutral-700 text-4xl font-bold font-['Plus Jakarta Sans']">Set Preferences</div>
                        <div className="text-black text-base font-light font-['Plus Jakarta Sans']">Next up... Checkout</div>
                    </div>
                    <div className="justify-start items-start gap-9 inline-flex">
                    <div className="flex-col justify-start items-start gap-14 inline-flex">
                        <PickUpLocation/>
                        <div className="w-[697px] h-[310px] px-6 py-3 bg-white rounded-xl border border-zinc-400 flex-col justify-center items-start gap-9 flex">
                        <DropOffLocation/>
                        </div>
                        <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="w-[697px] px-6 py-3 bg-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <Button onClick={handleOnClickNext} className="text-white text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Next</Button>
                        </div>
                        <div className="w-[697px] px-6 py-3 bg-green-50 rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <div className="w-12 h-12 relative" />
                            <img src="" alt="" />
                            <div className="text-green-600 text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Contact Vendor</div>
                        </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-16 inline-flex">
                        <div className="w-[562px] h-[179px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="h-[178px] px-[42px] py-6 bg-white rounded-2xl border-t-4 border-red-500 flex-col justify-start items-start gap-3.5 flex">
                            {dummyData.map((car) => (
                                <CarPrice
                                    key={car.id}
                                    car={car}
                                />
                            ))}
                        </div>
                        </div>
                        <div />
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>

    );
};

export default Preferences;