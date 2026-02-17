    import React, { useState, useEffect, useCallback } from 'react';
    import styles from './Gallery.module.css';
    import { MOCK_IMAGES } from "../../public/SparkwaveGallery";
    import SEO from "../components/SEO";
    
    export const Gallery = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // State to track index of image open in lightbox (null if closed)
    const [selectedIndex, setSelectedIndex] = useState(null);
    // State to handle smooth loading of the large image
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [visibleCount, setVisibleCount] = useState(5);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    const images = MOCK_IMAGES; // Use your actual data prop here if passing it in

    // Open Ligthbox
    const openLightbox = (index) => {
        setSelectedIndex(index);
        setIsImageLoaded(false); // Reset loading state for new image
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // Close Lightbox
    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, []);

    // Navigate Left
    const showPrev = useCallback((e) => {
        e.stopPropagation(); // Prevent clicking through to close the modal
        setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsImageLoaded(false);
    }, [images.length]);

    // Navigate Right
    const showNext = useCallback((e) => {
        e.stopPropagation();
        setSelectedIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsImageLoaded(false);
    }, [images.length]);

    // Keyboard Navigation Support (Escape, Left Arrow, Right Arrow)
    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev(e);
        if (e.key === 'ArrowRight') showNext(e);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        }, [selectedIndex, closeLightbox, showPrev, showNext]);


    return (
        <>
        <SEO
            title="Life at SparkWave - Office parties, birthdays, and good times."
            description="  Discover life at SparkWave Digital Marketing Agency — office parties, birthday celebrations, team bonding, and the good times that fuel our success."
        />
        <section className={styles.gallerySection}>
        <div className={styles.Galleryheader}>
            <h2 className={styles.title}>Life at SparkWave</h2>
            <p className={styles.subtitle}>Office parties, birthdays, and good times.</p>
        </div>

        {/* --- Thumbnails Grid --- */}
        <div className={styles.grid}>
            {(isMobile ? images.slice(0, visibleCount) : images).map((image, index) => (
            <div
                key={image.id}
                className={styles.thumbnailItem}
                onClick={() => openLightbox(index)}
            >
                <div className={styles.imageWrapper}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <div className={styles.overlay}>
                        <span>View</span>
                    </div>
                </div>
            </div>
            ))}
        </div>

            {/* --- Load More For Mobile --- */}
            {isMobile && visibleCount < images.length && (
                <button 
                    className={styles.loadMoreBtn}
                    onClick={() => setVisibleCount(prev => prev + 5)}
                >
                    Load More
                </button>
            )}

        {/* --- Fullscreen Lightbox Modal --- */}
        {selectedIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
        
        {/* Close Button (Empty, handled by CSS) */}
        <button 
            className={styles.closeBtn} 
            onClick={closeLightbox} 
            aria-label="Close"
        />

        {/* Left Arrow (Empty, handled by CSS) */}
        <button 
            className={`${styles.navBtn} ${styles.navLeft}`} 
            onClick={showPrev} 
            aria-label="Previous image"
        />

        {/* Main Container for Image */}
        <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {!isImageLoaded && <div className={styles.spinner}></div>}
            
            <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className={`${styles.activeImage} ${isImageLoaded ? styles.loaded : ''}`}
                onLoad={() => setIsImageLoaded(true)}
            />
            <div className={styles.imageCaption}>{images[selectedIndex].alt}</div>
        </div>

        {/* Right Arrow (Empty, handled by CSS) */}
        <button 
            className={`${styles.navBtn} ${styles.navRight}`} 
            onClick={showNext} 
            aria-label="Next image"
        />
        </div>
    )}
        </section>
        </>
    );
    };