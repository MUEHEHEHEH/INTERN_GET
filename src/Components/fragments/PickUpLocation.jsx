import React from "react";
import Inputform from "../elements/input/Form";

const PickUpLocation = () => {
  return (
    <>
      <div className="w-[697px] h-[310px] px-6 py-3 bg-white rounded-xl border border-zinc-400 flex-col justify-center items-start gap-9 flex">
        <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
          Pick-up Location
        </div>
        <div className="flex-col justify-center items-start gap-9 flex">
          <div className="inline-flex items-center gap-2.5">
            <div className="w-8 h-[30px] relative">
              <input
                type="checkbox"
                className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg flex items-start justify-center "
              />
            </div>
            <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
              Kantor Rental
            </div>
            <div className="text-red-900 text-base font-light font-['Plus Jakarta Sans'] leading-normal">
              Gratis
            </div>
          </div>

          <div className="flex-col justify-center items-start gap-6 flex">
            <div className="justify-center items-start gap-2.5 inline-flex">
              <div className="w-8 h-[30px] relative">
                <input
                  type="checkbox"
                  className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg flex items-start justify-center "
                />
              </div>
              <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                Lokasi lainnya
              </div>
              <div className="text-red-900 text-base font-light font-['Plus Jakarta Sans'] leading-normal">
                Rp 150.000,00
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                Cari lokasi atau alamat jemput
              </div>
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="w-[45px] h-[45px] px-[6.75px] py-[2.25px] justify-center items-center flex">
                  <div className="w-[31.50px] h-[40.50px] relative"> </div>
                  <img src="/mapsLocation.png" alt="location" />
                </div>
                <input
                  type="text"
                  className="w-[577px] h-[50px] bg-white-300 rounded-xl border-2 border-zinc-400"
                />
                <div className="text-black text-base font-light font-['Plus Jakarta Sans']">
                  University of Brawijaya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUpLocation;
