import React from "react";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import BackGround from "../Components/layouts/BG";
import Button from "../Components/elements/button/button";
import Inputform from "../Components/elements/input/Form";
import { useState } from "react";
import { buttons, sections } from "../util/sectionsData";
import { useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { dummyDatas } from "../util/FleetDetailsData";


const BookNow = () => {
  //car and bike button
  const [clickedButtonId, setClickedButtonId] = useState(null);
  const handleClick = (buttonId) => {
    setClickedButtonId(buttonId);
  };

  //search result
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [newPickUpLocation, setNewPickUpLocation] = useState("");
  const [newDropOffLocation, setNewDropOffLocation] = useState("");
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    transmission: "",
    startDate: "",
    endDate: "",
    startTime:"",
    endTime:"",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setShowSearchResult(true);
    setFormData({
      ...formData,
      pickUpLocation: newPickUpLocation || formData.pickUpLocation,
      dropOffLocation: newDropOffLocation || formData.dropOffLocation,
      // transmission: formData.transmission,
      // startDate: formData.startDate,
      // endDate: formData.endDate,
      // startTime: formData.startTime,
      // endTime: formData.endTime,
      [e.target.name]: e.target.value,
    });
    setNewPickUpLocation("");
    setNewDropOffLocation("");
  };
  const handleNewPickUpLocationChange = (e) => {
    setNewPickUpLocation(e.target.value);
  };

  const handleNewDropOffLocationChange = (e) => {
    setNewDropOffLocation(e.target.value);
  };

  //filter
  const [checkboxesChecked, setCheckboxesChecked] = useState(
    Array.from({ length: sections.length }, () =>
      Array.from({ length: sections[0].options.length }, () => false)
    )
  );
  const handleClearAllFilters = () => {
    const newCheckboxesChecked = checkboxesChecked.map((section) =>
      section.map(() => false)
    );
    setCheckboxesChecked(newCheckboxesChecked);
  };
  const handleCheckboxChange = (e, sectionIndex, optionIndex) => {
    const updatedCheckboxesChecked = [...checkboxesChecked];
    updatedCheckboxesChecked[sectionIndex][optionIndex] = e.target.checked;
    setCheckboxesChecked(updatedCheckboxesChecked);
  };
  
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);


  useEffect(() => {
    localStorage.setItem("checkboxesChecked", JSON.stringify(checkboxesChecked));
  }, [checkboxesChecked]);

  // const {id} = useParams();
  // const Dataa = dummyData[id-1] ;
  let navigate = useNavigate();

  return (
    <BackGround>

      <div className="w-auto h-[4086px] relative bg-[#FBEBEB]">
        <div className="flex-col justify-start items-start gap-2.5 inline-flex absolute">
          <div className="justify-start items-end inline-flex">
            <img className="w-[741px] h-[793px] " src="/carr.png" />
            <img className="w-[738px] h-[793px] " src="/bikee.png" />
          </div>
        </div>

        <Navbar />

        <div className="w-[1017px] flex items-start justify-start pt-40 mt-20 ml-10 pl-10 ">
          <div className="w-[960px] h-[1600px] text-white text-[40px] font-extrabold font-['Plus Jakarta Sans'] absolute leading-[48px] shadow-sm">
            Simplify Travel with Our Seamless, Secure, and Reliable Car and
            Motorcycle Rentals.
          </div>
        </div>

        <div className="left-[52px] top-[554px] absolute flex-col justify-start items-start gap-[62px] inline-flex">
          <div className="flex-col justify-center items-center gap-20 flex">
            <div className="px-[60px] py-[30px] bg-red-500 rounded-[32px] shadow flex-col justify-center items-start gap-7 flex">
              <div className="justify-center items-end gap-2.5 inline-flex">
                <div className="justify-center items-end gap-2.5 flex">
                  <div className="text-white text-4xl font-semibold font-['Plus Jakarta Sans']">
                    Book a
                  </div>
                  <div className="flex gap-2">
                    {buttons.map((button) => (
                      <Button
                        key={button.id}
                        className={`bg-${
                          clickedButtonId === button.id
                            ? "yellow-500"
                            : "zinc-500"
                        } rounded-[10px] justify-start items-start flex`}
                        onSubmit={() => handleClick(button.id)}
                      >
                        <div className="w-[100px] h-[38px] py-[5px] rounded-[15px] justify-center items-center gap-1 flex">
                          <div className="w-[25px] h-[25px] bg-white rounded-full" />
                          <div
                            className={`w-[40px] text-${
                              clickedButtonId === button.id ? "black" : "white"
                            } text-[22px] font-semibold font-['Plus Jakarta Sans']`}
                          >
                            {button.text}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <form className="flex-col justify-end items-start gap-7 flex">
                <div className="justify-center items-center gap-20 inline-flex">
                  <div className="w-[568px] flex-col justify-start items-start gap-2 inline-flex">
                    <Inputform
                      text="text-xl font-medium text-white"
                      width="w-[568px]"
                      label="Pick-up Location"
                      name="pickUpLocation"
                      type="text"
                      onChange={handleNewPickUpLocationChange}
                      placeholder="Enter Pick-up Location"
                    />
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <Inputform
                      width="w-[568px]"
                      text="text-xl font-medium text-white "
                      label="Drop-off Location"
                      name="dropOffLocation"
                      onChange={handleNewDropOffLocationChange}
                      type="text"
                      placeholder="Enter Drop-off Location"
                    />
                  </div>
                </div>
                <div className="justify-start items-center gap-24 inline-flex">
                  <div className="flex-col justify-start items-start gap-x-24 inline-flex">
                    <Inputform
                      width="w-[296px] h-[44px]"
                      text="text-xl font-medium text-white"
                      label="Transmission"
                      name="Transmission"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Transmission"
                    />
                  </div>
                  <div className="flex-row justify-center items-center gap-x-16 inline-flex">
                    <Inputform
                      width="w-[127px] h-[44px]"
                      text="text-xl font-medium text-white"
                      label="Start Date"
                      name="StartDate"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Start Date"
                    />
                    <Inputform
                      width="w-[78px] h-[44px]"
                      text="text-xl font-medium text-white"
                      label="Start Time"
                      name="StartTime"
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Time"
                    />
                    <Inputform
                      label="End Date"
                      name="EndDate"
                      type="text"
                      placeholder="End Date "
                      width="w-[127px] h-[44px]"
                      onChange={handleInputChange}
                      text="text-xl font-medium text-white"
                    />
                    <Inputform
                      label="End Time"
                      name="EndTime"
                      type="text"
                      placeholder="End Time"
                      width="w-[78px] h-[44px]"
                      onChange={handleInputChange}
                      text="text-xl font-medium text-white"
                    />
                  </div>
                </div>
                <Button
                  onClick={handleInputChange}
                  className="w-[1216px] h-[66px] flex bg-sky-950 rounded-xl justify-center items-center 
                    text-center text-white text-[26px] font-bold font-['Plus Jakarta Sans'] leading-7"
                >
                  <img
                    className="w-8 h-8 mr-2 "
                    src="/Vector.png"
                    alt="searchBar"
                  />
                  Search
                </Button>
              </form>
            </div>
          </div>

          <div className="flex-col justify-center items-center gap-9 flex">
            <div className="w-[1292px] justify-start items-start gap-16 inline-flex">
              <div className="justify-start items-center gap-10 flex">
                <div className="text-red-500 text-[32px] font-bold font-['Plus Jakarta Sans']">
                  Search Result
                </div>
                <div className="w-[907px] h-[69px] pl-[15px] bg-red-500 rounded-xl border border-zinc-400 justify-start items-center gap-[74px] flex">
                  <div className="w-[347px] h-[34px] text-white text-xl font-bold font-['Plus Jakarta Sans']">
                    {showSearchResult && formData.pickUpLocation}
                  </div>
                  <img src="/Arrow 1.png" alt="" />
                  <div className="w-[355px] h-[34px] text-white text-xl font-bold font-['Plus Jakarta Sans']">
                    {showSearchResult && formData.dropOffLocation}
                  </div>
                </div>
                <div className="w-[91px] h-14 px-[9px] py-2 bg-amber-300 rounded-[11px] border border-zinc-400 justify-center items-center gap-2.5 flex">
                  <Button
                    onClick={handleInputChange}
                    className="text-stone-900 text-2xl font-bold font-['Plus Jakarta Sans']"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Inputform
            width="w-[1289px] h-[72px] "
            className="py-2.5 justify-start items-center gap-[18px] flex"
            placeholder="Search"
          ></Inputform>
          
          <div className="justify-start items-start gap-12 flex">
            <img className="w-[479px] h-[184px]" src="/Rectangle_8.png" />
          </div>
          <div className="h-[1877px] pb-[52px] justify-center items-start gap-9 inline-flex">
            <div className="h-[1877px] px-4 py-2 bg-white rounded-lg border-2 border-zinc-400 flex-col justify-start items-start gap-5 inline-flex hover:border-red-400">
              <div className="w-[455px] justify-start items-start gap-2.5 inline-flex">
                <div className="w-[335px] h-10 text-stone-900 text-[32px] font-extrabold font-['Plus Jakarta Sans']">
                  Filter
                </div>
                <Button
                  onClick={handleClearAllFilters}
                  className="w-[110px] h-10 text-right text-stone-900 text-sm font-light font-['Plus Jakarta Sans']"
                >
                  Clear all filters
                </Button>
              </div>
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="w-[455px] flex-col justify-start items-start gap-2.5 inline-flex"
                >
                  <div className="w-[455px] h-[0px] bg-stone-900 border border-black"></div>
                  <div className="w-[198px] h-[45px] text-stone-900 text-xl font-semibold font-['Plus Jakarta Sans']">
                    {section.title}
                  </div>
                  {section.options.map((option, idx) => (
                    <div
                      key={idx}
                      className="justify-center items-center gap-2.5 inline-flex"
                    >
                      <div className="w-8 h-[30px] relative">
                        <input
                          type="checkbox"
                          className="w-8 h-[30px] top-0 left-0 bg-zinc-300 rounded-lg"
                          checked={checkboxesChecked[index][idx]}
                          onChange={(e) => handleCheckboxChange(e, index, idx)}
                        />
                      </div>
                      <div className="text-stone-900 text-base font-normal font-['Plus Jakarta Sans']">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {dummyDatas.map((data, index) => (
                <div
                  key={index}
                  className="w-[791px] h-[447px] px-7 py-3.5 bg-white rounded-lg border-2 border-zinc-400 justify-start items-start gap-[15px] inline-flex hover:border-red-400"
                >
                  <div className="justify-start items-start gap-5 flex">
                    <div className="w-[242px] py-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="flex-col justify-center items-center gap-2.5 flex">
                        <img
                          className="w-[247px] h-[240px] "
                          src={data.imageUrl}
                          alt={data.name}
                        />
                      </div>
                      <div className="px-4 py-3 justify-start items-center gap-4 inline-flex">
                        <img
                          className="w-[146px] h-[66px]"
                          src="/image_4.png"
                          alt="Placeholder"
                        />
                        <div className="justify-end items-start gap-3 flex">
                          <div className="mt-20 px-5 py-2 bg-yellow-500 rounded-md justify-start items-center gap-2.5 flex">
                            <div className="text-center text-sky-950 text-[26px] font-bold font-['Plus Jakarta Sans'] leading-[35px]">
                              {data.rating}
                            </div>
                          </div>
                          <div className="flex-col mt-20 justify-start items-end inline-flex">
                            <div className="text-center text-stone-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                              {data.ratingText}
                            </div>
                            <div className="text-center text-stone-900 text-base font-light font-['Plus Jakarta Sans'] leading-normal">
                              {data.reviewCount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-end items-start gap-1 inline-flex">
                      <div className="w-[312px] h-[82px] text-sky-950 text-[25px] font-bold font-['Plus Jakarta Sans'] leading-[30px] mt-5">
                        {data.name}
                      </div>
                      <div className="flex-col justify-center items-end gap-[60px] flex">
                        <div className="justify-start items-start gap-2.5 inline-flex">
                          {data.specifications.map((specs, i) => (
                            <div
                              key={i}
                              className="flex-col justify-start items-center gap-3 inline-flex"
                            >
                              {specs.map((spec, j) => (
                                <div
                                  key={j}
                                  className="w-[151px] h-[19px] text-zinc-500 text-base font-normal font-['Plus Jakarta Sans']"
                                >
                                  {spec}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="h-[163px] flex-col justify-center items-end gap-5 flex">
                          <div className="text-center text-sky-950 text-base font-light font-['Plus Jakarta Sans']">
                            Price for 1 day
                          </div>
                          <div className="text-stone-900 text-4xl font-bold font-['Plus Jakarta Sans']">
                            Rp. {data.price.toLocaleString("id-ID")},00
                          </div>
                          <div className="px-[30px] py-[15px] bg-stone-900 rounded-xl justify-center items-end gap-2.5 inline-flex hover:bg-yellow-300 hover:text-black">
                            <Button
                              onClick={() =>
                                navigate(`/FleetDetails/${index + 1}`)
                              }
                              className="text-white text-[21px] font-bold font-['Plus Jakarta Sans'] leading-7 hover:bg-yellow-300 hover:text-black"
                            >
                              View Deals
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </BackGround>
  );
};

export default BookNow;
