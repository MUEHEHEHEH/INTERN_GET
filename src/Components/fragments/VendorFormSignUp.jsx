import React from "react";
import { Link } from "react-router-dom";
import Inputform from "../elements/input/Form";
import Button from "../elements/button/button";
import { Fade } from "react-awesome-reveal";

const VendorFormSignUp = () => {
  const signUp = (e) => {
    e.preventDefault();
    window.location.href = "/VendorSignIn";
  };
  return (
    <div className="flex flex-col w-[408px] h-auto">
      <Fade direction="right" duration={1000}>
        <>
          <h1 className="flex items-start justify-center text-center text-5xl text-black font-[#1C1917] py-10 font-bold">
            Vendor Sign-Up
          </h1>
          <form
            className="max-w-sm mt-20 flex flex-col justify-start mr-10"
            onSubmit={signUp}
          >
            <Inputform
              label="Company Name"
              type="text"
              required={true}
              name="CompanyName"
            ></Inputform>
            <Inputform
              label="E-mail"
              type="email"
              required={true}
              name="Email"
            ></Inputform>
            <Inputform
              label="Confirm E-mail"
              type="email"
              required={true}
              name="Confirm E-mail"
            ></Inputform>
            <Inputform
              label="Phone Number"
              type="tel"
              required={true}
              name="Phone Number"
            ></Inputform>
            <Inputform
              label="Company Address"
              type="text"
              required={true}
              name="Company Address"
            ></Inputform>
            <Inputform
              label="KTP Scan"
              type="file"
              required={true}
              placeholder="Upload Image"
              name="KTP Scan"
            ></Inputform>
            <Inputform
              label="P.T Certification"
              type="file"
              required={true}
              placeholder="Upload Image"
              name="P.T Certification"
            ></Inputform>
            <Inputform
              label="Password"
              type="password"
              required={true}
              name="Password"
            ></Inputform>
            <Inputform
              label="Confirm Password"
              type="password"
              required={true}
              name="Confirm Password"
            ></Inputform>
            <div className="flex flex-col justify-center items-center">
              <Button
                type="submit"
                className=" text-black bg-[#FF9A9A] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-bold rounded-md text-md py-2.5 text-center w-[200px]"
              >
                Sign-Up
              </Button>
              <h5 className="text-sm mt-1 text-gray-500">
                Have an account? &nbsp;
                <Button className="font-sm text-red-600">
                  {" "}
                  <Link to="/VendorSignIn"> Sign-In </Link>
                </Button>
              </h5>
            </div>
          </form>
        </>
      </Fade>
    </div>
  );
};

export default VendorFormSignUp;
