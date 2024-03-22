import React from "react";
import Inputform from "../elements/input/Form";

const DriverDetail = () => {
  return (
    <div className="flex-col justify-start items-start gap-1 flex">
      <Inputform
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter Email Address"
        width="w-[634px]"
        required={true}
        text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
      />
      <Inputform
        label="Full Name"
        name="fullName"
        type="text"
        placeholder="Enter Full Name"
        width="w-[634px]"
        required={true}
        text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
      />
      <Inputform
        label="NIK"
        name="nik"
        type="text"
        placeholder="Enter NIK"
        width="w-[634px]"
        required={true}
        text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
      />
      <Inputform
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        placeholder="Enter Phone Number"
        width="w-[634px]"
        required={true}
        text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
      />
    </div>
  );
};

export default DriverDetail;
