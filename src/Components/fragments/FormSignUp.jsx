import React from "react";
import { Link } from "react-router-dom";
import Inputform from "../elements/input/Form";
import Button from "../elements/button/button";
const FormSignUp = () => {
    const signUp= (e) => {
        e.preventDefault(); 
        window.location.href = "/SignIn";
    };
    return(
            <div className="flex flex-col w-[408px] h-auto">
                <h1 className="flex items-start justify-center text-center text-5xl text-black font-[#1C1917] py-10">Sign-Up</h1>
                <form className="max-w-sm mt-20 flex flex-col justify-start mr-10" onSubmit={signUp}>
                    <Inputform 
                        label = "Full Name" 
                        type = "text" 
                        name = "FullName">
                    </Inputform>
                    <Inputform 
                        label = "E-mail" 
                        type = "email" 
                        name = "Email">
                    </Inputform>
                    <Inputform 
                        label = "Confirm E-mail" 
                        type = "email" 
                        name = "Confirm E-mail">
                    </Inputform>
                    <Inputform 
                        label = "Phone Number" 
                        type = "tel" 
                        name = "Phone Number">
                    </Inputform>
                    <Inputform 
                        label = "House Address" 
                        type = "text" 
                        name = "House Address">
                    </Inputform>
                    <Inputform 
                        label = "KTP Scan" 
                        type = "file" 
                        placeholder = "Upload Image"
                        name = "KTP Scan">
                    </Inputform>
                    <Inputform 
                        label = "Date of Birth" 
                        type = "date" 
                        name = "Date of Birth">
                    </Inputform>
                    <Inputform 
                        label = "Password" 
                        type = "password" 
                        name = "Password">
                    </Inputform>
                    <Inputform 
                        label = "Confirm Password" 
                        type = "password" 
                        name = "Confirm Password">
                    </Inputform> 
                    <div className="flex flex-col justify-center items-center">
                        <Button 
                            type="submit" 
                            className=" text-black bg-[#FF9A9A] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-bold rounded-md text-md py-2.5 text-center w-[200px]"
                           
                        >
                            Sign-Up
                        </Button>

                        <h5 className="text-sm mt-1 text-gray-500">
                            Have an account? &nbsp;
                            <Button className="font-sm text-red-600" > <Link to = "/SignIn">  Sign-In </Link></Button>
                        </h5>
                    </div>
                </form>
            </div>
    );
};

export default FormSignUp;