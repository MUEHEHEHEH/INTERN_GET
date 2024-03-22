import React from "react";

const CarPrice = ({ car }) => (
  <>
    <div className="w-[460px] h-[34px] text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
      Price Detail
    </div>
    <div className="w-[206px] h-[34px] text-sky-950 text-xl font-bold font-['Plus Jakarta Sans'] leading-[35px]">
      Total
    </div>
    <div className="justify-center items-center gap-[180px] inline-flex">
      <div className="w-[277px] h-[34px] text-amber-300 text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[35px]">
        <span key={car.id}>
          {car.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </span>
      </div>
    </div>
  </>
);

export default CarPrice;
