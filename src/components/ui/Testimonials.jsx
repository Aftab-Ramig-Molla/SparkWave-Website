                // import React from 'react';
                // import './Testimonials.css';
                // import { FaStar } from 'react-icons/fa'; // Icon from react-icons

                // // --- Mock Data ---
                // // We split the data into two rows, just like in the video
                // const row1 = [
                // {
                //     id: 'r1-1',
                //     text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
                //     name: "Isabella Rodriguez",
                //     title: "CEO and Co-founder of ABC Company",
                //     img: "https://i.pravatar.cc/100?img=1"
                // },
                // {
                //     id: 'r1-2',
                //     text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
                //     name: "Gabrielle Williams",
                //     title: "CEO and Co-founder of ABC Company",
                //     img: "https://i.pravatar.cc/100?img=2"
                // },
                // {
                //     id: 'r1-3',
                //     text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
                //     name: "Samantha Johnson",
                //     title: "CEO and Co-founder of ABC Company",
                //     img: "https://i.pravatar.cc/100?img=3"
                // },
                // ];

                // const row2 = [
                // {
                //     id: 'r2-1',
                //     text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
                //     name: "Natalie Martinez",
                //     title: "CEO and Co-founder of ABC Company",
                //     img: "https://i.pravatar.cc/100?img=4"
                // },
                // {
                //     id: 'r2-2',
                //     text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
                //     name: "Victoria Thompson",
                //     title: "CEO and Co-founder of ABC Company",
                //     img: "https://i.pravatar.cc/100?img=5"
                // },
                // {
                //     id: 'r2-3',
                //     text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
                //     name: "John Peter",
                //     title: "CEO and Co-founder of ABC Company",
                //     img: "https://i.pravatar.cc/100?img=6"
                // },
                // ];

                // // --- Card Component ---
                // // A sub-component to keep our main render clean
                // const TestimonialCard = ({ text, name, title, img }) => (
                // <div className="testimonial-card">
                //     <div className="quote-icon">“</div>
                //     <p className="card-text">{text}</p>
                //     <div className="author-info">
                //     <img src={img} alt={name} className="author-avatar" />
                //     <div className="author-details">
                //         <span className="author-name">{name}</span>
                //         <span className="author-title">{title}</span>
                //     </div>
                //     </div>
                // </div>
                // );

                // // --- Main Component ---
                // export const Testimonials = () => {
                // return (
                //     <div className="parentTestimonial">

                    
                //     <div className="testimonial-section">
                //     <div className="testimonial-header">
                //         <h2>What Our Clients Say</h2>
                //     </div>

                //     <div className="testimonial-scroller">
                //         {/* Top Row */}
                //         <div className="testimonial-track track-1">
                //         {/* Render the row twice for the infinite loop */}
                //         {[...row1, ...row1].map((item, index) => (
                //             <TestimonialCard 
                //             key={`${item.id}-${index}`} 
                //             {...item} 
                //             />
                //         ))}
                //         </div>
                        
                //         {/* Bottom Row */}
                //         <div className="testimonial-track track-2">
                //         {/* Render the row twice for the infinite loop */}
                //         {[...row2, ...row2].map((item, index) => (
                //             <TestimonialCard 
                //             key={`${item.id}-${index}`} 
                //             {...item} 
                //             />
                //         ))}
                //         </div>
                //     </div>
                //     </div>
                // </div>
                // );
                // };


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

            // ... inside your Testimonials component ...

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
        // const cardsPerView = 3;

        const startX = useRef(0);
        const isDragging = useRef(false);

        const totalSlides = Math.ceil(testimonialsData.length / cardsPerView);

        useEffect(() => {
            const interval = setInterval(() => {
            nextSlide();
            }, 20000);

            return () => clearInterval(interval);
        }, []);

        const nextSlide = () => {
            setCurrentIndex((prev) =>
            prev + cardsPerView >= testimonialsData.length ? 0 : prev + cardsPerView
            );
        };

        const prevSlide = () => {
            setCurrentIndex((prev) =>
            prev - cardsPerView < 0
                ? (totalSlides - 1) * cardsPerView
                : prev - cardsPerView
            );
        };

        // 🖱️ Mouse Events
        const handleMouseDown = (e) => {
            startX.current = e.clientX;
            isDragging.current = true;
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current) return;

            const diff = startX.current - e.clientX;

            if (diff > 80) {
            nextSlide();
            isDragging.current = false;
            } else if (diff < -80) {
            prevSlide();
            isDragging.current = false;
            }
        };

        const handleMouseUp = () => {
            isDragging.current = false;
        };

        const visibleCards = testimonialsData.slice(
            currentIndex,
            currentIndex + cardsPerView
        );

        return (
            <section className="testimonials-section">
            <h2 className="title">What Our Clients Says</h2>

            <div
                className="cards-container"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {visibleCards.map((item) => (
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
                    onClick={() => setCurrentIndex(index * cardsPerView)}
                ></span>
                ))}
            </div>
            </section>
        );
        };