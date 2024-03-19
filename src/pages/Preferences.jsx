import React from "react";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import Button from "../Components/elements/button/button";

const Preferences = () => {

    const BackToPreviewPage= (e) => {
        e.preventDefault();
        window.location.href="/FleetDetails";
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
                        <div className="w-[697px] h-[310px] px-6 py-3 bg-white rounded-xl border border-zinc-400 flex-col justify-center items-start gap-9 flex">
                        <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">Pick-up Location</div>
                        <div className="flex-col justify-center items-start gap-9 flex">
                            <div className="justify-center items-start gap-2.5 inline-flex">
                            <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300 rounded-full border border-zinc-400" />
                            </div>
                            <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">Kantor Rental</div>
                            <div className="text-red-900 text-base font-light font-['Plus Jakarta Sans'] leading-normal">Gratis</div>
                            </div>
                            <div className="flex-col justify-center items-start gap-6 flex">
                            <div className="justify-center items-start gap-2.5 inline-flex">
                                <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300 rounded-full border border-zinc-400" />
                                </div>
                                <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">Lokasi lainnya</div>
                                <div className="text-red-900 text-base font-light font-['Plus Jakarta Sans'] leading-normal">Rp 150.000,00</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-2.5 flex">
                                <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Cari lokasi atau alamat jemput</div>
                                <div className="justify-start items-start gap-2.5 inline-flex">
                                <div className="w-[45px] h-[45px] px-[6.75px] py-[2.25px] justify-center items-center flex">
                                    <div className="w-[31.50px] h-[40.50px] relative">
                                    </div>
                                </div>
                                <div className="w-[577px] h-[50px] bg-zinc-300 rounded-xl border-2 border-zinc-400" />
                                <div className="text-black text-base font-light font-['Plus Jakarta Sans']">University of Brawijaya</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-[697px] h-[310px] px-6 py-3 bg-white rounded-xl border border-zinc-400 flex-col justify-center items-start gap-9 flex">
                        <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">Drop-off Location</div>
                        <div className="justify-center items-start gap-2.5 inline-flex">
                            <div className="w-8 h-8 relative">
                            <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300 rounded-full border border-zinc-400" />
                            </div>
                            <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">Kantor Rental</div>
                            <div className="text-rose-950 text-base font-light font-['Plus Jakarta Sans'] leading-normal">Gratis</div>
                        </div>
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className="justify-center items-start gap-2.5 inline-flex">
                            <div className="w-8 h-8 relative">
                                <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300 rounded-full border border-zinc-400" />
                            </div>
                            <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">Lokasi lainnya</div>
                            <div className="text-rose-950 text-base font-light font-['Plus Jakarta Sans'] leading-normal">Rp 150.000,00</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-2.5 flex">
                            <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Cari lokasi atau alamat drop-off</div>
                            <div className="justify-start items-start gap-2.5 inline-flex">
                                <div className="w-[45px] h-[45px] px-[6.75px] py-[2.25px] justify-center items-center flex">
                                <div className="w-[31.50px] h-[40.50px] relative">
                                </div>
                                </div>
                                <div className="w-[577px] h-[50px] bg-zinc-300 rounded-xl border-2 border-zinc-400" />
                                <div className="text-black text-base font-light font-['Plus Jakarta Sans']">University of Brawijaya</div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="w-[697px] px-6 py-3 bg-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <div className="text-white text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Next</div>
                        </div>
                        <div className="w-[697px] px-6 py-3 bg-green-50 rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <div className="w-12 h-12 relative" />
                            <div className="text-green-600 text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Contact Vendor</div>
                        </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-16 inline-flex">
                        <div className="w-[562px] h-[179px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="h-[178px] px-[42px] py-6 bg-white rounded-2xl border-t-4 border-red-500 flex-col justify-start items-start gap-3.5 flex">
                            <div className="w-[206px] h-[34px] text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">Price Detail</div>
                            <div className="w-[206px] h-[34px] text-sky-950 text-xl font-bold font-['Plus Jakarta Sans'] leading-[35px]">Total</div>
                            <div className="justify-center items-center gap-[180px] inline-flex">
                            <div className="w-[277px] h-[34px] text-amber-300 text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[35px]">Rp 1.500.000,00</div>
                            </div>
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