import React from 'react'
import MainHeading from './MainHeading'
import '../../ExternalCSS.css'
import TermsConditionsList from './TermsConditionsList'
const CancellationCard = () => {
  return (
    <div className=' bg-[#0000006b] md:h-[500px]  h-[400px]  border-4 border-double rounded-sm  overflow-scroll overflow-x-hidden  custom-scrollbarr  border-amber-500'>
      <div className='text-center font-serif text-[#f3f4f4] py-8'>
        <MainHeading value={"Cancellation & Refund Policy"} AnimateWhite={true} />
      </div>
      <TermsConditionsList list={"Fees once paid are not refundable nor transferable 🔒💸"} />
      {/*<TermsConditionsList list={"No refund request shall be accepted after 1 session of the Registered Course"} />
      <TermsConditionsList list={"No refund shall be acceptable in case of learning access shared by Upflairs"} />
      <TermsConditionsList list={"No refund shall be acceptable; once the training session is been scheduled and started for the candidate"} />
      <TermsConditionsList list={"Registration Fee (if any) is not refundable)"} />
      <TermsConditionsList list={"Unfortunately, if the refund is not claimed in the stipulated period time we will not be able to refund the money."} />
      <TermsConditionsList list={"No refund request shall be accepted for the purchase of Self-learning packages over Upflairs E-Learning Platform"} />
      <TermsConditionsList list={"No refund for Official Curriculum"} />
      <TermsConditionsList list={"If we believe that you are abusing our refund policy in our sole discretion, we reserve the right to suspend or terminate your account and refuse or restrict any and all current or future use of the Company Products, without any liability to you."} />
      <TermsConditionsList list={"Company reserves the absolute right to revise these Terms in its sole discretion at any time and without prior notice to you other than by posting the revised Terms on the Site."} /> */}
    </div>
  )
}

export default CancellationCard