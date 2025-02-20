import React from 'react';
import '../App.css';
import favicon from '../assets/favicon.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src={favicon} alt="Logo" className="logo" />
          <h1 className="head">Udemy</h1>
        </div>
        
        <div className="navbar-center">
          <input 
            type="text" 
            placeholder="Search for anything here, Tech, Business, Art..." 
            className="search" 
          />
        </div>
  
        <div className="navbar-right">
          <p className="head_course">Course</p>
          <p className="head_course">My Learning</p>
          <i className="fa fa-shopping-cart icon"></i>
          <i className="fa fa-bell icon"></i>
          <i className="fa fa-user-circle icon"></i>
        </div>
      </nav>

      
      
    );
}

export default Navbar;