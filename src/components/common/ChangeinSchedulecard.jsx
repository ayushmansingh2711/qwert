import React from 'react'
import MainHeading from './MainHeading'
import '../../ExternalCSS.css'
const ChangeinSchedulecard = () => {
  return (
      
      <div className=' bg-[#0000006b] md:h-[500px] h-[400px] border-4 border-double rounded-sm  overflow-scroll overflow-x-hidden  custom-scrollbarr  border-amber-500'>
        <div className='text-center font-serif text-[#edeef0] py-8'>
          <MainHeading value={"Change in Schedule"} AnimateWhite={true} />
        </div>
        <p className='md:px-16 px-4 py-4 md:text-lg text-sm text-[#f0f1f3] font-mono'> Above changes are applicable to availability of resources and depending on the same require atleast 0-3 working days to implement. We try our best to accommodate all your requests, however, Upflairs reserves the right to reject the request in case of non-availability of resources.</p>

      </div>
        
  )
}

export default ChangeinSchedulecard
