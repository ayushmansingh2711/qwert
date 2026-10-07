import React from 'react'
import MainHeading from './MainHeading'
import '../../ExternalCSS.css'
import TermsConditionsList from './TermsConditionsList'
const TermsConditionsCard = () => {
  return (
   
        <div className=' bg-[#0000006b] md:h-[500px] h-[400px] border-4 border-double rounded-sm  overflow-scroll overflow-x-hidden  custom-scrollbarr  border-amber-500'>
            <div className='text-center font-serif text-[#f4f7fb] py-8'>
          <MainHeading value={"Terms & Conditions of Website Use"} AnimateWhite={true}/>
          </div>
          <p className='md:px-16 py-4 px-4  text-sm md:text-lg text-[#f1f2f4] font-mono'> Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our Privacy Policy govern ‘Upflairs’ relationship with you in relation to this website. The term “Upflairs” or “us” or “we” refers to the owner of the website whose registered office is 251, Mangalam Aangan, Mahapura, SEZ Road, Jaipur – Rajasthan (INDIA) The term “you” refers to the user or viewer of our website. </p>
          <TermsConditionsList list={"The content of the pages of this website is for your general information and use only. It is subject to change without notice."}/>
          <TermsConditionsList list={"Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law."}/>
          <TermsConditionsList list={"Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements."}/>
          <TermsConditionsList list={"Prices and content are subject to change without prior notice."}/>
          <TermsConditionsList list={"This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions."}/>
          <TermsConditionsList list={"All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website."}/>
          <TermsConditionsList list={"Unauthorised use of this website may give us the right to claim for damages and/or be a criminal offence."}/>
          <TermsConditionsList list={"From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s)."}/>
          <TermsConditionsList list={"You may not create a link to this website from another website or document without Upflairs’ prior written consent."}/>
          <TermsConditionsList list={"Your use of this website and any dispute arising out of such use of the website is subject to the laws of India."}/>
          <p className='md:px-16 py-4 px-4 md:text-lg text-sm text-[#f7f9fc] font-mono'> Company reserves the absolute right to revise these Terms in its sole discretion at any time and without prior notice to you other than by posting the revised Terms on the Site. Any revisions to the Terms are effective upon posting. The Terms will be identified as of the most recent date of revision. You should visit this page regularly to ensure your continued acceptance of these Terms. Your continued use of the Company Products after any revision to these Terms constitutes your binding acceptance of the revised Terms. Notwithstanding the preceding sentences of this section, no revisions to these Terms will apply to any dispute between you and the Company that arose prior to the date of such revision.</p>

          </div>
    
  )
}

export default TermsConditionsCard