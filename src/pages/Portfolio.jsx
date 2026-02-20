    import React, { useState, useEffect } from 'react';
    import styles from './Portfolio.module.css';
    import { portfolioData } from '../../public/portfolioData.js';
    import portfolioVideo from '../assets/PortfolioVideo.mp4';
    import SEO from "../components/SEO";
    import {NavLink} from "react-router-dom";

    export const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('LOGO DESIGN');
    const [visibleCount, setVisibleCount] = useState(8);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);


    const categories = Object.keys(portfolioData);
    const currentItems = portfolioData[activeCategory] || [];
    const hasMore = visibleCount < currentItems.length;

    useEffect(() => {
        setVisibleCount(4);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeCategory]);

    useEffect(() => {
        document.querySelectorAll(`.${styles['gallery-item']}`).forEach((el, i) => {
        el.style.animationDelay = `${i * 0.1}s`;
        el.classList.remove(styles.loaded);
        setTimeout(() => el.classList.add(styles.loaded), 100);
        });
    }, [activeCategory, visibleCount]);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 8, currentItems.length));
    };


    const openModal = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    };



    return (
        <>
        <SEO
        title="Our Portfolio: SparkWave Digital Media"
        description="Our Portfolio is a demonstration of the best works done by SparkWave, where every project is attributed to our strategy, innovation and an interest."
        />
        <div className={styles['portfolio-wrapper']}>

        {/* HERO */}
        <section className={styles['hero-section']}>
            <video className={styles['hero-video']} autoPlay muted loop playsInline>
            <source src={portfolioVideo} type="video/mp4" />
            </video>
            <div className={styles['hero-overlay']}></div>
            <div className={styles['hero-content']}>
            <h1 className={styles['hero-title']}>Our Portfolio</h1>
            {/* Animated Underline */}
            <div className={styles.animatedLine}></div>
            <p className={styles['hero-subtitle']}>
                Our Portfolio is a demonstration of the best works done by SparkWave, where creativity collides with performance. Here you are going to peruse our most influential projects including digital marketing, social media, design, and web solutions that have all been carefully designed to achieve tangible outcomes. Every project is attributed to our strategy, innovation and an interest in helping brands grow and stand out on the Internet.
            </p>
            </div>
        </section>

        {/* NAVIGATION */}
        <nav className={styles['category-nav']}>
            <div className={styles['nav-inner']}>
            {categories.map((category) => (
                <button
                key={category}
                className={`${styles['nav-btn']} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
                >
                {category}
                </button>
            ))}
            </div>
        </nav>

        {/* GALLERY */}
        <section className={styles['gallery-section']}>
            <div className={styles.container}>
            <h2 className={styles['category-title']}>{activeCategory}</h2>

            <div className={styles['gallery-grid']}>
                {currentItems.slice(0, visibleCount).map((item, index) => (
                <div key={index} className={styles['gallery-item']}>
                    <div className={styles['media-wrapper']}>

                    
                    {item.type === "video" ? (
                    <div
                        className={styles.videoThumb}
                        onClick={() => openModal(item)}
                    >
                        <img
                        src={item.poster}
                        alt={item.title}
                        className={styles.media}
                        loading="lazy"
                        />

                        <div className={styles.playOverlay}>
                        <span className={styles.playIcon}>▶</span>
                        </div>
                    </div>
                    ) : (
                    <img
                        src={item.img}
                        alt={item.title}
                        className={styles.media}
                        loading="lazy"
                        onClick={() => openModal(item)}
                    />
                    )}

                    <div className={styles['item-overlay']}>
                        <div className={styles['overlay-content']}>
                        {/* <h3 className={styles['item-title']}>{item.title}</h3> */}
                        {item.client && <p className={styles['item-client']}>{item.client}</p>}
                        </div>

                    </div>
                    </div>
                </div>
                ))}
            </div>

            {hasMore && (
                <div className={styles['load-more-wrapper']}>
                <button onClick={loadMore} className={styles['load-more-btn']}>
                    Load More <span className={styles['btn-arrow']}>→</span>
                </button>
                </div>
            )}
            </div>
        </section>

        {/* CTA */}
        <section className={styles['cta-section']}>
            <div className={styles.container}>
            <h3>Ready to bring your vision to life?</h3>
            <NavLink to="/contact">
                <button className={styles['cta-button']}>Start Your Project</button>
            </NavLink>
            </div>
        </section>


        {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>

            
        {modalContent?.type === "video" ? (
        <video
            src={modalContent.src}
            className={styles.modalMedia}
            autoPlay
            controls
        />
        ) : (
        <img
            src={modalContent.img}
            className={styles.modalMedia}
            alt={modalContent.title}
        />
        )}
            </div>
        </div>
        )}
        </div>
        </>
    );
    };








