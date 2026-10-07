import React from 'react'
import "./SingleCard.css"
import { useLocation, Link } from 'react-router-dom';
import DSBanner from '../components/sections/DSSections/DSBanner copy';

function SingleWorkshop() {
    const location = useLocation();
    const { item } = location.state || {};

    return (
        <>
            <DSBanner />
            <div className="paragrafh">
                <h1 className="font-bold text-xl">📝 Workshop Details:</h1>
                <h2 className="font-bold">💻 {item.title}</h2>
                <img className='w-[500px]' src={`./workshop-thumbs/${item.image}`} alt="Workshop" />

                <div class="workshop-details font-bold">

                    <p><strong className="font-bold text-xl">💸 Workshop Fees:</strong> INR 799 + Taxes(Hard copy Certificates)</p>
                    <p><strong>🎟️ Fee:</strong><del>1999/-</del> Rs.799/- + taxes (Limited Seats only)</p>
                    <p>💳 (PhonePe/Paytm/Google Pay - Number: 9251494002)</p>

                    <p><strong>📚 Workshop Topic:</strong> {item.title}</p>
                    <p><strong>🧑‍🎓 Workshop Level:</strong> Beginners to proficient, Professionals, anybody can attend.</p>
                    <p><strong>💻 Note:</strong> Students need to bring a Laptop.</p>

                    <p><strong>📅 Workshop Dates:</strong> 19th-20th Oct 2025</p>

                    <h3 className="font-bold text-xl">🔧 Why Should You Attend?</h3>
                    <ul>
                        <li>✅ Certificate of Participation from Upflairs & Sphinx,MNIT Jaipur</li>
                        <li>✅ Learn from Industry Experts</li>
                        <li>✅ Interactive Q&A Sessions</li>
                        <li>✅ Career Mentorship & Guidance</li>
                        <li>✅ Hands-on Learning</li>
                    </ul>

                    <h3 className="font-bold text-xl">📞 For Further Assistance:</h3>
                    <p className="font-bold text-xl"><strong>📞 Vikram:</strong> 8005932201</p>
                    <p className="font-bold text-xl"><strong>📞 Amisha:</strong> 6350417917</p>

                    {/* <button class="register-btn">📝 Register Now</button> */}
                </div>


                <div className="buy">
                    <Link to="/workshop-register">
                        Register Now
                    </Link>
                </div>
            </div >
        </>
    )
}

export default SingleWorkshop