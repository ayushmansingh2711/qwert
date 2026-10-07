import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const TermsConditionsList = ({list}) => {
  return (
    <div className='md:px-14 px-4  py-4 flex text-[#eeeff1]  '>
       <div className='md:py-2  md:text-xl'> <IoIosArrowDroprightCircle/></div>
        <div><h1 className='md:text-lg font-mono  text-sm md:py-1 md:px-2'>{list}</h1></div>
    </div>
  )
}

export default TermsConditionsList