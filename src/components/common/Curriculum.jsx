import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
// import dsPdf from "../../../public/data-science.pdf";
import {
  dataScience6Months,
  fullStack6Months,
  devOps6Months,
} from "../../assets/courses";
import fsPdf from "../../../public/full-stack.pdf";
import iotPdf from "../../../public/embedded-iot.pdf";
// this is summer 45 days start
import frontendSum from "../../../public/45 Days-Frontend.pdf";
import dataScienceSum from "../../../public/45 Days Module - Data Science with Machinde Learning.bc098ede317833f1a821.pdf";
import fullstackSum from "../../../public/45 Days Module - Full stack Web Developement - NEW.ef1383f4a0ee5b2310ce.pdf";
import devopsSum from "../../../public/45 Dayscurriculum-Devops.ec57848a17851ecfe410.pdf";
// this is summer 45 days end
import devopsPdf from "../../../public/cloud-computing.pdf";
import linuxModule from "../../assets/courses/45 days/2 Weeks - Linux Module.pdf";
import pythonModule from "../../assets/courses/45 days/2 Weeks - Python Module.pdf";
import coreJavaModule from "../../assets/courses/45 days/45 Days Module - Core Java.pdf";
import dataanalytics from "../../assets/courses/45 days/45 Days Module - Data Analytics.pdf";
import digitalMarketingModule from "../../assets/courses/45 days/45 Days Module - Digital Marketing.pdf";
import generativeAIModule from "../../assets/courses/45 days/45 Days Module - Generative AI.pdf";

const Curriculum = ({ duration, text, pdf, icon }) => {
  const [openForm, setOpenForm] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  let pdfLocation;

  if (pdf === "datascience") {
    pdfLocation = dataScience6Months;
  }
   else if (pdf === "fullstack") {
    pdfLocation = fullStack6Months;
  }
   else if (pdf === "frontendSum") {
    pdfLocation = frontendSum;
  }
   else if (pdf === "dataScienceSum") {
    pdfLocation = dataScienceSum;
  }
   else if (pdf === "fullstackSum") {
    pdfLocation = fullstackSum;
  }
   else if (pdf === "devopsSum") {
    pdfLocation = devopsSum;
  }
   else if (pdf === "iot") {
    pdfLocation = iotPdf;
  } else if (pdf === "devops") {
    pdfLocation = devOps6Months;
  } else if (pdf === "linux") {
    pdfLocation = linuxModule;
  } else if (pdf === "python") {
    pdfLocation = pythonModule;
  } else if (pdf === "corejava") {
    pdfLocation = coreJavaModule;
  } else if (pdf === "dm") {
    pdfLocation = digitalMarketingModule;
  } else if (pdf === "genai") {
    pdfLocation = generativeAIModule;
  } else if (pdf === "dataanalytics") {
    pdfLocation = dataanalytics;
  }

  function onSubmit(data) {
    // const newData = {
    //   fullName: data.fullName,
    //   email: data.email,
    //   mobileNumber: data.mobileNumber,
    //   pdfDownload: pdf,
    // };
    const newData = {
      fullName: data.fullName,
      email: data.email,
      mobileNumber: data.mobileNumber,
      pdfDownload: pdf,
      page: "main-site",
    };
    // console.log(import.meta.env.VITE_BACKEND_URL)
    axios({
      method: "POST",
      url: `${import.meta.env.VITE_BACKEND_URL}/curriculum/download`,
      data: newData,
    })
      .then(() => {
        toast.success("Registration Successfull");
        window.open(pdfLocation, "_blank");
        setOpenForm(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => reset());
  }

  return (
    <div className="flex flex-col md:flex-row gap-[2rem] sm:gap-[3rem] items-center  py-[3rem] justify-between px-[1rem] md:px-[3rem]">
      <div className="flex flex-col sm:flex-row items-center gap-[4rem]">
        <div className="flex justify-left lg:justify-center">
          <img src={icon} alt="" className="w-[10rem]" />
        </div>
        <div className="flex flex-col gap-[1rem] text-[#003366]">
          <h2 className="text-3xl font-bold text-center sm:text-left">
            Download Curriculum
          </h2>
          <p className="text-xl font-semibold flex items-center gap-[1rem] ">
            <span>
              <GiCheckMark />
            </span>{" "}
            Duration - {duration}
          </p>
          <p className="text-xl font-semibold flex items-center gap-[1rem] pr-[2rem]">
            <span>
              <GiCheckMark />
            </span>{" "}
            {text}
          </p>
        </div>
      </div>
      <button
        className="text-2xl font-bold bg-[#003366] text-white p-[1rem] rounded-md hover:bg-[#FF9416] "
        onClick={() => setOpenForm(true)}
      >
        Download
      </button>
      <div
        className={`${
          openForm ? "block" : "hidden"
        } fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#003366] flex flex-col gap-[0.7rem] p-[3rem_3rem_2rem_2rem] rounded-md border-white shadow-xl border-2 w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] z-50`}
      >
        <button
          className="absolute top-[1rem] right-[1rem]"
          onClick={() => setOpenForm(false)}
        >
          <ImCross className="text-white" />
        </button>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Name"
          className="p-[0.5rem] rounded-sm pl-[1rem] w-full"
          {...register("fullName", { required: "This Field is Required" })}
        />
        <p className="text-red-800">{errors?.fullName?.message}</p>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          className="p-[0.5rem] rounded-sm pl-[1rem] w-full"
          {...register("email", {
            required: "This Field is Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        <p className="text-red-800">{errors?.email?.message}</p>
        <input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          placeholder="Number"
          className="p-[0.5rem] rounded-sm pl-[1rem] w-full"
          {...register("mobileNumber", {
            required: "This Field is Required",
            minLength: { value: 10, message: "Please Enter a valid number" },
          })}
        />
        <p className="text-red-800">{errors?.mobileNumber?.message}</p>
        <button
          className="bg-[#FF9416] text-white p-[0.5rem] rounded-md font-bold text-xl"
          onClick={handleSubmit(onSubmit)}
        >
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Curriculum;
