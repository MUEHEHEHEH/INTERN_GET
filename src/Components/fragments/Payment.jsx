import React from "react";
import Inputform from "../elements/input/Form";

const Payment = () => {
  return (
    <div className="flex-col justify-start items-start gap-2 flex">
      <Inputform
        label="Cardholder’s Name"
        name="cardholderName"
        type="text"
        placeholder="Enter Cardholder’s Name"
        width="w-[634px]"
        required="true"
        text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
      />
      <Inputform
        label="Card Number"
        name="cardNumber"
        type="text"
        placeholder="Enter Card Number"
        width="w-[634px]"
        required="true"
        text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
      />
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="justify-start items-start gap-4 inline-flex">
          <Inputform
            label="Expiration date"
            name="expirationDate"
            type="text"
            placeholder="Enter Expiration Date"
            width="w-[301px]"
            required="true"
            text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
          />
          <Inputform
            label="CVC"
            name="cvc"
            type="text"
            placeholder="Enter CVC"
            width="w-[301px]"
            required="true"
            text="text-stone-500 text-xl font-semibold font-['Plus Jakarta Sans']"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
