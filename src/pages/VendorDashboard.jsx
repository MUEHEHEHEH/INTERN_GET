import React from "react";
import Navbar from "../Components/fragments/Navbar";
import BackGround from "../Components/layouts/BG";
import Footer from "../Components/fragments/Footer";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    vehicleCount: 0,
    brandCount: 0,
    totalOrders: 0,
    newOrderCount: 0,
    processedOrderCount: 0,
    ordersThisMonthCount: 0,
    averageOrderCount: 0,
    rating: 0,
    vendorData: "",
    reviews: 0
  });

  const updateData = () => {
    setDashboardData({
      ...dashboardData,
      vehicleCount: 1,
      brandCount: 1,
      totalOrders: 1,
      newOrderCount: 1,
      processedOrderCount: 1,
      ordersThisMonthCount: 1,
      averageOrderCount: 1,
      rating: 4.8,
      vendorData: "Excellent",
      reviews: 1
    });
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <BackGround>
      <Navbar />
      <Fade direction="left">
        <div className="flex flex-col items-start justify-between text-black text-[61px] font-bold font-['Plus Jakarta Sans'] leading-[10.20px] ml-10 pl-20 mb-20 gap-y-10">
          Vendor Dashboard
          <div className="inline-flex mt-10 gap-x-2.5">
            <div className="w-[508px] h-[313px] px-8 py-4 bg-white rounded-[36px] flex-col justify-start items-start gap-10 inline-flex">
              <div className="flex-col justify-start items-start gap-10 flex">
                <div className="justify-start items-center gap-6 inline-flex">
                  <img className="w-[146px] h-[66px]" src="/Toyota.png" />
                  <div className="text-black text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                    PT. Sinar Jaya Group
                  </div>
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="px-2 py-1 bg-green-600 rounded-md justify-start items-center gap-2.5 flex">
                    <div className="text-center text-white text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                      {dashboardData.rating}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-center text-stone-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                      {dashboardData.vendorData}
                    </div>
                    <div className="text-center text-stone-900 text-base font-light font-['Plus Jakarta Sans'] leading-normal">
                      {dashboardData.reviews}
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-20 inline-flex">
                <div className="flex-col justify-start items-center gap-6 inline-flex">
                  <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    {dashboardData.vehicleCount}
                  </div>
                  <div className="text-black text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7">
                    Vehicles
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-6 inline-flex">
                  <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    {dashboardData.brandCount}
                  </div>
                  <div className="text-black text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7">
                    Brands
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-6 inline-flex">
                  <div className="text-black text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    {dashboardData.totalOrders}
                  </div>
                  <div className="text-black text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7">
                    Total Orders
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[767px] h-[330px] flex-col justify-start items-start gap-15 inline-flex">
              <div className="p-2.5 justify-start items-start gap-12 inline-flex">
                <div className="px-10 py-5 bg-white rounded-[25px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[108px] text-stone-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    New Order
                  </div>
                  <div className="w-[108px] text-stone-900 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                    {dashboardData.newOrderCount}
                  </div>
                </div>
                <div className="px-10 py-5 bg-white rounded-[25px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[148px] text-stone-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    Processed Order
                  </div>
                  <div className="w-[108px] text-stone-900 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                    {dashboardData.processedOrderCount}
                  </div>
                </div>
                <div className="px-10 py-5 bg-white rounded-[25px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[155px] text-stone-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    Orders this month
                  </div>
                  <div className="w-[108px] text-stone-900 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                    {dashboardData.ordersThisMonthCount}
                  </div>
                </div>
              </div>
              <div className="p-2.5 justify-center items-center gap-12 inline-flex">
                <div className="px-10 py-5 bg-white rounded-[25px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[132px] text-stone-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    Average Order in 6 months
                  </div>
                  <div className="w-[108px] text-stone-900 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                    {dashboardData.averageOrderCount}
                  </div>
                </div>
                <div className="w-[157px] px-10 py-5 bg-white rounded-[25px] flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[108px] text-stone-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                    Rating
                  </div>
                  <div className="w-[108px] text-stone-900 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                    {dashboardData.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1290px] h-[873px] flex-col justify-start items-start gap-[50px] inline-flex">
            <div className="pr-2.5 py-2.5 justify-center items-center inline-flex">
              <div className="h-[73px] justify-start items-center gap-6 flex">
                <div className="text-black text-[61px] font-bold font-['Plus Jakarta Sans'] leading-[73.20px]">
                  Fleet list
                </div>
                <div className="px-5 py-2.5 bg-green-600 rounded-2xl justify-center items-center gap-1.5 flex">
                  <div className="text-white text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                    <Link to="/AddFleat">+ Add List</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-12 flex">
              <div className="w-[1290px] px-12 py-6 bg-white rounded-[33px] justify-start items-center gap-[23px] inline-flex">
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-[259px] h-[61px] text-black text-[40px] font-extrabold font-['Plus Jakarta Sans'] leading-[48px]">
                      Toyota GR86
                    </div>
                    <div className="justify-start items-center flex">
                      <div className="w-[195px] h-[61px] text-stone-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                        1 Orders
                      </div>
                      <div className="w-[195px] h-[61px] text-stone-900 text-lg font-medium font-['Plus Jakarta Sans'] leading-7">
                        4.8 Ratings
                      </div>
                    </div>
                    <div className="w-[242px] h-[65px] text-red-900 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px]">
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Footer />
    </BackGround>
  );
};

export default VendorDashboard;
