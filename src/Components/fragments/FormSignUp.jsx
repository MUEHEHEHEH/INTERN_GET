import React, { useState } from "react";
import { Link } from "react-router-dom";
import Inputform from "../elements/input/Form";
import Button from "../elements/button/button";
import { Fade } from "react-awesome-reveal";
import { handleRegister } from "../api/services/Auth";
import { useNavigate } from "react-router-dom";

const FormSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    nomor_hp: "",
    alamat: "",
    KTP: "",
    role: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // localStorage.setItem("formData", JSON.stringify(formData));/
    // console.log(formData);
    // window.location.href = "/SignIn";
    try {
      const response = await handleRegister(formData);
      // console.log(response);
      setTimeout(() => {
        console.log(response);
          navigate("/SignIn");
      }, 1000);
      // return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-[408px] h-auto">
      <Fade direction="right" duration={1000}>
        <>
          <h1 className="flex items-start justify-center text-center text-5xl text-black font-[#1C1917] py-10">
            Sign-Up
          </h1>
          <form
            className="max-w-sm mt-20 flex flex-col justify-start mr-10"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Inputform
              label="Full Name"
              type="text"
              required={true}
              name="name"
              value={formData.name}
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
            {/* <Inputform 
                            label="Confirm E-mail" 
                            type="email"
                            required={true}
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                        /> */}
            <Inputform
              label="Phone Number"
              type="text"
              required={true}
              name="nomor_hp"
              value={formData.nomor_hp}
              onChange={handleChange}
            />
            <Inputform
              label="House Address"
              type="text"
              // required={true}
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
            />
            <Inputform
              label="KTP Scan"
              type="text"
              name="KTP"
              value={formData.KTP}
              onChange={handleChange}
            />
            {/* <Inputform 
                            label="Date of Birth" 
                            type="date"
                            required={true}
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        /> */}
            <Inputform
              label="Password"
              type="password"
              required={true}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Inputform
              label="Role"
              type="role"
              required={true}
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            {/* <Inputform 
                            label="Confirm Password" 
                            type="password"
                            required={true}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        /> */}
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
