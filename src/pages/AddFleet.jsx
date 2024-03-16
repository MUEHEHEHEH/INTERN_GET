import React from "react";
import { Link } from "react-router-dom";
import Inputform from "../Components/elements/input/Form";
import Button from "../Components/elements/button/button";
import { Fade } from "react-awesome-reveal";
import Navbar from "../Components/fragments/Navbar";
import BackGround from "../Components/layouts/BG";
import Footer from "../Components/fragments/Footer";

const AddFleat = () =>{
    const Add = (e) => {
        e.preventDefault();
        window.location.href = "/VendorDashboard";
    };

    return(
        <>
            <BackGround>
                <Navbar/>
                <div className="flex items-start justify-center w-[1280px] h-[1080px] rounded-[1rem] bg-white mx-20 pb-20 ">
                    <div className="flex flex-col w-[408px] h-auto">
                        <Fade direction ="right" duration = {1000}>
                            <>
                            <div className="inline-flex gap-2">
                                <button >
                                    <Link to="/VendorDashboard"><img className = "w-[40px] "src="/carbon_arrow-up.png"></img></Link>
                                </button>
                                <h1 className="flex items-start justify-center text-center text-5xl text-black font-[#1C1917] py-10">  Add Fleet</h1>    

                            </div>
                            <form className="max-w-sm mt-20 flex flex-col justify-start mr-10" onSubmit={Add}>
                                <Inputform 
                                    label = "Car Name" 
                                    type = "text" 
                                    name = "CarName">
                                </Inputform>
                                <Inputform 
                                    label = "Car Description" 
                                    type = "text" 
                                    name = "CarDescription">
                                </Inputform>
                                <Inputform 
                                    label = "License plate number" 
                                    type = "text" 
                                    name = "LicensePlateNumber">
                                </Inputform>
                                <Inputform 
                                    label = "Machine Number" 
                                    type = "text" 
                                    name = "MachineNumber">
                                </Inputform>
                                <Inputform 
                                    label = "Manufacturer" 
                                    type = "text" 
                                    name = "Manufacturer">
                                </Inputform>
                                <Inputform 
                                    label = "Categories" 
                                    type = "text" 
                                    name = "Categories">
                                </Inputform>
                                <Inputform 
                                    label = "Car snapshots" 
                                    type = "file" 
                                    placeholder = "Upload Image"
                                    name = "CarSnapshots">
                                </Inputform>
                                <div className="flex flex-col justify-center items-center">
                                    <Button 
                                        type="submit" 
                                        className=" text-white bg-red-700 font-bold rounded-md text-md py-2.5 text-center w-[200px]"
                                    
                                    >
                                        Proceed
                                    </Button>
                                </div>
                            </form>
                            </>
                        </Fade>
                    </div>
                </div>
                <div className="h-[250px]"></div>
                <Footer/>
            </BackGround>

        </>
    );
};
export default AddFleat;