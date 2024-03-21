import React from "react";

const Location = ({ appointment }) => {
    return (
        <>
            <div key={appointment.id} className="flex-col justify-end items-start gap-4 flex">
                <div className="flex-col justify-end items-start pb-2.5 inline-flex">
                    <div className="justify-start items-end gap-4 inline-flex">
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">{appointment.date}</div>
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">{appointment.time}</div>
                    </div>
                    <div className="text-black text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7">{appointment.location}</div>
                </div>
                <div className="flex-col justify-end items-start pt-10 inline-flex"> 
                    <div className="justify-start items-end gap-4 inline-flex">
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">{appointment.returnDate}</div>
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">{appointment.returntime}</div>
                    </div>
                    <div className="text-black text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7">{appointment.location}</div>
                </div>
            </div>
        </>
    );
};

export default Location;
