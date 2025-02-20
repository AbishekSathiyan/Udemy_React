import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/abishek04/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/AbishekSathiyan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          
          <a
            href="https://abisheksathiyan.github.io/Abishek_Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            <i class="fa fa-laptop"></i> Portfolio
          </a>
        </div>
        <p className="copyright">&copy; 2025 Udemy Clone. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
