import React from 'react';
import {Link} from 'react-router-dom';


const LinkBTN = ({value, link}) => {
  return (
    <>
        <Link to={link} className='bg-[#1b3c73] hover:bg-[#FF9416] rounded-lg text-white cursor-pointer font-medium text-base md:text-lg py-2 px-4 md:py-4 md:px-5 transition-colors duration-100 outline-none select-none'>{value}</Link>
    </>
  )
}

export default LinkBTN