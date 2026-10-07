import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const FormFields = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [course, setCourse] = useState("");

  function onSubmit(data) {
    data.remark ='main site enquiry '
    axios({
      method: "POST",
      data,
      url: `${import.meta.env.VITE_BACKEND_URL}/enquiry`,
    })
      .then(() => {
        toast.success("Registered Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      })
      .finally(() => {
        reset();
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-4 rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            size="100"
            autoComplete="given-name"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("fullName", { required: "This Field is Required" })}
          />
          <p className="text-red-800">{errors?.fullName?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("email", {
              required: "This Field is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          <p className="text-red-800">{errors?.email?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            autoComplete="tel"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("mobileNumber", {
              required: "This Field is Required",
              minLength: {
                value: 10,
                message: "Please enter valid a phone number.",
              },
            })}
          />
          <p className="text-red-800">{errors?.mobileNumber?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="college"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            College or University Name
          </label>
          <input
            type="text"
            id="college"
            name="college"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("college", { required: "This Field is Required" })}
          />
          <p className="text-red-800">{errors?.college?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="branchName"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Branch Name
          </label>
          <input
            type="text"
            id="branchName"
            name="branchName"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("branchName")}
          />
          <p className="text-red-800">{errors?.branchName?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="interestedCourse"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Interested Course
          </label>
          <select
            id="interestedCourse"
            name="interestedCourse"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("interestedCourse")}
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="fullstack">Full Stack Development</option>
            <option value="datascience">Data Science</option>
            <option value="devops">DevOps</option>
            <option value="cloud">Cloud Computing</option>
            <option value="iot">IoT & Embedded Systems</option>
            <option value="iot">other</option>

          </select>
          <p className="text-red-800">{errors?.interestedCourse?.message}</p>
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="remark"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Remark
          </label>
          <textarea
            id="remark"
            name="remark"
            rows="3"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("remark")}
          ></textarea>
          <p className="text-red-800">{errors?.remark?.message}</p>
        </div> */}
        <div className="mb-4">
          <label
            htmlFor="course"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Course and Degree
          </label>
          <select
            id="course"
            name="course"
            autoComplete="course"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("course", { required: "This Field is Required" })}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="btech">B.Tech</option>
            <option value="bca">BCA</option>
            <option value="mtech">M.Tech</option>
            <option value="mca">MCA</option>
          </select>
          <p className="text-red-800">{errors?.course?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="yearOfStudy"
            className="block text-base font-bold text-[#003366] FormLabel"
          >
            Year of Study
          </label>
          <select
            id="yearOfStudy"
            name="yearOfStudy"
            autoComplete="yearOfStudy"
            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
            {...register("yearOfStudy", { required: "This Field is Required" })}
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            {(course === "btech" || course === "bca") && (
              <option value="3rd">3rd</option>
            )}
            {course === "btech" && <option value="4th">4th</option>}
          </select>
          <p className="text-red-800">{errors?.yearOfStudy?.message}</p>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex text-xl justify-center items-center text-center px-4 py-2 w-full border-transparent font-bold rounded-md text-white bg-[#003366] hover:bg-[#FF9416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormFields;
