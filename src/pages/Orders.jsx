import React from "react";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import { ordersData } from "../util/dummyData";

const Orders = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen-max h-[2138px] relative bg-gradient-to-b from-white to-red-400">
        <div className="h-[20px] left-[100px] top-[1px] absolute flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-[10px] flex">
            <div className="justify-center items-center inline-flex">
              <div className="text-black text-[61px] font-bold font-['Plus Jakarta Sans'] leading-[73.20px]">
                Orders{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="left-[110px] top-[180px] absolute flex-col justify-start items-start gap-[52px] inline-flex">
          <div className="flex-col justify-start items-start gap-[40px] flex ">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px] mb-10">
                Recent Orders
              </div>
              <div className="w-[1290px] h-[158px] justify-end items-start gap-[132px] flex-col mb-10 pr-20 gap-y-5 ">
                {ordersData.map((order) => (
                  <div
                    key={order.id}
                    className="h-[162px] bg-white rounded-2xl border border-zinc-400 justify-between items-center gap-[120px] flex mb-10"
                  >
                    <img
                      className="w-[247px] h-[162px]"
                      src={order.image}
                      alt={order.name}
                    />
                    <div className="flex-col justify-center items-start gap-3 inline-flex">
                      <div className="justify-start items-center gap-[19px] inline-flex">
                        <div className="text-black text-[32px] font-extrabold font-['Plus Jakarta Sans'] leading-[48px]">
                          {order.name}
                        </div>
                        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                          {order.date}
                        </div>
                        <div className="text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                          {order.description}
                        </div>
                      </div>
                    </div>
                    <div className="h-[145px] justify-center items-center flex ">
                      {/* <div className="w-[130px] h-[0px] origin-top-left mb-20 rotate-90 border border-zinc-500"></div> */}
                      <hr className="border border-gray-400 w-0 h-40 mx-4"/>
                      <div className="flex-col h-full justify-center items-start text-start gap-2 inline-flex w-[250px]">
                        <div className="w-[94px] h-[23px] text-neutral-400 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                          Price in total
                        </div>
                        <div className="text-sky-950 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                          {"Rp " + order.price.toLocaleString("id-ID")}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
