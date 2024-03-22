import React from "react";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import BackGround from "../Components/layouts/BG";

const Orders = () => {
  <BackGround>
    <Navbar />
    <div className="w-[1440px] h-[2138px] relative bg-gradient-to-b from-white to-red-400">
      <div className="h-[93px] left-[51px] top-[188px] absolute flex-col justify-start items-start gap-12 inline-flex">
        <div className="flex-col justify-start items-start gap-[50px] flex">
          <div className="pr-2.5 py-2.5 justify-center items-center inline-flex">
            <div className="h-[73px] justify-start items-center gap-2.5 flex">
              <div className="w-[49px] h-[49px] relative origin-top-left -rotate-90" />
              <div className="text-black text-[61px] font-bold font-['Plus Jakarta Sans'] leading-[73.20px]">
                Orders{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-16 pl-[42px] pr-[125px] pt-1 left-0 top-0 absolute justify-start items-center inline-flex">
        <div className="py-4 justify-start items-center gap-[42px] inline-flex">
          <div className="justify-start items-center gap-[432px] flex">
            <div className="w-[262px] h-14 relative">
              <img
                className="w-[71px] h-14 left-0 top-0 absolute"
                src="https://via.placeholder.com/71x56"
              />
              <div className="w-[191px] h-[21px] left-[71px] top-[15px] absolute text-rose-950 text-lg font-normal font-['Racing Sans One']">
                Gain ur Easy <br />
                Travel
              </div>
            </div>
            <div className="justify-start items-start gap-11 flex">
              <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Home
              </div>
              <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Book Now
              </div>
              <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Join Us
              </div>
              <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Contact Us
              </div>
            </div>
          </div>
          <div className="w-[140px] h-10 relative">
            <div className="w-[140px] h-10 left-0 top-0 absolute bg-red-500 rounded-[5px] border border-black" />
            <div className="w-[107px] left-[17px] top-[8px] absolute text-center text-white text-lg font-normal font-['Roboto'] leading-normal">
              Log-Out
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[410px] left-0 top-[1728px] absolute">
        <div className="w-[1440px] h-[410px] left-0 top-0 absolute bg-yellow-500 shadow border border-black" />
        <div className="left-[614px] top-[355px] absolute text-center text-black text-sm font-normal font-['Roboto'] leading-tight">
          © 2023 — 2024
        </div>
        <div className="left-[722px] top-[355px] absolute text-center text-black text-sm font-normal font-['Roboto'] leading-tight">
          Privacy — Terms
        </div>
        <div className="left-[262px] top-[115px] absolute">
          <div className="left-0 top-0 absolute text-sky-950 text-sm font-bold font-['Roboto'] leading-tight">
            Home
          </div>
          <div className="left-[114px] top-0 absolute text-sky-950 text-sm font-bold font-['Roboto'] leading-tight">
            Book now
          </div>
        </div>
        <div className="left-[980px] top-[115px] absolute">
          <div className="left-0 top-0 absolute text-sky-950 text-sm font-bold font-['Roboto'] leading-tight">
            Join Us
          </div>
          <div className="left-[93px] top-0 absolute text-sky-950 text-sm font-bold font-['Roboto'] leading-tight">
            Contact Us
          </div>
        </div>
        <div className="w-[175px] h-14 left-[633px] top-[85px] absolute">
          <img
            className="w-[71px] h-14 left-0 top-0 absolute"
            src="https://via.placeholder.com/71x56"
          />
          <div className="w-[191px] h-[21px] left-[71px] top-[15px] absolute text-rose-950 text-lg font-normal font-['Racing Sans One']">
            Gain ur Easy <br />
            Travel
          </div>
        </div>
        <div className="w-[422px] h-[422px] left-[-185px] top-[188px] absolute bg-red-600 rounded-full shadow-inner" />
        <div className="w-[988px] h-[39px] left-[211px] top-[223px] absolute text-center text-black text-base font-light font-['Plus Jakarta Sans'] leading-normal">
          Under section 107 of the copyright Act 1976, allowance is mad for FAIR
          USE for purpose such a as criticism, comment, news reporting,
          teaching, scholarship and research. Fair use is a use permitted by
          copyright statues that might otherwise be infringing. Non- Profit,
          educational or personal use tips the balance in favor of FAIR USE.
        </div>
      </div>
      <div className="left-[75px] top-[355px] absolute flex-col justify-start items-start gap-[52px] inline-flex">
        <div className="flex-col justify-start items-start gap-[116px] flex">
          <div className="flex-col justify-start items-start gap-9 flex">
            <div className="text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
              Recent Orders
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[1290px] h-[158px] justify-end items-center gap-[132px] inline-flex">
                <div className="h-[162px] bg-white rounded-2xl border border-zinc-400 justify-start items-center gap-[120px] flex">
                  <div className="px-3 justify-start items-center gap-8 flex">
                    <img
                      className="w-[247px] h-[162px] origin-top-left rotate-180"
                      src="https://via.placeholder.com/247x162"
                    />
                    <div className="flex-col justify-center items-start gap-3 inline-flex">
                      <div className="justify-start items-center gap-[19px] inline-flex">
                        <div className="text-black text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[48px]">
                          Toyota GR86
                        </div>
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                          DD/MM/YY
                        </div>
                        <div className="text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                          GR 86 GW
                        </div>
                      </div>
                      <div className="justify-start items-start gap-2 inline-flex" />
                    </div>
                  </div>
                  <div className="h-[145px] justify-end items-center gap-8 flex">
                    <div className="w-[145px] h-[0px] origin-top-left rotate-90 border border-zinc-500"></div>
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                      <div className="w-[94px] h-[23px] text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                        Price in total
                      </div>
                      <div className="text-sky-950 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                        Rp 1.500.000,00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1290px] bg-white rounded-2xl border border-zinc-400 justify-start items-center gap-[120px] inline-flex">
                <div className="px-3 justify-start items-center gap-8 flex">
                  <img
                    className="w-[247px] h-[162px] origin-top-left rotate-180"
                    src="https://via.placeholder.com/247x162"
                  />
                  <div className="flex-col justify-center items-start gap-3 inline-flex">
                    <div className="justify-start items-center gap-[19px] inline-flex">
                      <div className="text-black text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[48px]">
                        Toyota GR86
                      </div>
                      <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                        DD/MM/YY
                      </div>
                      <div className="text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                        GR 86 GW
                      </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex" />
                  </div>
                </div>
                <div className="h-[145px] justify-end items-center gap-8 flex">
                  <div className="w-[145px] h-[0px] origin-top-left rotate-90 border border-zinc-500"></div>
                  <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="w-[94px] h-[23px] text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                      Price in total
                    </div>
                    <div className="text-sky-950 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                      Rp 1.500.000,00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-9 flex">
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                Order History
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="w-[1290px] h-[158px] justify-end items-center gap-[132px] inline-flex">
                <div className="h-[162px] bg-white rounded-2xl border border-zinc-400 justify-start items-center gap-[120px] flex">
                  <div className="px-3 justify-start items-center gap-8 flex">
                    <img
                      className="w-[247px] h-[162px] origin-top-left rotate-180"
                      src="https://via.placeholder.com/247x162"
                    />
                    <div className="flex-col justify-center items-start gap-3 inline-flex">
                      <div className="justify-start items-center gap-[19px] inline-flex">
                        <div className="text-black text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[48px]">
                          Toyota GR86
                        </div>
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                          DD/MM/YY
                        </div>
                        <div className="text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                          GR 86 GW
                        </div>
                      </div>
                      <div className="justify-start items-start gap-2 inline-flex" />
                    </div>
                  </div>
                  <div className="h-[145px] justify-end items-center gap-8 flex">
                    <div className="w-[145px] h-[0px] origin-top-left rotate-90 border border-zinc-500"></div>
                    <div className="flex-col justify-start items-start gap-6 inline-flex">
                      <div className="w-[94px] h-[23px] text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                        Price in total
                      </div>
                      <div className="text-sky-950 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                        Rp 1.500.000,00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1290px] bg-white rounded-2xl border border-zinc-400 justify-start items-center gap-[120px] inline-flex">
                <div className="px-3 justify-start items-center gap-8 flex">
                  <img
                    className="w-[247px] h-[162px] origin-top-left rotate-180"
                    src="https://via.placeholder.com/247x162"
                  />
                  <div className="flex-col justify-center items-start gap-3 inline-flex">
                    <div className="justify-start items-center gap-[19px] inline-flex">
                      <div className="text-black text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[48px]">
                        Toyota GR86
                      </div>
                      <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                        DD/MM/YY
                      </div>
                      <div className="text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                        GR 86 GW
                      </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex" />
                  </div>
                </div>
                <div className="h-[145px] justify-end items-center gap-8 flex">
                  <div className="w-[145px] h-[0px] origin-top-left rotate-90 border border-zinc-500"></div>
                  <div className="flex-col justify-start items-start gap-6 inline-flex">
                    <div className="w-[94px] h-[23px] text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                      Price in total
                    </div>
                    <div className="text-sky-950 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                      Rp 1.500.000,00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </BackGround>;
};
export default Orders;
