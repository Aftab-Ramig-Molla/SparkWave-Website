    import React, { useState, useRef, useEffect } from "react";
    import "./PortfolioSection.css";
    import { portfolioItems } from '../../assets/assets.js';
    import { PortfolioCard } from "./PortfolioCard";
    import { NavLink } from "react-router-dom";

    export const PortfolioSection = () => {
    // --- STATE ---
    const [activeFilter, setActiveFilter] = useState("LOGO DESIGN");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [isMobile, setIsMobile] = useState(false);


    // --- REFERENCE ---
    const gridRef = useRef(null);

    // --- CATEGORY LIST ---
    const categories = Object.keys(portfolioItems);


    // --- CURRENT ITEMS ---
    const filteredItems = portfolioItems[activeFilter] || [];

    // --- EXIT / ENTER ANIMATION ---
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        grid.classList.add("exiting");

        const timer = setTimeout(() => {
        grid.classList.remove("exiting");
        }, 200);

        return () => clearTimeout(timer);
    }, [activeFilter]);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 768) {
        setIsMobile(true);
        setVisibleCount(4); // reset to 4 on mobile
        } else {
        setIsMobile(false);
        setVisibleCount(filteredItems.length); // show all on desktop
        }
    };



  handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
}, [filteredItems.length]);

    const isVideoFile = (src) => {
    return src.endsWith(".mp4") || src.includes("/video/");
    };
    // --- RENDER ---
    return (
        <section className="portfoliosection">
        <div className="container flex">

            {/* --- TOP SECTION --- */}
            <div className="portfoliosectionabove">
            <div className="portfoliosectionaboveheading">
                <h3>Case Study</h3>
                <h4>
                    Featured Projects That Define Our <span> 5-Year</span> Success Story
                </h4>
            </div>

            <p className="para">
            We are a top-notch design agency that believes and works towards converting ideas 
            into appealing visual displays. We create the artwork that connects, enables and 
            creates lasting impressions because of the logo design, banners, thumbnails, 
            business cards and posters, to the creatives of social media, facebook and YouTube 
            covers.
            </p>
            </div>

            {/* --- FILTER BUTTONS (CATEGORY NAV) --- */}
            <div className="portfoliosectiondown">
            <div className="grid-filter-wrap">
                {categories.map((category) => (
                <span
                    key={category}
                    className={`filter-item ${
                    activeFilter === category ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(category)}
                >
                    {category}
                </span>
                ))}
                {/* --- SHOW MORE BUTTON --- */}
                <NavLink to="/portfolio" className="show-more-btn">
                <button>Show More Projects</button>
                </NavLink>
            </div>
            </div>

            {/* --- GRID --- */}
            <div
            className="portfolio-flex fade-transition"
            ref={gridRef}
            >
            {filteredItems.length > 0 ? (
                filteredItems
                    .slice(0, visibleCount)
                    .map((item, index) => (
                    <PortfolioCard
                        key={item.id}
                        item={item}
                        //isVideo={activeFilter === "MOTION GRAPHICS"}
                        isVideo={isVideoFile(item.src)}
                        onClick={() => {
                        setCurrentIndex(index);
                        setLightboxOpen(true);
                        }}
                    />
                    ))
                ) : (
                <p className="no-results">No projects found in this category.</p>
                )}

            </div>

            {isMobile && visibleCount < filteredItems.length && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                className="load-more-btn"
                onClick={() => setVisibleCount((prev) => prev + 4)}
                >
                Load More
                </button>
            </div>
            )}

            {lightboxOpen && (
            <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
                <div
                className="lightbox-wrapper"
                onClick={(e) => e.stopPropagation()}
                >

                {/* CLOSE BUTTON OUTSIDE IMAGE */}
                <button
                    className="close-btn"
                    onClick={() => setLightboxOpen(false)}
                >
                    ✕
                </button>

                <div className="lightbox-content">
                    {/* PREV */}
                    <button
                    className="nav-btn prev"
                    onClick={() =>
                        setCurrentIndex(
                        (currentIndex - 1 + filteredItems.length) %
                            filteredItems.length
                        )
                    }
                    >
                    ❮
                    </button>

                    {/* MEDIA */}
                    {/* {activeFilter === "MOTION GRAPHICS" ? ( */}
                    {isVideoFile(filteredItems[currentIndex].src) ? (
                        <video controls autoPlay>
                            <source src={filteredItems[currentIndex].src} type="video/mp4" />
                        </video>
                        ) : (
                        <img src={filteredItems[currentIndex].src} alt="" />
                        )}

                    {/* NEXT */}
                    <button
                    className="nav-btn next"
                    onClick={() =>
                        setCurrentIndex(
                        (currentIndex + 1) % filteredItems.length
                        )
                    }
                    >
                    ❯
                    </button>
                </div>
                </div>
            </div>
            )}


        </div>
        </section>
    );
    };
