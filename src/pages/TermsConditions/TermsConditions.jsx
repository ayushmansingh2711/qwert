import React from 'react'
import TermsConditionsCard from '../../components/common/TermsConditionsCard'
import MainHeading from '../../components/common/MainHeading';
import CancellationCard from '../../components/common/CancellationCard';
import ChangeinSchedulecard from '../../components/common/ChangeinSchedulecard';

const TermsConditions = () => {
  return (
   <div className='relative'>
     <div className=' termsbackground   py-8 custom-scrollbar  '>
      
      <div className=' flex justify-center md:py-10 md:px-20 py-10 px-4'>
          <TermsConditionsCard/>
        </div>
        <div className=' flex justify-center md:py-10 md:px-20 py-10 px-4 '>
          <CancellationCard/>
        </div>
        <div className=' flex justify-center md:py-10 md:px-20 py-10 px-4'>
         <ChangeinSchedulecard/>
        </div>
        
        
    </div>
   </div>
  )
}

export default TermsConditions