import React from "react";

const CheckOut = () => {
    return(
        <div className="w-[1309px] h-[1725px] flex-col justify-start items-end gap-20 inline-flex">
        <div className="flex-col justify-center items-start gap-[15px] flex">
            <div className="p-2.5 justify-start items-start gap-[19px] inline-flex">
            <div className="w-[417px] h-[7px] bg-red-500" />
            <div className="w-[417px] h-[7px] bg-red-500" />
            <div className="w-[417px] h-[7px] bg-red-500" />
            </div>
            <div className="text-blue-400 text-base font-light font-['Plus Jakarta Sans']">Back to previous page</div>
            <div className="text-neutral-700 text-4xl font-bold font-['Plus Jakarta Sans']">Check-out</div>
            <div className="text-black text-base font-light font-['Plus Jakarta Sans']">U are almost there!</div>
        </div>
        <div className="justify-start items-start gap-11 inline-flex">
            <div className="w-[699px] h-[1400px] flex-col justify-start items-start gap-10 inline-flex">
            <div className="px-8 py-4 bg-white rounded-[20px] border-2 border-zinc-400 flex-col justify-start items-start gap-7 flex">
                <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">Main Driver’s Details</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">Email Adress</div>
                    <div className="w-[634px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                    <div className="text-black text-base font-light font-['Plus Jakarta Sans']">ayrtonsenna@gmail.com</div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">Full name</div>
                    <div className="w-[634px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                    <div className="text-black text-base font-light font-['Plus Jakarta Sans']">Ayrton Senna</div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">NIK</div>
                    <div className="w-[634px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                    <div className="text-black text-base font-light font-['Plus Jakarta Sans']">23510201111021</div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">Phone number</div>
                    <div className="w-[634px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                    <div className="text-black text-base font-light font-['Plus Jakarta Sans']">08123456789012</div>
                </div>
                </div>
            </div>
            <div className="px-8 py-4 bg-white rounded-[20px] border-2 border-zinc-400 flex-col justify-start items-start gap-7 flex">
                <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">Payment</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">Cardholder’s Name</div>
                    <div className="w-[634px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                    <div className="text-black text-base font-light font-['Plus Jakarta Sans']">Ayrton Senna</div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">Card Number</div>
                    <div className="w-[634px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                    <div className="text-black text-base font-light font-['Plus Jakarta Sans']">9012398174209123</div>
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="justify-start items-start gap-4 inline-flex">
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">Expiration date</div>
                        <div className="w-[301px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                        <div className="text-black text-base font-light font-['Plus Jakarta Sans']">12/24</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']">CVC</div>
                        <div className="w-[301px] h-[43px] bg-zinc-100 rounded-lg border border-zinc-400" />
                        <div className="text-black text-base font-light font-['Plus Jakarta Sans']">078</div>
                    </div>
                    </div>
                </div>
                </div>
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
            <div className="h-14 px-8 py-4 bg-sky-950 rounded-lg flex-col justify-center items-center gap-2.5 flex">
                <div className="text-white text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Book now!</div>
            </div>
            <div className="self-stretch px-6 py-3 bg-green-50 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="w-12 h-12 relative" />
                <div className="text-green-600 text-xl font-bold font-['Plus Jakarta Sans'] leading-normal">Contact Vendor</div>
            </div>
            </div>
            <div className="flex-col justify-start items-start gap-11 inline-flex">
            <div className="h-[339px] px-[42px] py-6 bg-white rounded-2xl border-2 border-zinc-400 flex-col justify-start items-start gap-6 flex">
                <div className="justify-center items-center gap-6 inline-flex">
                <div className="text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">Pick-up and Drop off</div>
                <div className="w-[41px] h-[41px] relative" />
                </div>
                <div className="justify-start items-start gap-[35px] inline-flex">
                <div className="flex-col justify-center items-center gap-[18px] inline-flex">
                    <div className="w-8 h-8 bg-red-900 rounded-full" />
                    <div className="w-[63px] h-[0px] origin-top-left rotate-90 border border-black"></div>
                    <div className="w-8 h-8 bg-rose-950 rounded-full" />
                </div>
                <div className="flex-col justify-start items-start gap-[58px] inline-flex">
                    <div className="justify-start items-end gap-4 inline-flex">
                    <div className="flex-col justify-end items-start gap-8 inline-flex">
                        <div className="justify-start items-end gap-4 inline-flex">
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Thu, 7 March 2024</div>
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">09.00</div>
                        </div>
                        <div className="text-black text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7">Sinar Jaya Group HQ</div>
                    </div>
                    </div>
                    <div className="flex-col justify-end items-start gap-8 flex">
                    <div className="justify-start items-end gap-4 inline-flex">
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Fri, 8 March 2024</div>
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">09.00</div>
                    </div>
                    <div className="text-black text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7">Sinar Jaya Group HQ</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-[557px] h-[179px] flex-col justify-start items-center gap-2.5 flex">
                <div className="h-[178px] px-[42px] py-6 bg-white rounded-2xl border-t-4 border-red-500 flex-col justify-start items-start gap-3.5 flex">
                <div className="w-[206px] h-[34px] text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">Price Detail</div>
                <div className="w-[206px] h-[34px] text-sky-950 text-xl font-bold font-['Plus Jakarta Sans'] leading-[35px]">Total</div>
                <div className="justify-center items-center gap-[180px] inline-flex">
                    <div className="w-[277px] h-[34px] text-amber-300 text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[35px]">Rp 1.500.000,00</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CheckOut;