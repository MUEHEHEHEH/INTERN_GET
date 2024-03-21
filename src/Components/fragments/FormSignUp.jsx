import React, { useState } from "react";
import { Link } from "react-router-dom";
import Inputform from "../elements/input/Form";
import Button from "../elements/button/button";
import { Fade } from "react-awesome-reveal";

const FormSignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        confirmEmail: "",
        phoneNumber: "",
        houseAddress: "",
        ktpScan: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        console.log(formData);
        window.location.href = "/SignIn";
    };

    return (
        <div className="flex flex-col w-[408px] h-auto">
            <Fade direction="right" duration={1000}>
                <>
                    <h1 className="flex items-start justify-center text-center text-5xl text-black font-[#1C1917] py-10">Sign-Up</h1>
                    <form className="max-w-sm mt-20 flex flex-col justify-start mr-10" onSubmit={handleSubmit}>
                        <Inputform 
                            label="Full Name" 
                            type="text"
                            required={true}
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="E-mail" 
                            type="email"
                            required={true}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="Confirm E-mail" 
                            type="email"
                            required={true}
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="Phone Number" 
                            type="tel"
                            required={true}
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="House Address" 
                            type="text"
                            required={true}
                            name="houseAddress"
                            value={formData.houseAddress}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="KTP Scan" 
                            type="file"
                            required={true}
                            name="ktpScan"
                            value={formData.ktpScan}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="Date of Birth" 
                            type="date"
                            required={true}
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="Password" 
                            type="password"
                            required={true}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Inputform 
                            label="Confirm Password" 
                            type="password"
                            required={true}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <div className="flex flex-col justify-center items-center">
                            <Button 
                                type="submit" 
                                className="text-black bg-[#FF9A9A] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-bold rounded-md text-md py-2.5 text-center w-[200px]"
                            >
                                Sign-Up
                            </Button>
                            <h5 className="text-sm mt-1 text-gray-500">
                                Have an account? &nbsp;
                                <Button className="font-sm text-red-600">
                                    <Link to="/SignIn">Sign-In</Link>
                                </Button>
                            </h5>
                        </div>
                    </form>
                </>
            </Fade>
        </div>
    );
};

export default FormSignUp;
