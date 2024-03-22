import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const ContactUs1 = () => {
  return (
    <div className="flex justify-center items-center pt-10 pb-10 pl-10 pr-10 w-auto h-auto">
      <div className="flex items-center justify-center Jakarta Sans w-auto h-auto text-black font-[plus text-[3.5rem] leading-[normal]] gap-x-20">
        <div className="flex-col items-center justify-center">
          <Slide direction="down" duration={2000}>
            <div className="Jakarta Sans w-[450px] text-black font-[ text-[4rem] font-bold leading-[normal]] text-justify">
              Get in Touch
            </div>
          </Slide>
          <Slide direction="up" duration={2000}>
            <div className="flex w-[360px] text-black text-xl mb-5 text-justify pt-10">
              At Gain ur Easy Travel, we pride ourselves on providing
              exceptional service and support to our valued clients. Whether you
              have questions, feedback, or need assistance, our dedicated team
              is here to help you every step of the way.
            </div>
          </Slide>
        </div>
        <Slide direction="right" triggerOnce={true} duration={2000}>
          <div className="flex-shrink-0 w-[670px] h-[480px] rounded border border-black bg-white relative overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/getInTouch.png"
              alt="getInTouch image"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ContactUs1;
