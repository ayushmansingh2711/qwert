// import React from 'react';
// import img from '../../images/CoursesFullStack.png';
// import { Link } from 'react-router-dom';
// import { VscBook } from "react-icons/vsc";
// import { TbClockHour5 } from "react-icons/tb";

// const MainCoursesCard = ({ courseData, order }) => {

//   return (
//     <section className="bg-gray-100 py-8">
//       <div className="container mx-auto px-4 ">
//         <div className="flex justify-center ">
//           <div className="w-full lg:w-3/4 xl:w-2/3 md:px-16 px-8 md:py-8 py-4 border border-gray-300 shadow-xl">
//             <div className="lg:flex lg:items-center flex-wrap">
//               <div className={`xl:w-1/2 w-full ${order % 2 == 0 ? "order-2" : "order-1"}`}>
//                 <h2 className='text-3xl text-[#036] pb-2 font-semibold'>{courseData.title}</h2>
//                 <div className="flex py-4 gap-3 flex-wrap">
//                   <div className="flex md:w-[45%] w-full text-center px-4 py-2 font-semibold text-lg bg-[#f5dcbf] rounded-xl">
//                     <span className=' my-auto text-2xl pr-2'><TbClockHour5 /></span>
//                     <span>{courseData.totalHours}</span>
//                   </div>
//                   <div className="flex md:w-[45%] w-full text-center px-4 py-2 text-lg font-semibold bg-[#f5dcbf] rounded-xl">
//                     <span className='my-auto text-2xl pr-2'><VscBook /></span>
//                     <span>{courseData.totalModules}</span>
//                   </div>
//                 </div>
//                 <div className="py-2">
//                 <h3 className='font-medium'>{courseData.perfectForTitle}</h3>
//                 <p>
//                     {courseData.perfectForContent}
//                 </p>
//                 <h3 className='pt-3 font-medium'>{courseData.aboutTitle}</h3>
//                 <p>
//                     {courseData.aboutContent}
//                 </p>
//                 </div>
//                 <Link to={courseData.pageLink}>
//                   <button className='bg-[#3a6692] py-3 px-5 rounded-xl mt-3 text-white font-semibold'>{courseData.buttonText}</button>
//                 </Link>
//                 {/* <button className='bg-[#3a6692] py-3 px-5 rounded-xl mt-3 text-white font-semibold'>{courseData.buttonText}</button> */}
//               </div>
//               <div className={`xl:w-1/2 w-full pt-6 pr-4 ${order % 2 == 0 ? "order-1" : "order-2"}`}>
//                 <img src={courseData.image} alt={courseData.alt} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainCoursesCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { VscBook } from "react-icons/vsc";
import { TbClockHour5 } from "react-icons/tb";

const MainCoursesCard = ({ courseData, order }) => {

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center ">
          <div className="w-full lg:w-3/4 xl:w-[78%] md:px-16 px-8 md:py-8 py-4 border border-gray-300 shadow-xl">
            <div className="lg:flex lg:items-center flex-wrap">
              <div className={`xl:w-1/2 w-full ${order % 2 == 0 ? "order-2" : "order-1"}`}>
                <h2 className='text-3xl text-[#036] pb-2 font-semibold'>{courseData.title}</h2>
                <div className="flex py-4 gap-3 flex-wrap">
                  <div className="flex md:w-[45%] w-full text-center px-4 py-2 font-semibold text-lg bg-[#f5dcbf] rounded-xl">
                    <span className=' my-auto text-2xl pr-2'><TbClockHour5 /></span>
                    <span>{courseData.totalHours}</span>
                  </div>
                  <div className="flex md:w-[45%] w-full text-center px-4 py-2 text-lg font-semibold bg-[#f5dcbf] rounded-xl">
                    <span className='my-auto text-2xl pr-2'><VscBook /></span>
                    <span>{courseData.totalModules}</span>
                  </div>
                </div>
                <div className="py-2">
                <h3 className='font-medium'>{courseData.perfectForTitle}</h3>
                <p>
                    {courseData.perfectForContent}
                </p>
                <h3 className='pt-3 font-medium'>{courseData.aboutTitle}</h3>
                <p>
                    {courseData.aboutContent}
                </p>
                </div>
                <Link to={courseData.pageLink}>
                  <button className='bg-[#3a6692] py-3 px-5 rounded-xl mt-3 text-white font-semibold'>{courseData.buttonText}</button>
                </Link>
                {/* <button className='bg-[#3a6692] py-3 px-5 rounded-xl mt-3 text-white font-semibold'>{courseData.buttonText}</button> */}
              </div>
              <div className={`xl:w-1/2 w-full pt-6 pr-4 ${order % 2 == 0 ? "order-1" : "order-2"}`}>
                <img src={courseData.image} alt={courseData.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCoursesCard;

