import React from "react";
import { Helmet } from "react-helmet";
import CarrerGrowth from "../../../components/common/CarrerGrowth";
import DifferentCourses from "../../../components/common/DifferentCourses";
import AboutColleges from "../../../components/sections/About/AboutColleges";
import DSBanner from "../../../components/sections/DSSections/DSBanner";
import DSCertificate from "../../../components/sections/DSSections/DSCertificate";
// import DSCoursePlan from "../../../components/sections/DSSections/DSCoursePlan";
import DSCoursePlan from "../../../components/sections/DSSections copy/DSCoursePlan";

import DSCTA from "../../../components/sections/DSSections/DSCTA";
// import DSInstructor from "../../../components/sections/DSSections/DSInstructor";
import DSInstructor from "../../../components/sections/DSSections copy/DSInstructor";

import DSTestimonial from "../../../components/sections/DSSections/DSTestimonial";
// import DSTools from "../../../components/sections/DSSections/DSTools";
import DSTools from "../../../components/sections/DSSections copy/DSTools";

import DSVideoTestimonial from "../../../components/sections/DSSections/DSVideoTestimonial";
import DSWhyChoose from "../../../components/sections/DSSections/DSWhyChoose";
import HomeUpcomingEvents from "../../../components/sections/HomePage/HomeUpcomingEvents";
import PageBanners from "../../../components/common/PageBanners";
import DemoSection from "../../../components/sections/common page sections/DemoClass";

//demo section 
import BGImage from "../../../images/DSDemoClassImage.png";
import BGOverlay from "../../../images/HomeWave.svg";
import Curriculum from "../../../components/common/Curriculum";
//-------------------------------------
import { courseLessons } from "../../../components/sections/DataAnalytics/courseLesson";
import ContentLessons from "../../../components/common/ContentLessons";
import Reasons from "../../../components/common/Reasons";
import { reasonsToLearnDataAnalytics } from "../../../components/sections/DataAnalytics/reasonsArray";

//-----------
import Instructor from "../../../components/sections/DataAnalytics/Instructor";
import Faq from "../../../components/sections/DataAnalytics/Faq";

let toolsArray=[
    { color: "blue3", img: "/images/data analytics/DATA ANALYTICS.png", name: "Introduction to Data Analytics" },
    { color: "white", img: "/images/data analytics/EXCEL.png", name: "Foundation of Data Analytics using Excel" },
    { color: "blue4", img: "/images/data analytics/EXCEL.png", name: "Excel" },
    { color: "blue5", img: "/images/data analytics/POWER_BI.png", name: "Power BI" },
    { color: "red2", img: "/images/data analytics/Tableau-logo.png", name: "Tableau" },
    { color: "yellow2", img: "/images/data analytics/SQL.png", name: "SQL" }
  ]
  


export const metadata = {
    title:
        "Best Data Science Course in Jaipur with Placement by Industry Experts",
};
const instructorProps = [
    { title: "Ms. Nikita Jangid", description: "Instructor", image: "/nikita.jpg" },
    { title: "Experience", description: "Nikita holds an experience of 3+ years and is highly expert in the field of Data Science, Data Analytics, Full-Stack Web Development, and Core Java." },
    { title: "About Her", description: "A highly skilled and passionate instructor dedicated to mentoring students in building data-driven solutions, scalable applications, and automation techniques." },
    { title: "Her Expertise", description: "Proficient in Data Science (Python, R, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch), Data Analytics & Visualization (SQL, Excel, Power BI, Tableau), and Core Java for robust application development. Experienced in Full-Stack Web Development, including front-end (HTML5, CSS3, JavaScript, React.js), back-end (Node.js, Express.js, RESTful APIs), and databases (MongoDB, MySQL). Skilled in Git/GitHub, automation, and guiding students toward industry-ready technical expertise." },
];

const DataAnalytics = () => {
    return (
        <div>
            <Helmet>
                <title>#1 Training Institute for Data Analyst Course in Jaipur</title>

                <meta name="description" content="Join the #1 training institute for Data Analyst courses in Jaipur. Learn SQL, Python, Excel, statistics, data visualization & more. Trained by industry experts!" />
            </Helmet>
            <PageBanners
                heading="Unlock Endless Opportunities with Data Analytics"
                text="Step into the world of Data Analytics! This course is your gateway to mastering data-driven decision-making, analyzing complex datasets, and extracting valuable insights. Explore the limitless potential of data analytics and open doors to exciting career opportunities!"
                imagePath="/images/data analytics/Data analyitics banner.png"
            />
            {/* <DemoSection
                videoSrc="https://www.youtube.com/embed/6f9ANg3BPas?si=w_oBaiRH-sviWzuc"
                bgImage={BGImage}
                bgOverlay={BGOverlay}
                heading="Data Analytics With Python"
                content="Discover the power of Data Analytics and how it transforms raw data into actionable insights. Learn how businesses leverage data for smarter decisions. Watch our demo video and take your first step toward a data-driven future!"
            /> */}
            <Curriculum
                duration={"45 Days"}
                text={"Data Analytics , Python, SQL, Tableau, Power BI, Excel, Data Visualization, Data Interpretation, Data Mining,  Data Cleaning, Data Transformation, Data Modelling, Data Analysis, Data Reporting, Data Presentation,"}
                pdf={"dataanalytics"}
                icon={"/images/data analytics/DATA ANALYTICS.png"}
            />
            {/* course lesson section  */}
            <>
                <section className="bg-[#003366] py-[50px]">
                    <ContentLessons lessonsArray={courseLessons} />
                </section>
            </>
            
            {/* <DSTools />
             */}
            <DSTools props={{toolsArray}} />
            <DSVideoTestimonial />
            <DSWhyChoose />
            <Reasons 
            itemArray={reasonsToLearnDataAnalytics} course="Data Analytics" img="/ds_reasons.jpg"
            />
            
            <DSCoursePlan />
            <DSCTA />
            <DSInstructor props={{ InstructorCon: instructorProps }} />

            {/* <DSInstructor /> */}
            {/* <Instructor /> */}
            <DSCertificate />
            <CarrerGrowth />
            <AboutColleges />
            <HomeUpcomingEvents />
            <DifferentCourses />
            <DSTestimonial />            
            <Faq />
        </div>
    );
};

export default DataAnalytics;
