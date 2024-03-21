import React, { useState } from "react";

const AboutCar = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-flex flex-col h-auto items-s">
      <div className="w-[586px] text-stone-900 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">About Vehicle</div>
      <div className="flex flex-col">
        <div className="flex-col justify-center items-start gap-2.5 flex h-auto">
          <li className="w-[586px] text-stone-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">{car.transmission}</li>
          <li className="w-[586px] text-stone-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Works Properly</li>
        </div>
      </div>
      
    </div>
    
  );
};

export default AboutCar;
