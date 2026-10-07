import React from 'react'
import { Link } from "react-router-dom"
import DSBanner from '../components/sections/DSSections/DSBanner copy';
import "./Card.css";
import { useNavigate } from 'react-router-dom';

// const Card = ({ title, description, image }) => {
//     return (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//             <img className="w-full" src={`./images/workshops/thomso-2025-iit-roorkee-prefest/workshop-thumbs/${image}`} alt="Card Image" />
//             <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{title}</div>
//                 <p className="text-gray-700 text-base">
//                     {description}
//                 </p>
//             </div>
//         </div>
//     );
// };

function Workshop() {
    const navigate = useNavigate()
    const cards = [
        {
            title: 'Cloud with AWS',
            description: '',
            image: 'workshopno1.jpeg'
        },
        {
            title: 'Cyber Security',
            description: 'Description for card 2',
            image: 'workshopno2.jpeg'

        },
        {
            title: 'Data Science',
            description: 'Description for card 3',
            image: 'workshopno4.jpeg'
        },
        {
            title: 'Robotic & IoT',
            description: 'Description for card 4',
            image: 'workshopno3.jpeg'

        },
    ];
    const handleNav = (item) => {
        navigate("/workshop-detail", { state: { item } });
    }
    return (
        <>
            <DSBanner />
            <div className="card-container">
                {cards.map((item, index) => (
                    <>
                        <div key={index} className="card" >
                            <div className="workshop-label">In Campus Workshop</div>
                            <img
                                src={`./workshop-thumbs/${item.image}`}
                                alt="Ethical Hacking"
                                className="card-image"
                                onClick={() => handleNav(item)}
                            />
                            <div className="card-body font-bold" >
                                <div onClick={() => handleNav(item)}>

                                    <h2>{item.title}</h2>
                                    <ul>
                                        <li>19th-20th Oct 2025</li>
                                        <li>Venue : MNIT, JAIPUR</li>
                                        <li>
                                            Fee : <del>1999/-</del> Rs.799/- + taxes
                                        </li>
                                        <li>Certification: Upflairs & Sphinx,MNIT Jaipur </li>
                                        <li>Duration: 2 Days</li>
                                        <li>Timing: 9.30 AM to 5.30 PM</li>
                                    </ul>
                                </div>
                                <div>
                                    <Link to="/workshop-register">
                                        <button className="register-btn">Register Now</button>
                                    </Link>
                                </div>
                                {/* <a href="https://pages.razorpay.com/MNITworkshop" target='_blank'>
                                    <button className="register-btn">Register Now</button>
                                </a> */}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Workshop