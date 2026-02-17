import { NavLink, useLocation } from "react-router-dom";
import { assets } from '../../assets/assets';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { FaSortDown } from "react-icons/fa";
import "./Navbar.css";


export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const location = useLocation();

    // 🔥 Auto-close dropdown when the route changes
    useEffect(() => {
        setOpenDropdown(false);
        setShowMenu(false); // optional: close mobile nav
    }, [location.pathname]);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
        setOpenDropdown(false);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">

                    <div className="logo">
                        <NavLink to="/">
                            <img src={assets.logo1} alt="logo" />
                        </NavLink>
                    </div>

                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>

                            <li><NavLink to="/about">About</NavLink></li>

                            <li
                                className={`dropdown ${openDropdown ? "open" : ""}`}
                                onClick={() => setOpenDropdown(prev => !prev)}
                            >
                                <span className="services-toggle">
                                    Services <FaSortDown className="down-button" />
                                </span>

                                <ul className="dropdown-menu">
                                    <li><NavLink to="/services/all-services">All SERVICES</NavLink></li>
                                    <li><NavLink to="/services/social-media-handling">SOCIAL MEDIA HANDLING (ORGANIC)</NavLink></li>
                                    <li><NavLink to="/services/ads-paid-marketing">ADS / PAID MARKETING</NavLink></li>
                                    <li><NavLink to="/services/graphics-creation">GRAPHICS CREATION</NavLink></li>
                                    <li><NavLink to="/services/video-marketing">VIDEO MARKETING & EDITING</NavLink></li>
                                    <li><NavLink to="/services/leads-genaration">LEADS GENERATION</NavLink></li>
                                    <li><NavLink to="/services/web-development">WEBSITE DEVELOPMENT</NavLink></li>
                                    <li><NavLink to="/services/photography-vediography">PHOTOGRAPHY & VEDIO GRAPHY</NavLink></li>
                                    <li><NavLink to="/services/seo-content-writting">SEO & CONTENT WRITING</NavLink></li>
                                    <li><NavLink to="/services/analytics-and-data">ANALYTICS & DATA</NavLink></li>
                                    <li><NavLink to="/services/reporting">REPORTING</NavLink></li>
                                </ul>
                            </li>

                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="/achievements">Achievements</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};
