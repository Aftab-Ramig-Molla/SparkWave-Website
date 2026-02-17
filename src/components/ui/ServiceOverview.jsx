import React from 'react';
import  './ServiceOverview.css';
import  servicesData  from '../../api/servicesData.json';
import { GrServices } from "react-icons/gr";
import { BsMegaphone } from "react-icons/bs";
import { FaCode, FaSearch, FaPaintBrush, FaPenNib, FaLightbulb } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


export const ServiceOverview = () => {

    const iconMap = {
    BsMegaphone: <BsMegaphone />,
    FaCode: <FaCode />,
    FaSearch: <FaSearch />,
    FaPaintBrush: <FaPaintBrush />,
    FaPenNib: <FaPenNib />,
    FaLightbulb: <FaLightbulb />
};

    return (
        <section className="service-overview-section">
            <h2>We are Strategic Creative Digital Agency Service</h2>
        <div className="services-container">
            <div className="service-circle central-circle">
                <h3> <span>Our </span> <br /> Services</h3>
            </div>

            {servicesData.map((service) => (
            <div key={service.id} className=" satellite-circle">
                    <div className="service-icon">
                        {iconMap[service.icon]}
                    </div>
                    <div className="service-title">
                        <h4>{service.title}</h4>
                    </div>
            </div>
            ))}
        </div>
        <div className="root-btn">
            <NavLink  to="/services/all-services">
                <button className='sparkwave-btn'>
                    All Our Services <GrServices />
                </button>
            </NavLink>

        </div>
</section>

    );
}

