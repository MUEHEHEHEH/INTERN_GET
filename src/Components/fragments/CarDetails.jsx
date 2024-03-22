import React from "react";

const CarDetails = ({ car }) => (
  <>
    <div className="w-[697px] px-10 py-[35px] bg-white rounded-[25px] border border-zinc-400 justify-start items-start gap-[55px]">
      <img className="w-[599px] h-[410px]" src={car.imageUrl} alt={car.name} />
      <div className="text-black text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
        {car.name}
      </div>
      <div className="justify-center items-center gap-[65px] flex">
        <div className="px-4 py-3 justify-start items-center gap-2.5 flex">
          <img
            className="w-[146px] h-[66px] mr-10 pl-1"
            src="/Logo.png"
            alt="Dummy Logo"
          />
          <div className="justify-center items-start gap-1 flex">
            <div className="px-2 py-1 bg-yellow-500 rounded-md justify-start items-center gap-2.5 flex">
              <div className="text-center text-sky-950 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                {car.rating}
              </div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-center text-stone-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                {car.ratingText}
              </div>
              <div className="text-center text-stone-900 text-base font-light font-['Plus Jakarta Sans'] leading-normal">
                {car.reviewCount}
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-4 flex">
          {car.features.map((feature, index) => (
            <div
              key={index}
              className="p-2.5 rounded-[13px] border border-sky-950 justify-center items-center gap-2.5 flex"
            >
              <div className="text-black text-xl font-light font-['Plus Jakarta Sans']">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default CarDetails;
