    import { useState } from "react";
    import "./Achievements.css";
    import AchievementsPic from "../assets/AchievementsPic.jpg";
    import SEO from "../components/SEO";

    export const Achievements = () => {
    const cloudinaryImages = [
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1771237268/5_crdtny.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1765959312/2_w5a2kb.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1771237268/6_ekvqgt.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1765959312/9_v4i8wp.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1765959311/4_y0etds.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1765959311/3_kud5xx.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1765959311/8_texobo.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1771237268/7_odoa33.png",
        "https://res.cloudinary.com/drpcl4uj3/image/upload/v1765959311/1_a7nkdk.png"
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % cloudinaryImages.length);

    const prevImage = () =>
        setCurrentIndex(
        (prev) => (prev - 1 + cloudinaryImages.length) % cloudinaryImages.length
        );

    return (
        <>
        <SEO
            title="Our Achievements - SparkWave Digital Media"
            description="Real client transformations through strategic social media management, content creation, and targeted growth campaigns."
        />
        <section className="achievements-section">
        {/* Hero Image */}
        <div className="photo-hero">
            <img src={AchievementsPic} alt="Achievements background" className="hero-img" />

            <div className="photo-overlay">
            <h1>
                Our <span>Achievements</span>
            </h1>
            <p>
                Real client transformations through strategic social media management, content creation, and targeted growth campaigns.
            </p>
            </div>
        </div>

        {/* Gallery Title */}
        <div className="gallery-title">
            <h2>
        
            A GLIMPSE OF <span>OUR SUCCESS</span> 
            </h2>
            <p>See the transformation in action — real before-and-after results showcasing how we’ve boosted social media growth and content performance for our clients.</p>
        </div>

        {/* Gallery */}
        <div className="achievements-gallery">
            {cloudinaryImages.map((img, index) => (
            <div
                className="achievement-card"
                key={index}
                onClick={() => openModal(index)}
            >
                <img src={img} alt={`Achievement ${index + 1}`} />
            </div>
            ))}
        </div>

        {/* Modal */}
        {isOpen && (
            <div className="image-modal">
            <span className="close-btn" onClick={closeModal}>×</span>

            <button className="nav-btn left" onClick={prevImage}>
                &#10094;
            </button>

            <img
                src={cloudinaryImages[currentIndex]}
                alt="Large view"
                className="modal-img"
            />

            <button className="nav-btn right" onClick={nextImage}>
                &#10095;
            </button>
            </div>
        )}
        </section>
        
        </>
    );
    };
