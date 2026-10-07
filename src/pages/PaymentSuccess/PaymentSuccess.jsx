import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const PaymentSuccess = () => {
  return (
    <div className="h-[100vh] px-[2rem] lg:px-[5rem] xl:px-[7rem] flex flex-col items-center gap-[3rem] lg:gap-[6rem] justify-center">
      <div className="w-[15rem] lg:w-[20rem]">
        <img src="/upflairs-logo-blue.png" alt="" />
      </div>
      <div className="flex items-center justify-center gap-[5rem]">
        <img src="/payment-success.png" alt="" className="hidden xl:block" />
        <div className="flex flex-col gap-[1.5rem]">
          <h1 className="text-xl sm:text-3xl font-semibold text-[#003366] text-center xl:text-left">
            Your payment was successfull. Internship Letter will be send within
            5 minutes to the email address you have mentioned.
          </h1>
          <h1 className="text-lg sm:text-2xl font-semibold text-[#003366] text-center xl:text-left">
            If you still didn't recieve the email, please check the spam section
            or contact us.
          </h1>
          <h3 className="text-lg text-blue-400 flex items-center gap-[1rem] justify-center xl:justify-start">
            <IoIosCall className="w-[2rem] h-[2rem]" /> 1234567890
          </h3>
          <h3 className="text-lg text-blue-400 flex items-center gap-[1rem] justify-center xl:justify-start">
            <IoMdMail className="w-[2rem] h-[2rem]" /> example@gmail.com
          </h3>
          <NavLink
            className="text-blue-700 text-lg underline text-center xl:text-left"
            to="/"
          >
            Go Back to Homepage
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
