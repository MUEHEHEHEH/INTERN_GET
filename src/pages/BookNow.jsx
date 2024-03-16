import React from "react";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import BackGround from "../Components/layouts/BG";
import Button from "../Components/elements/button/button";
import Inputform from "../Components/elements/input/Form";

const BookNow = () => {
    return(
        <BackGround>
            <div className="w-auto h-[4086px] relative">
                <Navbar/>
                <div className="top-14 flex-col justify-start items-start gap-2.5 inline-flex absolute">
                    <div className="justify-start items-end inline-flex">
                        <img className="w-[741px] h-[793px] " src="/carr.png" />
                        <img className="w-[738px] h-[793px] " src="/bikee.png" />
                    </div>
                </div>
                <div className="w-[1017px] flex items-start justify-start pt-40 pl-10 bg-opacity-50">
                    <div className="w-[1072px] h-[1300px] text-white text-[40px] font-extrabold font-['Plus Jakarta Sans'] absolute leading-[48px] text-shadow-[2px_2px_4px_rgba(0, 0, 0, 0.3)]">
                        Simplify Travel with Our Seamless, Secure, and Reliable Car and Motorcycle Rentals.
                    </div>
                </div>
                <div className="left-[52px] top-[554px] absolute flex-col justify-start items-start gap-[62px] inline-flex">
                    <div className="flex-col justify-center items-center gap-20 flex">
                    <div className="px-[60px] py-[30px] bg-red-500 rounded-[32px] shadow flex-col justify-center items-start gap-7 flex">
                        <div className="justify-center items-end gap-2.5 inline-flex">
                            <div className="justify-center items-end gap-2.5 flex">
                                <div className="text-white text-4xl font-semibold font-['Plus Jakarta Sans']">Book a</div>
                                <div className="bg-zinc-500 rounded-[10px] justify-start items-start flex">
                                <div className="h-[38px] py-[5px] rounded-[10px] justify-center items-center gap-2.5 flex">
                                    <div className="w-[25px] h-[25px] bg-white rounded-full" />
                                    <Button className="text-white text-[22px] font-semibold font-['Plus Jakarta Sans']">Car</Button>
                                </div>
                                </div>
                                <div className="bg-zinc-500 rounded-[10px] justify-start items-start flex">
                                <div className="h-[38px] py-[5px] rounded-[10px] justify-center items-center gap-2.5 flex">
                                    <div className="w-[25px] h-[25px] bg-white rounded-full" />
                                    <div className="text-white text-[22px] font-semibold font-['Plus Jakarta Sans']">Bike</div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="flex-col justify-end items-start gap-7 flex">
                                <div className="justify-center items-center gap-20 inline-flex">
                                    <div className="w-[568px] flex-col justify-start items-start gap-2 inline-flex">
                                    <Inputform label="Pick-up Location" name="pickUpLocation" type="text" placeholder="Enter Pick-up Location" />
                                    </div>
                                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                                    <Inputform label="Drop-off Location" name="DropoffLocation" type="text" placeholder="Enter Drop-off Location" />
                                    </div>
                                </div>
                                <div className="justify-start items-center gap-24 inline-flex">
                                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                                        <Inputform label="Transmission" name="Transmission" type="text" placeholder="Transmission" />
                                    </div>
                                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                                        <Inputform label="Start Date and Time" name="StartDateAndTime" type="text" placeholder="Start Date" width="w-[250px]" />
                                        <div className="justify-start items-start gap-8 flex-col">
                                            <Inputform label="End Date and Time" name="EndDateAndTime" type="text" placeholder="End Date" width="w-[250px]" />
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[1216px] h-[66px] px-4 py-2 bg-white rounded-xl justify-center items-center gap-2.5 inline-flex">
                                <Button className="text-center text-sky-950 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-7">Search</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-9 flex">
                        <div className="w-[1292px] justify-start items-start gap-16 inline-flex">
                            <div className="justify-start items-center gap-10 flex">
                            <div className="text-red-500 text-[32px] font-bold font-['Plus Jakarta Sans']">Search Result</div>
                            <div className="w-[907px] h-[69px] pl-[15px] bg-red-500 rounded-xl border border-zinc-400 justify-start items-center gap-[74px] flex">
                                <div className="w-[347px] h-[52px] text-white text-xl font-bold font-['Plus Jakarta Sans']">Somewhere her..</div>
                                <div className="w-[355px] h-[51px] text-white text-xl font-bold font-['Plus Jakarta Sans']">Here and there</div>
                            </div>
                            <div className="w-[91px] h-14 px-[9px] py-2 bg-amber-300 rounded-[11px] border border-zinc-400 justify-center items-center gap-2.5 flex">
                                <Button className="text-stone-900 text-2xl font-bold font-['Plus Jakarta Sans']">Edit</Button>
                            </div>
                            </div>
                        </div>
                        <Inputform className="w-[1289px] h-[72px] px-5 py-2.5 bg-white rounded-[20px] border border-zinc-400 justify-start items-center gap-[23px] flex" placeholder="Search"></Inputform>
                    </div>
                    <div className="justify-start items-start gap-12 flex">
                        <img className="w-[479px] h-[184px]" src="/Rectangle_8.png" />
                    </div>
                    <div className="h-[1877px] pb-[52px] justify-center items-start gap-9 inline-flex">
                        <div className="h-[1877px] px-4 py-2 bg-white rounded-lg border-2 border-zinc-400 flex-col justify-start items-start gap-5 inline-flex">
                        <div className="w-[455px] justify-start items-start gap-2.5 inline-flex">
                            <div className="w-[335px] h-10 text-stone-900 text-[32px] font-extrabold font-['Plus Jakarta Sans']">Filter</div>
                            <div className="w-[110px] h-10 text-right text-stone-900 text-sm font-light font-['Plus Jakarta Sans']">Clear all filters</div>
                        </div>
                        <div className="w-[455px] h-[0px] bg-stone-900 border border-black"></div>
              
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                            <div className="w-[198px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Driver Preferences</div>
                            <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                 <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">With driver</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                    <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Without driver</div>
                            </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                            <div className="w-[198px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Vehicle Preferences</div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                    <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Motorcycle</div>
                                </div>
                                <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                    <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Car</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="h-[165px] flex-col justify-center items-start gap-2.5 flex">
                            <div className="w-[155px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Price per day</div>
                            <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Rp 0 - 200.000,00</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Rp 201.000,00 - 650.000,00</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Rp 650.000,00 - 2.000.000,00</div>
                            </div>
                            </div>
                        </div>
                        <div className="h-[125px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="w-[155px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Transmission</div>
                            <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Automatic</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Manual</div>
                            </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[11px] flex">
                            <div className="w-[155px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Car Type</div>
                            <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">City Car</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Compact MPV</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Mini MPV</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Minibus</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">SUV</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Hatchback</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Sedan</div>
                            </div>
                            </div>
                        </div>
                        <div className="w-[180px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="w-[155px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Car Features</div>
                            <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">All-Wheel Drive</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Front-Wheel Drive</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Rear-Wheel Drive</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Air Conditioning </div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">L-sized Luggage</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">S-sized Luggage</div>
                            </div>
                            </div>
                            <div />
                        </div>
                        <div className="h-[205px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="w-[180px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Motorcycle Type</div>
                            <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Scooter</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Underbone</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Naked</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                    <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Sport</div>
                            </div>
                            </div>
                        </div>
                        <div className="h-[205px] flex-col justify-start items-start gap-2.5 flex">
                            <div className="w-[180px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">Car Size</div>
                            <div className="flex-col justify-center items-start gap-2.5 flex">
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">L-sized (7 seats)</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">M-sized (5 seats)</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">S-sized (2 seats)</div>
                            </div>
                            <div className="justify-center items-center gap-2.5 inline-flex">
                                <div className="w-8 h-[30px] relative">
                                <input type="checkbox" className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg" />
                                </div>
                                <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">Sport</div>
                            </div>
                            </div>
                        </div>
                        </div>
                     </div>
                </div>
            </div>
            <Footer/>
        </BackGround>
    );
};

export default BookNow;