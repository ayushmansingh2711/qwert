import React from 'react';
import PageBanners from '../../components/common/PageBanners';
import Img from '../../images/PrivacyPolicyImg.jpeg';
import PrivacyPolicyimg from '../../components/common/PrivacyPolicyimg';
import PrivacyPolicyContent from '../../components/common/PrivacyPolicyContent';
import Privimg1 from '../../images/Privacyimg1.png';
import Privimg2 from '../../images/Privacyimg2.png';
import Privimg3 from '../../images/Privacyimg3.png';
import Privimg4 from '../../images/Privacyimg4.png';
import Privimg5 from '../../images/Privacyimg5.png';
import Privimg6 from '../../images/Privacyimg6.png';
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen  bg-zinc-300">
      <div className='shadow-2xl shadow-black'><PageBanners heading="PRIVACY POLICY" imagePath={Img} text="When you use our services, you’re trusting us with your information." />
      </div>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1   md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border-2 border-amber-500  shadow-2xl shadow-black">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg2} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="Who are we?" PrivacyContent="Our website address is: https://upflairs.com" />
        </div>

        <div className="bg-white border-2 border-amber-500 rounded-lg shadow-2xl shadow-black">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg1} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="COMMENTS" PrivacyContent="When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. After approval of your comment, your profile picture is visible to the public in the context of your comment." />
        </div>

        <div className="bg-white border-2 border-amber-500 rounded-lg shadow-2xl shadow-black">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg2} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="MEDIA" PrivacyContent="If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
" />
        </div>

        <div className="bg-white border-2 border-amber-500 rounded-lg shadow-2xl shadow-black">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg3} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="COOKIES" PrivacyContent="If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
" />
        </div>
        <div className="bg-white border-2 border-amber-500 rounded-lg shadow-2xl shadow-black">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg1} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="Who we share your data with?" PrivacyContent="If you request a password reset, your IP address will be included in the reset email.
" />
        </div>

        <div className="bg-white border-2 border-amber-500 rounded-lg shadow-2xl shadow-black">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg2} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="How long we retain your data?" PrivacyContent="If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
"/> </div>

        <div className="bg-white border-2 border-amber-500 rounded-lg shadow-2xl">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg3} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="What rights you have over your data?" PrivacyContent="If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
" />
        </div>

        <div className="bg-white border-2 border-amber-500 rounded-lg shadow-2xl">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center">
            <PrivacyPolicyimg Privacyimage={Privimg4} />
          </div>
          <PrivacyPolicyContent PrivacyHeading="Where we send your data?" PrivacyContent="Visitor comments may be checked through an automated spam detection service." />
        </div>
      </div>
    </div>

  );
};

export default PrivacyPolicy;
