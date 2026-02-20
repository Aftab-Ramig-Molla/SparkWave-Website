import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
    
import client1 from "../../assets/clients/16.jpg";
import client2 from "../../assets/clients/3.png";
import client3 from "../../assets/clients/13.JPG";
import client4 from "../../assets/clients/6.png";
import client5 from "../../assets/clients/30.png";
import client6 from "../../assets/clients/5.png";
import client7 from "../../assets/clients/34.png";
import client8 from "../../assets/clients/4.png";
import client9 from "../../assets/clients/24.png";


        const testimonialsData = [ 
            { 
                id: 1,
                name: "PEYUSH BHATIA",
                role: "Life Coach", 
                image: client1, 
                text: "Digital transformation has enabled me, as a life coach, to connect with clients more effectively while delivering personalized guidance at scale. The company’s innovative digital solutions enhance communication, engagement, and overall coaching impact.",
            },
            { 
                id: 2,
                name: "JETSHEN DOHNA LAMA",
                role: "Singer", 
                image: client2, 
                text: "As a singer, SparkWave has helped me showcase my creativity and connect with a wider audience digitally. The platform’s innovative tools make collaboration, promotion, and audience engagement effortless. It’s a valuable space for artists looking to grow their presence.", 
            },
            
            { 
                id: 3,
                name: "HOCUS FOCUS",
                role: "Podcasters & Magician", 
                image: client3, 
                text: "SparkWave gives me the perfect platform to blend storytelling, creativity, and a touch of magic. It helps me engage listeners, share unique content, and grow my audience seamlessly. A truly creative space for podcasters and performers alike.", 
            },
            
            { 
                id: 4,
                name: "TAROT MANSHA",
                role: "Vastu and Tarot Card Reader", 
                image: client4, 
                text: "SparkWave has helped me reach seekers who are looking for genuine spiritual guidance and clarity. The platform makes it easy to connect, share insights, and build trust with clients digitally. It’s a meaningful space for holistic and spiritual professionals to grow their presence.", 
            },
            
            { 
                id: 5,
                name: "INCREASE FASHION",
                role: "Clothing Shop", 
                image: client5, 
                text: "SparkWave has helped our clothing shop showcase collections digitally and reach more customers with ease. The platform makes promotion, customer engagement, and brand visibility simple and effective. It’s a great solution for growing a modern fashion business.", 
            },
            
            { 
                id: 6,
                name: "RANJIT SARKAR",
                role: "Politician", 
                image: client6, 
                text: "SparkWave has helped streamline communication and improve outreach through digital innovation. The platform supports transparent engagement and efficient information sharing with the public. It’s a valuable tool for modern leadership in the digital era.", 
            },
            
            { 
                id: 7,
                name: "YAMINI SINGH",
                role: "Indian actress", 
                image: client7, 
                text: "SparkWave has helped me connect with my audience in a more meaningful and authentic way. The platform makes digital presence, promotion, and engagement effortless and impactful. It’s a great space for artists to grow their reach and stay connected with fans.", 
            },
            { 
                id: 8,
                name: "MAHESH RAO",
                role: "Musician", 
                image: client8, 
                text: "SparkWave has helped me share my music with a wider audience and build a stronger digital presence. The platform makes promotion and audience engagement simple and effective. It’s a great support system for independent musicians.", 
            },
            { 
                id: 9,
                name: "LSONS LED",
                role: "LED Business", 
                image: client9, 
                text: "SparkWave has enabled our LED business to showcase products professionally and reach more customers online. Its digital tools improve visibility, communication, and brand credibility. A reliable platform for growing a technology-driven business.", 
            },
            
        ]
    export const Testimonials = () => {

    // 1. Change cardsPerView to a state variable
    const [cardsPerView, setCardsPerView] = useState(3);

    // 2. Add this useEffect to handle window resizing
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 768) {
            setCardsPerView(1); // Mobile: 1 card
        } else if (window.innerWidth < 1024) {
            setCardsPerView(2); // Tablet: 2 cards
        } else {
            setCardsPerView(3); // Desktop: 3 cards
        }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ... rest of your code (useEffect for auto-slide, nextSlide, etc.) ...
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Math.max(
        1,
        Math.ceil(testimonialsData.length / cardsPerView)
    );
        
    useEffect(() => {
        const interval = setInterval(() => {
        autoScroll();
    }, 6500); // change speed here

    return () => clearInterval(interval);
    }, [cardsPerView]);

        


    useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;


    const handleScroll = () => {
    const card = container.querySelector(".testimonial-card");
    if (!card) return;

    // Get the dynamic gap from CSS
    const gap = parseInt(window.getComputedStyle(container).gap) || 0;
    const cardWidth = card.offsetWidth + gap; 
    
    const index = Math.round(container.scrollLeft / (cardWidth * cardsPerView));
    setCurrentIndex(index * cardsPerView);
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
    }, [cardsPerView]);
        
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);


    const autoScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector(".testimonial-card");
    if (!card) return;

    // Get the dynamic gap from CSS
    const gap = parseInt(window.getComputedStyle(container).gap) || 0;
    const cardWidth = card.offsetWidth + gap;
    
    const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
        container.scrollBy({
            left: cardWidth * cardsPerView,
            behavior: "smooth",
        });
        }
    };


    const handleMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add("active");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
    isDown.current = false;
    };

    const handleMouseUp = () => {
    isDown.current = false;
    };

    const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // ⭐ smoother
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

        return (
            <section className="testimonials-section">
            <h2 className="title">What Our Clients Says</h2>

            <div
            className="cards-container"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            >
                {testimonialsData.map((item) => (
                <div className="testimonial-card" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                    <p>{item.text}</p>
                </div>
                ))}
            </div>

            {/* DOTS */}
            <div className="dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={`dot ${
                    index * cardsPerView === currentIndex ? "active" : ""
                    }`}
                onClick={() => {
                const container = scrollRef.current;
                const card = container.querySelector(".testimonial-card");
                if (!card) return;

                // Get the dynamic gap from CSS
                    const gap = parseInt(window.getComputedStyle(container).gap) || 0;
                    const cardWidth = card.offsetWidth + gap;
                    const scrollAmount = index * cardWidth * cardsPerView;

                    container.scrollTo({
                    left: scrollAmount,
                    behavior: "smooth",
                    });

                    setCurrentIndex(index * cardsPerView);
                }}
                ></span>
                ))}
            </div>
            </section>
        );
        };