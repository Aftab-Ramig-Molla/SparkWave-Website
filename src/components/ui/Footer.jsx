    import React from "react";
    import "./Footer.css";
    import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
    import { assets } from "../../assets/assets"
    import { NavLink } from "react-router-dom";

    export const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            
            {/* ---- Left Section (Logo & Description) ---- */}
            <div className="footer-left">
            <div className="footer-logo">
                <img 
                    src={assets.logo1} 
                    alt="logo"
                />
            </div>
            <p className="footer-desc">
                Empowering your brand with creative visuals, organic social media growth, and data-driven marketing strategies. Spark your success with SparkWave!
            </p>
            </div>

            {/* ---- Middle Section: Services ---- */}
            <div className="footer-section footer-service">
                <h3 className="footer-heading">Services</h3>
                <ul>
                    <NavLink to="/services/social-media-handling">
                        <li>SOCIAL MEDIA HANDLING(ORGANIC)</li>
                    </NavLink>
                    <NavLink to="/services/ads-paid-marketing">
                        <li>ADS / PAID MARKETING</li>
                    </NavLink>
                    <NavLink to="/services/graphics-creation">
                        <li> GRAPHICS CREATION </li>
                    </NavLink>
                    <NavLink to="/services/video-marketing">
                        <li>VIDEO MARKETING & EDITING</li>
                    </NavLink>
                    <NavLink to="/services/leads-genaration">
                        <li>LEADS GENARATION</li>
                    </NavLink>
                    <NavLink to="/services/web-development">
                        <li>WEBSITE DEVELOPMENT</li>
                    </NavLink>
                    <NavLink  to="/services/photography-vediography">
                        <li>PHOTOGRAPHY & VEDIO GRAPHY</li>
                    </NavLink>
                    <NavLink  to="/services/seo-content-writting">
                        <li>SEO & CONTENT WRITTING</li>
                    </NavLink>
                    <NavLink  to="/services/analytics-and-data">
                        <li>ANALYTICS AND DATA ANALYSIS</li>
                    </NavLink>
                    <NavLink to="/services/reporting">
                        <li>REPORTING</li>
                    </NavLink>
                </ul>
            </div>

            {/* ---- Company ---- */}
        <div className="footer-section1">
        <h3 className="footer-heading">Company</h3>
        <ul>
            <li>
            <NavLink to="/" className="footer-link">
                Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/about" className="footer-link">
                About
            </NavLink>
            </li>
            <li>
            <NavLink to="/services/all-services" className="footer-link">
                Services 
            </NavLink>
            </li>
            <li>
            <NavLink to="/portfolio" className="footer-link">
                Portfolio
            </NavLink>
            </li>
            <li>
            <NavLink to="/achievements" className="footer-link">
                Achievements
            </NavLink>
            </li>
            <li>
            <NavLink to="/gallery" className="footer-link">
                Gallery
            </NavLink>
            </li>
            <li>
            <NavLink to="/contact" className="footer-link">
                Contact
            </NavLink>
            </li>
        </ul>
        </div>


            {/* ---- Contact Section ---- */}
            <div className=" contact-section">
    <h3 className="footer-heading">Contact Us</h3>
    <ul>
        <li>
        <FaMapMarkerAlt className="icon" />  
        <a 
            href="https://maps.app.goo.gl/apPJhZ8ujwkPq2Pj8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
        >
            Near Airport Gate No - 1, Kolkata-700079
        </a>
        </li>
        <li>
        <FaPhoneAlt className="icon" />  
        <a href="tel:+918794645418" className="footer-link">
            +91 8794645418
        </a>
        </li>
        <li>
        <FaEnvelope className="icon icon-email" />  
        <a href="mailto:sparkwave.socialmedia@gmail.com" className="footer-link">
            sparkwave.socialmedia@gmail.com
        </a>
    </li>
  </ul>
</div>

        </div>

        {/* ---- Footer Bottom ---- */}
        <div className="footer-bottom">
            <p>© 2025 Spark Wave. All rights reserved.</p>
            <div className="footer-rights">
            {/* <a href="#" className="admin-login">Admin Login</a> */}
            <div className="social-icons">
                <a href="https://www.facebook.com/share/1KotRNJHKh/?mibextid=wwXIfr" target="_blank"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/company/sparkwavelinkedin/" target="_blank"><FaLinkedinIn /></a>
                <a href="#"><FaYoutube /></a>
                <a href="https://www.instagram.com/spark__wave?igsh=MWx4YTNuN2RsNjh0ag%3D%3D&utm_source=qr" target="_blank"><FaInstagram /></a>
            </div>
            </div>
        </div>
        </footer>
    );
    };
