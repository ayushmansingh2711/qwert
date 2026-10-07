import React, { useEffect, useState } from "react";
import FeesData from "../../FeesData.json";
import { useForm } from "react-hook-form";
import axios from "axios";

const PaymentRegister = () => {
  const RajUniversities = [
    "Amity University",
    "Anand International College of Engineering",
    "ARKA JAIN UNIVERSITY",
    "Arya College of Engineering and IT",
    "Banasthali Vidyapith",
    "Bhartiya Institute of Engineering and Technology",
    "Birla Institute of Technology and Science",
    "B K Birla Institute of Engineering and Technology",
    "Biyani International Institute of Engineering and Technology for Girls",
    "Central University of Rajasthan",
    "Career Point University",
    "Dr KN Modi University",
    "Geetanjali Institute of Technical Studies",
    "Global Institute of Technology",
    "Government Engineering College",
    "Government Women Engineering College",
    "Gyan Vihar School of Engineering and Technology",
    "ICFAI University",
    "Jaipur Engineering College",
    "Jaipur Engineering College and Research Centre",
    "Jaipur National University",
    "Jagan Nath Gupta Institute of Engineering and Technology",
    "Jagannath University",
    "Jayoti Vidyapeeth Women's University",
    "JK Lakshmipat University",
    "JIET Institute of Design and Technology",
    "Jodhpur institute of engg.&tech.",
    "Jodhpur National University",
    "Laxmi Devi Institute of Engineering and Technology",
    "Lords University",
    "Maharishi Arvind College of Engineering and Research Centre",
    "Malaviya National Institute of Technology",
    "Manipal University",
    "MLV Government Textile and Engineering College",
    "Modern Institute of Technology and Research Centre",
    "Mody University of Science and Technology",
    "NIMS University",
    "Pacific Institute of Technology",
    "Pratap Institute of Technology and Science",
    "Pratap University",
    "Rajasthan College of Engineering for Women",
    "Rajasthan Institute of Engineering and Technology",
    "Rajasthan Technical University",
    "Regional College for Education Research and Technology",
    "RNB Global University",
    "Shekhawati Institute of Engineering and Technology",
    "Shree Digamber Institute of Technology",
    "Shankara Institute of Technology",
    "Sobhasaria Group of Institutions",
    "Sri Balaji College of Engineering and Technology",
    "Sir Padampat Singhania University",
    "Swami Keshvanand Institute of Technology, Management and Gramothan",
    "Techno India NJR Institute of Technology",
    "University of Engineering and Management",
    "Vivekananda Global University",
    "Vivekananda Institute of Technology",
    "Vivekananda Institute of Technology East",
    "Other",
  ];

  const [step, setStep] = useState(2);
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const { register, formState, handleSubmit, resetField } = useForm();
  const { errors } = formState;
  const [college, setCollege] = useState(null);
  const [feesValue, setFeesValue] = useState(null);
  const [courseName, setCourseName] = useState(null);
  const apiHost = process.env.APIHOST

  function submitForm1(data) {
    const {
      fullName,
      email,
      collegeName,
      course,
      otherCollege,
      whatsappNumber,
      year,
    } = data;

    const formData = {
      fullName,
      email,
      collegeName,
      otherCollege,
      course,
      whatsappNumber,
      year,
    };

    axios.post(apiHost, formData, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then(() => {
      setStep(2);
    });
  }

  function submitForm2(data) {
    const {
      fullName,
      email,
      collegeName,
      otherCollege,
      course,
      whatsappNumber,
      year,
      comment,
      duration,
      knowingSource,
      mode,
      reference,
      startMonth,
      technology,
    } = data;

    const formData = {
      fullName,
      email,
      collegeName,
      otherCollege,
      course,
      whatsappNumber,
      year,
      comment,
      duration,
      knowingSource,
      mode,
      reference,
      startMonth,
      technology: FeesData.AllData.Technologies[technology].name,
    };

    axios.post(apiHost, formData).then(() => {
      setStep(3);
    });
  }

  async function handlePayment(userData) {
    console.log(typeof feesValue);
    const {
      data: { order },
    } = await axios.post(`${apiHost}/payment/checkout`, {
      feesValue,
    });

    const {
      data: { key },
    } = await axios.get(`${apiHost}/payment/getRazorKey`);

    const options = {
      key: key,
      currency: "INR",
      name: userData.fullName,
      description: "Payment for the registration",
      order_id: order.id,
      callback_url: "http://localhost:8000/payment/paymentverify",
      theme: {
        color: "#FF9416",
      },
    };

    const razor = window.Razorpay(options);
    razor.open();
  }

  const handleTechnologySelect = (e) => {
    setSelectedTechnology(e.target.value);
    resetField("startMonth");
    resetField("duration");
  };

  const TrainingDurationSelect = (e) => {
    setSelectedDuration(e.target.value);
  };

  useEffect(() => {
    setFeesValue(
      FeesData?.AllData.Technologies[selectedTechnology]?.Fees[selectedDuration]
    );
  }, [handleTechnologySelect, selectedDuration]);

  return (
    <>
      <section className=" py-[3rem]">
        <div className="container w-[90%] lg:w-[70%] mx-auto">
          <div className="mb-[3rem]">
            <div className="flex flex-col items-center gap-[1rem]">
              <h2 className="text-4xl font-bold text-[#003366]">
                Registration
              </h2>
              <div className="flex items-center gap-[2rem] mx-auto">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`text-2xl font-bold bg-[#003366] text-white py-[0.5rem] px-[1rem] rounded-[100%] ${
                      step === num ? "bg-[#FF9416]" : ""
                    }`}
                  >
                    <span>{num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="RegisterColumn">
                <div className="flex flex-col gap-[2rem]">
                  {step === 1 && (
                    <form
                      className="grid sm:grid-cols-2 gap-x-[3rem] gap-y-[1rem]"
                      onSubmit={handleSubmit(submitForm1)}
                    >
                      <div className="flex flex-col gap-[1rem]">
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            htmlFor="fullName"
                            className="text-md font-semibold text-[#003366]"
                          >
                            Full Name
                          </label>
                          <input
                            className="sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter Full Name"
                            {...register("fullName", {
                              required: "This Field is Required",
                            })}
                          />
                          <p className="text-red-800">
                            {errors?.fullName?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            htmlFor="email"
                            className="text-md font-semibold text-[#003366]"
                          >
                            Email
                          </label>
                          <input
                            className="sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            {...register("email", {
                              required: "This Field is Required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address",
                              },
                            })}
                          />
                          <p className="text-red-800">
                            {errors?.email?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            htmlFor="whatsappNumber"
                            className="text-md font-semibold text-[#003366]"
                          >
                            WhatsApp No.
                          </label>
                          <input
                            className="sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                            type="text"
                            id="whatsappNumber"
                            name="whatsappNumber"
                            placeholder="Enter Your WhatsApp Number"
                            {...register("whatsappNumber", {
                              required: "This Field is Required",
                              minLength: {
                                value: 10,
                                message: "Please enter valid a phone number.",
                              },
                            })}
                          />
                          <p className="text-red-800">
                            {errors?.whatsappNumber?.message}
                          </p>
                        </div>
                        {college === "Other" && (
                          <div className="flex flex-col gap-[0.5rem]">
                            <label
                              htmlFor="otherCollege"
                              className="text-md font-semibold text-[#003366]"
                            >
                              Mention College Name
                            </label>
                            <input
                              className="sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                              type="text"
                              id="otherCollege"
                              name="otherCollege"
                              placeholder="Enter Your College Name"
                              {...register("otherCollege", {
                                required: "This Field is Required",
                              })}
                            />
                            <p className="text-red-800">
                              {errors?.otherCollege?.message}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-[1rem]">
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="collegeName"
                          >
                            College Name
                          </label>
                          <select
                            name="collegeName"
                            id="collegeName"
                            className="py-[0.5rem] px-[1rem] w-[100%]"
                            {...register("collegeName", {
                              required: "This Field is Required",
                            })}
                            onChange={(e) => setCollege(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select College
                            </option>
                            {RajUniversities.map((college, index) => (
                              <option key={index} value={college}>
                                {college}
                              </option>
                            ))}
                          </select>
                          <p className="text-red-800">
                            {errors?.collegeName?.message}
                          </p>
                        </div>
                        {/* <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="year"
                          >
                            Year
                          </label>
                          <select
                            name="year"
                            id="year"
                            className="py-[0.5rem] px-[1rem]"
                            placeholder="Year"
                            {...register("year", {
                              required: "This Field is Required",
                            })}
                          >
                            <option value="" disabled selected>
                              Select Year
                            </option>
                            <option value="FirstYear">1st</option>
                            <option value="SecondYear">2nd</option>
                            <option value="ThirdYear">3rd</option>
                            <option value="FourthYear">4th</option>
                            <option value="Graduated">Graduated</option>
                          </select>
                          <p className="text-red-800">
                            {errors?.year?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="course"
                          >
                            Course
                          </label>
                          <div className="flex flex-wrap gap-[1rem] font-semibold">
                            {["B.Tech", "BCA", "MCA", "Others"].map(
                              (course, index) => (
                                <div
                                  className="flex items-center gap-[0.5rem]"
                                  key={index}
                                >
                                  <input
                                    type="radio"
                                    name="course"
                                    id={`course-${index}`}
                                    value={course}
                                    {...register("course", {
                                      required: "This Field is Required",
                                    })}
                                  />
                                  <label htmlFor={`course-${index}`}>
                                    {course}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                          <p className="text-red-800">
                            {errors?.course?.message}
                          </p>
                        </div> */}
                        <div className="mb-4">
                          <label
                            htmlFor="course"
                            className="block text-base font-bold text-[#003366] FormLabel"
                          >
                            Course
                          </label>
                          <select
                            id="course"
                            name="course"
                            autoComplete="course"
                            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                            {...register("course", {
                              required: "This Field is Required",
                            })}
                            onChange={(e) => setCourseName(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select
                            </option>
                            <option value="Bachelor of Technology">
                              B.Tech
                            </option>
                            <option value="Bachelor of Computer Applications">
                              BCA
                            </option>
                            <option value="Master of Technology">M.Tech</option>
                            <option value="Master of Computer Applications">
                              MCA
                            </option>
                          </select>
                          <p className="text-red-800">
                            {errors?.course?.message}
                          </p>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="year"
                            className="block text-base font-bold text-[#003366] FormLabel"
                          >
                            Year of Study
                          </label>
                          <select
                            id="year"
                            name="year"
                            autoComplete="year"
                            className="mt-1 block w-full shadow-sm sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                            {...register("year", {
                              required: "This Field is Required",
                            })}
                          >
                            <option value="" disabled selected>
                              Select
                            </option>
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                            {(courseName === "Bachelor of Technology" ||
                              courseName ===
                                "Bachelor of Computer Applications") && (
                              <option value="3rd">3rd</option>
                            )}
                            {courseName === "Bachelor of Technology" && (
                              <option value="4th">4th</option>
                            )}
                          </select>
                          <p className="text-red-800">
                            {errors?.year?.message}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="text-white bg-[#FF9416] py-[0.5rem] px-[1rem] rounded-md cursor-pointer">
                          Next
                        </button>
                      </div>
                    </form>
                  )}
                  {step === 2 && (
                    <form
                      className="grid sm:grid-cols-2 gap-x-[3rem] gap-y-[1rem]"
                      onSubmit={handleSubmit(submitForm2)}
                    >
                      <div className="flex flex-col gap-[1rem]">
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="technology"
                          >
                            Select Technology
                          </label>
                          <select
                            className="py-[0.5rem] px-[1rem] w-full"
                            name="technology"
                            id="technology"
                            {...register("technology", {
                              required: "This field is required",
                            })}
                            // onChange={() => {
                            //   handleTechnologySelect();
                            //   // resetField("startMonth");
                            //   // resetField("duration");
                            // }}
                            onChange={handleTechnologySelect}
                          >
                            <option value="" selected>
                              Select Technology
                            </option>
                            {Object.keys(FeesData.AllData.Technologies).map(
                              (technology) => (
                                <option key={technology} value={technology}>
                                  {
                                    FeesData.AllData.Technologies[technology]
                                      .name
                                  }
                                </option>
                              )
                            )}
                          </select>
                          <p className="text-red-800">
                            {errors?.technology?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="mode"
                          >
                            Training Mode
                          </label>
                          <select
                            className="py-[0.5rem] px-[1rem]"
                            name="mode"
                            id="mode"
                            {...register("mode", {
                              required: "This field is required.",
                            })}
                          >
                            <option value="" selected>
                              Select Training Mode
                            </option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                          </select>
                          <p className="text-red-800">
                            {errors?.mode?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="startMonth"
                          >
                            Training Starting From
                          </label>
                          <select
                            className="py-[0.5rem] px-[1rem]"
                            name="startMonth"
                            id="startMonth"
                            {...register("startMonth", {
                              required: "This field is required",
                            })}
                          >
                            <option value="" selected>
                              Select Month
                            </option>
                            {selectedTechnology &&
                              FeesData.AllData.Technologies[
                                selectedTechnology
                              ].TrainingStart.map((startMonth) => {
                                return (
                                  <option value={startMonth}>
                                    {startMonth}
                                  </option>
                                );
                              })}
                          </select>
                          <p className="text-red-800">
                            {errors?.startMonth?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="duration"
                          >
                            Training Duration
                          </label>
                          <select
                            className="py-[0.5rem] px-[1rem]"
                            name="duration"
                            id="duration"
                            {...register("duration", {
                              required: "This field is required",
                            })}
                            onChange={TrainingDurationSelect}
                          >
                            <option value="" selected>
                              Select Duration
                            </option>
                            {selectedTechnology &&
                              FeesData.AllData.Technologies[
                                selectedTechnology
                              ].TrainingDuration.map((trainingDuration) => {
                                return (
                                  <option value={trainingDuration}>
                                    {trainingDuration} Days
                                  </option>
                                );
                              })}
                          </select>
                          <p className="text-red-800">
                            {errors?.duration?.message}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[1rem]">
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="knowingSource"
                          >
                            How Did You Hear About us?
                          </label>
                          <select
                            className="py-[0.5rem] px-[1rem]"
                            name="knowingSource"
                            id="knowingSource"
                            {...register("knowingSource", {
                              required: "This field is required",
                            })}
                          >
                            <option value="" selected>
                              Select
                            </option>
                            <option value="Friends">Friends</option>
                            <option value="SocialMedia">Social Media</option>
                            <option value="Collage">College</option>
                            <option value="Other">Other</option>
                          </select>
                          <p className="text-red-800">
                            {errors?.knowingSource?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="comment"
                          >
                            Any Comment
                          </label>
                          <input
                            className="sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                            type="text"
                            id="comment"
                            name="comment"
                            placeholder="Comment"
                            {...register("comment", {
                              required: "This field is required",
                            })}
                          />
                          <p className="text-red-800">
                            {errors?.comment?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="reference"
                          >
                            Reference Name
                          </label>
                          <input
                            className="sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                            type="text"
                            id="reference"
                            name="reference"
                            placeholder="Enter Reference Name"
                            {...register("reference", {
                              required: "This field is required",
                            })}
                          />
                          <p className="text-red-800">
                            {errors?.reference?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="reference"
                          >
                            Coupon Code
                          </label>
                          <div className="flex gap-5">
                            <input
                              className="sm:text-sm border-[1px] border-[#003366] px-3 py-2"
                              type="text"
                              id="couponcode"
                              name="couponcode"
                              placeholder="Enter Coupon Name"
                            />
                            <button className="text-white bg-[#FF9416] py-[0.5rem] px-[1rem] rounded-md cursor-pointer">
                              Apply Coupon
                            </button>
                          </div>
                          <p className="text-red-800">
                            {errors?.reference?.message}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                          <label
                            className="text-md font-semibold text-[#003366]"
                            htmlFor="Fees"
                          >
                            Fees
                          </label>
                          <div className="py-2 font-semibold text-[#003366] text-xl">
                            {selectedDuration &&
                              selectedTechnology &&
                              FeesData.AllData.Technologies[selectedTechnology]
                                .Fees[selectedDuration]}{" "}
                            Rs
                          </div>
                        </div>
                      </div>
                      <div className="flex item-center gap-[1rem]">
                        <button
                          className="text-white bg-[#FF9416] py-[0.5rem] px-[1rem] rounded-md cursor-pointer"
                          onClick={() => setStep(1)}
                        >
                          Back
                        </button>
                        <button className="text-white bg-[#FF9416] py-[0.5rem] px-[1rem] rounded-md cursor-pointer">
                          Next
                        </button>
                      </div>
                    </form>
                  )}
                  {step === 3 && (
                    <div className="flex flex-col gap-[2rem]">
                      <form
                        className="flex flex-col items-start gap-[1rem]"
                        onSubmit={handleSubmit(handlePayment)}
                      >
                        <div className="flex flex-col gap-[0.5rem]">
                          <h2 className="text-2xl font-semibold text-[#003366]">
                            Amount
                          </h2>
                          <span className="bg-[#003366] text-white text-center py-[0.5rem] px-[1rem] rounded-md font-semibold text-xl">
                            {feesValue}.00 Rs
                          </span>
                        </div>
                        <div className="flex items-center gap-[1.5rem]">
                          <button
                            className="text-white bg-[#FF9416] py-[0.5rem] px-[1rem] rounded-md cursor-pointer"
                            onClick={() => setStep(2)}
                          >
                            Back
                          </button>
                          <button className="text-white bg-[#FF9416] py-[0.5rem] px-[1rem] rounded-md cursor-pointer">
                            Complete Payment
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentRegister;
