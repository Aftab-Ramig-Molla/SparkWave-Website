    import React, { useRef } from "react";
    import "./ExpertTeam.css";
    import { FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
    import rajuImage from '../../assets/raju.jpg';
    import syantiImage from '../../assets/SayantiBera.jpg';
    import aftabImage from '../../assets/aftab.jpg';
    import amitImage from '../../assets/amit.jpg';
    import soumenImage from '../../assets/soumen.jpg';
    import srimoyeeImage from '../../assets/Srimoyee.jpg';

    const teamMembers = [
    {
        id: 1,
        name: "RAJU SEN",
        title: "FOUNDER OF SPARKWAVE",
        src: rajuImage,
        linkedinUrl: "https://www.linkedin.com/company/sparkwavelinkedin/",
    },
    {
        id: 2,
        name: "SAYANTI BERA",
        title: "CO-FOUNDER",
        src: syantiImage,
        linkedinUrl: "https://www.linkedin.com/in/sayanti-bera%F0%9F%92%99-28500a237/",
    },
    {
        id: 3,
        name: "AMIT MONDAL",
        title: "VIDEO EDITING EXPERT",
        src: amitImage,
        linkedinUrl: "https://www.linkedin.com/in/amit-mondal-0837661b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        id: 4,
        name: "SOUMEN MISTRY",
        title: "VIDEO EDITING EXPERT",
        src:  soumenImage,
        linkedinUrl: "https://www.linkedin.com/in/soumen-mistry-39a254246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
        id: 5,
        name: "SRIMOIEE DHARA",
        title: "VIDEO EDITING EXPERT",
        src:  srimoyeeImage,
        linkedinUrl: "#",
    },
    {
        id: 6,
        name: "AFTAB RAMIG MOLLA",
        title: "WEB DEVELOPER",
        src: aftabImage,
        linkedinUrl: "https://www.linkedin.com/in/aftab-ramiz-molla/",
    },
    ];

    export const ExpertTeam = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 300; // how much to scroll per click
        if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="team-section">
        <div className="expert-container">
            <h2 className="expert-title">
            MEET THE EXPERT TEAM
            </h2>

            <div className="carousel-container">
            <button className="arrow-btn left" onClick={() => scroll("left")}>
                <FaChevronLeft />
            </button>

            <div className="team-members-wrapper" ref={scrollRef}>
                <div className="team-members-scroll">
                {teamMembers.map((member) => (
                    <div className="team-member-card" key={member.id}>
                    <div className="member-image-container">
                        <img
                        src={member.src}
                        alt={member.name}
                        className="member-image"
                        />
                        <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-icon"
                        >
                        <FaLinkedin />
                        </a>
                    </div>
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-title">{member.title}</p>
                    </div>
                ))}
                </div>
                
            </div>

            <button className="arrow-btn right" onClick={() => scroll("right")}>
                <FaChevronRight />
            </button>
            </div>
        </div>
        </section>
    );
    };
