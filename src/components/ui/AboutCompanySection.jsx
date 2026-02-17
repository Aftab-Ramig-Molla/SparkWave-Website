import { assets } from '../../assets/assets';
import "./AboutCompanySection.css"
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const AboutCompanySection = () => {
    return(
        <section className="aboutcompanysection">
            <div className="container grid grid-two-cols">
                <div className="aboutcompanyleft">
                    <NavLink to="/about">
                        <button className="aboutcompanysparkwave-btn">About Our Company ~</button>
                    </NavLink>
                    <div className="aboutcompanyheading">
                        <h2><span>The Best</span> Digital Marketing Company</h2>
                    </div>
                    <div className="aboutcompanypara">
                        <p> 
                            SparkWave comes with 5 years of experience offering innovative digital marketing solutions. We value creativity and strong customer relationships to drive brand growth. Our experts focus on a results-driven approach, crucial for guaranteed digital business success. Explore our various services and find your strategic guide. 
                        </p>
                    </div>
                    <div className="aboutcompanylogo">
                        <h3> <FaRegThumbsUp />5 Years Experience</h3>
                        <h3> <FaHeadset />Technical Support</h3>
                    </div>
                    <div className="aboutcompanycontact">
                        <NavLink to="/contact"><button>Contact Us!</button></NavLink>
                        <div className="aboutcompanycallicon">
                            <div className="callicon">
                            </div>
                            <p>
                                Call for Services(24/7) <br /> <br />
                                <span> +91 8794645418</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="aboutcompanyright">
                    <div className="aboutcompanyimg">
                        <img 
                            src={assets.co_founder_image}
                            alt="Co-Founder" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
