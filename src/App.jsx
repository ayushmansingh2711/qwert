import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import CloudComputingCourse from "./pages//InnerPages/CloudComputingCourse/CloudComputingCourse.jsx";
import EmbeddedSystemsCourse from "./pages//InnerPages/EmbeddedSystemsCourse/EmbeddedSystemsCourse.jsx";
import About from "./pages/About/About.jsx";
import CareerOpportunity from "./pages/Career-opportunity/CareerOpportunity.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Contact1 from "./pages/Contact/Contact copy.jsx";
import UpflaiesCourses from "./pages/Courses/UpflaiesCourses.jsx";
import FlairStories from "./pages/Flair-stories/FlairStories.jsx";
import Home from "./pages/Home/Home.jsx";
import DataScienceCourse from "./pages/InnerPages/DataScienceCourse/DataScienceCourse.jsx";
import FullStackCourse from "./pages/InnerPages/FullStackCourse/FullStackCourse.jsx";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions/TermsConditions.jsx";
import Workshop from "./Workshop/Workshop.jsx";
import SingleWorkshop from "./Workshop/SingleWorkshop.jsx";
import DataAnalytics from "./pages/InnerPages/DataAnalytics/DataAnalytics.jsx";
import TagManager from "react-gtm-module";
import TrackPageViews from './TrackPageView.jsx';
import CoreJavaCourse from './pages/course pages/CoreJavaCourse.jsx';
import DigitalMarketingCourse from './pages/course pages/DigitalMarketingCourse.jsx';
import LinuxCourse from './pages/course pages/LinuxCourse.jsx';
import PythonCourse from './pages/course pages/PythonCourse.jsx';
import GenerativeAiCourse from './pages/course pages/GenerativeAiCourse.jsx';

import DevopsCloudCourse from './pages/course pages/DevOps & Cloud Computing.jsx';
import DataScienceMlAiCourse from './pages/course pages/Data Science with ML & AI.jsx';
import FullStackDevCourse from './pages/course pages/Full Stack Web Development.jsx';
import FrontendDevCourse from './pages/course pages/Frontend Development.jsx';

import BlogPage from './components/blogs/BlogPage.jsx'
import SingleBlogPage from './components/blogs/SingleBlog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/careeropportunity" element={<CareerOpportunity />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workshop-register" element={<Contact1 />} />
        <Route path="/courses" element={<UpflaiesCourses />} />
        <Route
          path="/courses/machine-learning-data-science-in-jaipur"
          element={<DataScienceCourse />}
        />
        {/* <Route
          path="/courses/data-analytics-course-in-jaipur"
          element={<DataAnalytics />}
        /> */}
        <Route
          path="/courses/generative-ai-course-in-jaipur"
          element={<GenerativeAiCourse />}
        />
        <Route
          path="/courses/python-course-in-jaipur"
          element={<PythonCourse />}
        />
        <Route
          path="/courses/linux-course-in-jaipur"
          element={<LinuxCourse />}
        />
        {/* <Route
          path="/courses/core-java-course-in-jaipur"
          element={<CoreJavaCourse />}
        /> */}
        {/* page start */}
        <Route
          path="/courses/devops-cloud-computing-course-in-jaipur"
          element={<DevopsCloudCourse />}
        />
        <Route
          path="/courses/data-science-ml-ai-course-in-jaipur"
          element={<DataScienceMlAiCourse />}
        />
        <Route
          path="/courses/full-stack-web-development-course-in-jaipur"
          element={<FullStackDevCourse />}
        />
        <Route
          path="/courses/frontend-development-in-jaipur"
          element={<FrontendDevCourse />}
        />
        {/* page end */}
        <Route
          path="/courses/digital-marketing-course-in-jaipur"
          element={<DigitalMarketingCourse />}
        />
        <Route
          path="/courses/full-stack-web-development-in-jaipur"
          element={<FullStackCourse />}
        />
        <Route
          path="/courses/cloud-computing-devops-enigneering-in-jaipur"
          element={<CloudComputingCourse />}
        />
        <Route
          path="/courses/embedded-systems-and-robotics-with-iot-in-jaipur"
          element={<EmbeddedSystemsCourse />}
        />
        <Route
          path="/workshop"
          element={<Workshop />}
        />
        <Route
          path="/workshop-detail"
          element={<SingleWorkshop />}
        />
        <Route path="/flair-stories" element={<FlairStories />} />
      </Route>
      <Route path="/payment-success" element={<PaymentSuccess />} />
    </>
  )
);





function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KT4SVVXP" }); // Replace with your GTM ID
  }, []);

  return (
    <>
      <ScrollProvider>
        <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                border: "1px solid white",
                padding: "10px",
                fontSize: "18px",
                fontWeight: 700,
                color: "white",
                backgroundColor: "#FF9416",
                textAlign: "center",
              },
              icon: false,
            }}
          />
        </div>
        <RouterProvider router={router}>
          <TrackPageViews /> {/* Track page views on every route change */}
        </RouterProvider>
      </ScrollProvider>

    </>
  )
}

export default App
