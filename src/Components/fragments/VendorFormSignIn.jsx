import React from "react";
import { Link } from "react-router-dom";
import Inputform from "../elements/input/Form";
import Button from "../elements/button/button";
import { Fade } from "react-awesome-reveal";

const VendorFormSignIn = () =>{
    const SignIn = (e) => {
        e.preventDefault();
        localStorage.setItem('email', e.target.email.value);
        localStorage.setItem('password', e.target.password.value);
        window.location.href = "/VendorDashboard";
    };

    return(
        <div className="inline-flex items-center justify-start mx-20 mb-20 pl-10  gap-5 bg-white border border-gray-200 rounded-lg w-[1320px] h-[640px]
                          hover:bg-gray-100 dark:border-gray-700 ">
                <Fade direction ="left" duration = {2000}>
                    <img className="w-[408px] rounded-t-lg h-[535px] " src="/car.png" alt="car" />
                </Fade>
                <Fade direction ="right" duration = {2000}>
                    <div className="flex flex-col w-[408px] h-[535px]">
                            <h1 className="flex items-start justify-center text-center text-5xl text-black pb-10 pl-10"><span className="font-Playball italic ">Vendor {" "} </span><strong>Sign-in</strong></h1>
                            <form className="max-w-sm mx-20" onSubmit={SignIn}>
                                <Inputform 
                                    label = "Username/Email" 
                                    type = "email"
                                    required = "true"
                                    name = "email">
                                </Inputform>

                                <Inputform 
                                    label = "Password" 
                                    type = "password"
                                    required = "true" 
                                    name = "password">
                                </Inputform>
                                
                                <div className="flex items-center my-2">
                                    <input id="link-checkbox" type="checkbox" className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-[gray-900] dark:text-gray-300">Remember my password </label>
                                </div>

                                <Button 
                                    type="submit" 
                                    className="text-black bg-[#FF9A9A] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-bold  rounded-lg text-md px-20 py-2.5 text-center w-[250px]"
                                    onSubmit={SignIn}
                                >
                                    Sign-in
                                </Button>
                                
                                <h1 className="flex items-center justify-center text-grey "> or </h1>
                                <Button 
                                    type="submit" 
                                    className="inline-flex items-center justify-start gap-3 text-black bg-[#FF9A9A] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-[10px] px-10 py-2.5 w-[250px]"
                                >
                                    <>
                                        <img src="/Group.png" alt="gmailLogo" />
                                        Sign-in Through Gmail
                                    </>
                                </Button>
                                <button className="text-sm flex items-center justify-start mt-1 text-gray-500">
                                    Forgot your password? &nbsp;
                                </button>
                                <h5 className="text-sm flex items-center justify-start mt-1 text-gray-500">
                                    Didn't have an account? &nbsp;
                                    <button className="font-sm text-red-600"> <Link to="/VendorSignUp"> Sign Up here</Link> </button>
                                </h5>
                            </form>
                         </div>
                </Fade>
        </div>
    );
};
export default VendorFormSignIn;