import React from "react";

const BookNowSearch = (props) => {
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    dropOffLocation: "",
    transmission: "",
    startDateAndTime: "",
    endDateAndTime: "",
  });

  const { pickUpLocation, dropOffLocation } = formData;
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="flex-col justify-end items-start gap-7 flex">
      <div className="justify-center items-center gap-20 inline-flex">
        <div className="w-[568px] flex-col justify-start items-start gap-2 inline-flex">
          <Inputform
            text="text-xl font-medium text-white"
            width="w-[568px]"
            label="Pick-up Location"
            name="pickUpLocation"
            type="text"
            placeholder="Enter Pick-up Location"
          />
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <Inputform
            width="w-[568px]"
            text="text-xl font-medium text-white "
            label="Drop-off Location"
            name="DropoffLocation"
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
            type="text"
            placeholder="Transmission"
          />
        </div>
        <div className="flex-row justify-center items-center gap-x-16 inline-flex">
          <Inputform
            width="w-[212px] h-[44px]"
            text="text-xl font-medium text-white"
            label="Start Date and Time"
            name="StartDateAndTime"
            type="text"
            placeholder="Start Date"
          />
          <Inputform
            label="End Date and Time"
            name="EndDateAndTime"
            type="text"
            placeholder="End Date"
            width="w-[212px] h-[44px]"
            text="text-xl font-medium text-white"
          />
        </div>
      </div>
      <Button
        onClick={handleInputChange}
        className="w-[1216px] h-[66px] flex bg-sky-950 rounded-xl justify-center items-center 
                    text-center text-white text-[26px] font-bold font-['Plus Jakarta Sans'] leading-7"
      >
        <img className="w-8 h-8 mr-2 " src="/Vector.png" alt="searchBar" />
        Search
      </Button>
    </form>
  );
};

export default BookNowSearch;
