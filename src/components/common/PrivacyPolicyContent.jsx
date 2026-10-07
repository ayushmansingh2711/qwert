import React from 'react';
import '../../ExternalCSS.css'; 

const PrivacyPolicyContent = ({ PrivacyHeading, PrivacyContent }) => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-200  rounded-lg  rounded-tl-none rounded-tr-none shadow-md p-6 w-full max-w-[100%] border-2 border-t-amber-500 shadow-amber-500 h-48 overflow-auto custom-scrollbar">
      <div className="text-[#1b3c73] font-bold text-2xl sm:text-3xl mb-4 PrivacyHeading">{PrivacyHeading}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent shadow-dashed"></span></div>
      <br />
      <div className="text-[#1b3c73] text-base sm:text-lg h-full PrivacyHeading">{PrivacyContent}</div>
    </div>
  );
};

export default PrivacyPolicyContent;

