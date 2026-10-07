import React from 'react'
import img2 from "../../images/events2.png"
import LinkBTN from './LinkBTN'
import { IoMdTime } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";

const Events = ({Heading,subcont,date,time,img}) => {
  return (
    <>
          <div class="text-black bg-[#c2c5c381] rounded-lg relative overflow-hidden z-30">
                    <div className='md:h-[250px] h-[200px] md:w-full object-cover transition-all overflow-hidden'>
                        <img src={img} alt="" className='rounded-lg h-full w-full object-cover transform duration-300 hover:scale-110'/>
                    </div>
                    <div className='flex justify-center items-center px-8 '>
                    <div className='md:py-4 md:px-3 bg-[#8ea4d0d7] rounded-lg mt-6 mb-6 px-4 py-8 '>
                        <h4 className='text-xl text-black mb-2 font-[800]'>{Heading}</h4>
                        <p className='text-[16px] leading-[23px]'>{subcont}</p>
                        <div className='flex gap-2 mt-2 items-center'>
                        <IoMdTime className='font-bold text-[20px] text-black'/>
                        <p>{time}</p>
                        </div>
                        <div  className='flex gap-2 mt-2 items-center'>
                          <BsCalendarDate  className='font-bold text-[18px] text-black'/> 
                          <p>{date}</p>
                        </div>
                        {/* <div className=''>
                        <LinkBTN value="Know more"/>
                        </div> */}
                    </div>
                    </div>
                    
              </div>
        
           
    </>
  )
}

export default Events