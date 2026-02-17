import { FaArrowRight } from "react-icons/fa";
import { assets } from '../../assets/assets';
import "./HeroSection.css";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Our Vision, <span>Your Spark</span>
                    </h1>
                    <p className="paragraph">
                        In SparkWave Solution, we are a results-driven digital marketing agency that 
                        helps businesses and social media influencers to exploit their online potentials. 
                        Whether it is brand building and social media marketing or influencer growth 
                        strategies, we come up with data-driven decision making on how you can stand 
                        out, scale faster, and influence more in the digital world. 
                    </p>
                    <NavLink to="/contact">
                        <button className="sparkwave-btn" >
                        Get a Free Consultation <FaArrowRight />
                        </button>
                    </NavLink>
                
                </div>

                <div className="hero-image">
                    <img 
                        src={assets.hero_pic} 
                        alt="Spark Wave Picture" 
                        className="banner-image"
                    />
                </div>
            </div>
        </main>
    )
}