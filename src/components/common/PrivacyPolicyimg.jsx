import React from 'react';

const PrivacyPolicyimg = ({ Privacyimage }) => {
  return (
    <div className="w-full md:w-1/2 my-4 md:my-0 ">
      <img src={Privacyimage} alt="Privacy Policy" className="w-full h-auto rounded-lg" />
    </div>
  );
};

export default PrivacyPolicyimg;
