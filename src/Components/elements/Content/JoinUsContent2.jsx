import React from "react";
const JoinUsContent2 = () =>{
    return(
        <>

            <div className="flex bg-white justify-center items-center w-auto h-auto pt-10 gap-x-10">
                <div className="flex items-center justify-start w-[480px] h-[360px] rounded border border-black bg-white mx-20 my-20 relative overflow-hidden">
                    <img
                        className="object-cover w-auto h-auto"
                        src="/CompanyProfile.png" 
                        alt="CompanyProfile"
                    />
                </div>
                <div className="flex-col items-center justify-center Jakarta Sans w-auto h-auto text-black ">
                    
                        <div className="Jakarta Sans w-[200px] text-black font-[plus text-[1.5rem] font-bold leading-[normal]] ">
                            Company Profile
                        </div>
                        <div className="Jakarta Sans w-[477px] text-black font-[ text-[2rem]  leading-[normal]] mt-2.5">
                            <h1>Our Commitment.</h1>
                        </div>
                        <div className="flex justify-center w-[422px] text-black font-serif text-xl mt-1">
                            Gain ur Easy Travel or simply known as GET,
                            is a Indonesian based rental vehicle company which formed in March 2024. 
                            Our focus is to provide the best vehicle rental by offering fast, transparency,
                            trustworthy service to our clients and vendor. With our human resources and machine resources, 
                            we aim to provide the best quality services ever.
                        </div>
                </div>
            </div>
            <div className="w-auto h-[600px] bg-transparent"></div>
        </>
    );
};

export default JoinUsContent2;