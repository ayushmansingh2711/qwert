import React from 'react'
import { GoTriangleRight } from "react-icons/go";

const Careeroppor2 = ({Heading,Content1,Content2,Content3,Content4}) => {
  return (
    <>
        <div className='bg-[#e4e9ee83] py-2 px-4 rounded-md shadow-lg shadow-[#003366] bordeer-2 border-[#003366] pb-8'>
                        <div className='flex justify-center items-center'>
                            <h2 className='text-2xl py-2 font-semibold text-[#003366] text-shadow-lg'>{Heading}</h2>
                        </div>
                        <div className='bg-[#9cc0e1a4] py-2 px-4 rounded-lg'>
                            <div className='flex py-1'>
                                <GoTriangleRight className='text-2xl ' /><span>{Content1}</span>
                            </div>
                            <div className='flex py-1'>
                                <GoTriangleRight className='text-2xl ' /><span>{Content2}</span>
                            </div>
                            <div className='flex py-1'>
                                <GoTriangleRight className='text-2xl ' /><span>{Content3}</span>
                            </div>
                            <div className='flex py-1'>
                                <GoTriangleRight className='text-2xl ' /><span>{Content4}</span>
                            </div>
                        </div>   
        </div>
    </>
  )
}

export default Careeroppor2