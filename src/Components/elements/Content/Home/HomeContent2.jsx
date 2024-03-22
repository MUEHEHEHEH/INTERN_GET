import React from "react";
import Button from "../../button/button";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
// import { Slide } from "react-reveal";
import { Link } from "react-router-dom";
// import { Fade } from "react-reveal";

const HomeContent2 = () => {
  return (
    <>
      <Zoom cascade damping={0.2}>
        <Zoom duration={1000} direction="up" delay={1000}>
          <h1 className="flex items-center justify-center text-5xl mt-20 font-[Plus Jakarta Sans] mb-10 tracking-wide leading-[23px] font-thin">
            5 0 + &nbsp; V e h i c l e &nbsp; m a n u f a c t u r e r s
          </h1>
          <div className="flex items-start justify-center h-[300px]">
            <img src="/logo2.png" alt="" />
          </div>
        </Zoom>
      </Zoom>

      <div className="flex bg-slate-50 justify-center items-center w-auto h-auto pt-10 gap-x-10">
        <Slide direction="left" duration={2000}>
          <div className="flex items-center justify-start w-[480px] h-[360px] rounded border border-black bg-white mx-20 my-20 relative overflow-hidden">
            <img
              className="object-cover w-auto h-auto"
              src="/content2.png"
              alt="car2"
            />
          </div>
        </Slide>
        <div className="flex-col items-center justify-center Jakarta Sans w-auto h-auto text-black font-[plus text-[3.5rem] leading-[normal]] ">
          <Fade direction="down" duration={2000}>
            <div className="Jakarta Sans w-[150px] text-black font-[plus text-[1rem] font-bold tracking-tighter leading-[0.4px]] mb-3">
              OUR IDENTITITY
            </div>
          </Fade>
          <Zoom direction="up" duration={1000}>
            <div className=" Jakarta Sans w-[350px] text-black tracking-wide font-[ text-[2.3rem] leading-[0.4px]] ">
              <h1>Quality-passed Vehicles.</h1>
            </div>
          </Zoom>
          <Fade direction="up" duration={2000}>
            <div className="flex justify-center w-[422px] text-black text-justify text-xl my-1">
              Our fleets has been surpassed our vehicle quality control check
              and will provide the best quality so you can enjoy your travel
              better.
            </div>
            <Button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-10 py-5 text-center me-2 "
            >
              <Link to="/BookNow">Browse all vehicle</Link>
              {/* Browse all vehicles */}
            </Button>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HomeContent2;
