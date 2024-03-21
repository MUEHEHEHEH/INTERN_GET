import React from "react";
import { dummyData } from "../../util/fleetDetailsData";
const CarSpecifications = ({car}) => {
    return(
        <>
            <div className="w-[312px] h-[58px] text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">Specification</div>
                <div className="h-[93px] justify-start items-start gap-2.5 inline-flex">
                    {
                        <div key={car.id}>
                            {car.specifications.map((specs, index) => (
                                <div key={index} className="flex-col justify-start items-center gap-3 inline-flex">
                                    {specs.map((spec, i) => (
                                        <div key={i} className="w-[151px] h-[19px] text-black text-base font-normal font-['Plus Jakarta Sans']">
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    }
                </div>
        </>
    );

}

export default CarSpecifications