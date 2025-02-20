import React from 'react';
import '../App.css';
import favicon from '../assets/favicon.png';
import saleimage from '../assets/Sale_Img.jpg';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    return (
        <section className="categories-section py-12">
            <div className="container mx-auto text-center">
                <div className="categories-container">
                    <a href="#" className="category-btn">Development</a>
                    <a href="#" className="category-btn">Business</a>
                    <a href="#" className="category-btn">IT & Software</a>
                    <a href="#" className="category-btn">Design</a>
                    <a href="#" className="category-btn">Marketing</a>
                    <a href="#" className="category-btn">Personal Development</a>
                </div>
            </div>
            <div className="container mx-auto text-center">
            <img src={saleimage}  alt="Logo" className="sale_img" />
            <div className='offer'>
            <h1>Udemy Flash Sale - 24 Hours to Save!</h1>
            <p>Get the Top Courses for just ₹499.</p>
            <p>Only one day to save! Lifetime Access to Learn..!</p>
            </div>
            </div>
        </section>
    );
}


export default Header;
