import aboutImg from "../assets/aboutus.jpg";
import aboutImg2 from "../assets/about-us2.jpg";
import styles from "./About.module.css";
import { useEffect } from "react";
import SEO from "../components/SEO";

export const About = () => {
    useEffect(() => {
        const skillBars = document.querySelectorAll(`.${styles["skill-bar"]}`);

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles["in-view"]);
            }
            });
        },
        { threshold: 0.5 }
        );

        skillBars.forEach((bar) => observer.observe(bar));

        return () => skillBars.forEach((bar) => observer.unobserve(bar));
    }, []);

    return (
        <>
            <SEO
            title="About Us | SparkWave Digital Media | Digital Marketing Agency"
            description=" We are a result-driven digital marketing agency with 5 years of industry experience with a mission to assist brands with trust and expert teams."
            />

            <section className={styles["about-section"]}>

            {/* ===== FULL WIDTH TOP IMAGE ===== */}
            <div className={styles["about-image"]}>
            <img src={aboutImg} alt="About Us" />

            <div className={styles["about-overlay"]}>
                <h1>ABOUT US</h1>
                <p>Who we are & what we do</p>
            </div>
            </div>

            {/* ===== MAX WIDTH CONTENT ===== */}
            <div className={styles["page-wrapper"]}>

                {/* --- 1. About Us Section --- */}
                <section className={styles["about-us-section"]}>
                <div className={styles.container}>
                    <div className={styles["about-us-grid"]}>

                    <div className={styles["about-image-col"]}>
                        <img src={aboutImg2} alt="Video editor working" />
                    </div>

                    <div className={styles["about-text-col"]}>
                        <span className={styles.subtitle}>About Us</span>
                        <h2>We Always Make The Best</h2>
                        <p>
                        We are <b>SparkWave</b>, a result-driven Digital Marketing Agency with 5 years of industry experience in assisting brands to expand, network, and outshine online. We combine innovation and data-driven approaches to provide actual business improvements. We develop customized digital solutions, including SEO, social media marketing, video editing, paid advertisements, graphics design, poster design and web development. 
                        </p>
                        <button className={`${styles.btn} ${styles["btn-primary"]}`}>
                        Contact Us
                        </button>
                    </div>

                    </div>
                </div>
                </section>

                {/* --- 2. Mission & Vision --- */}
                <section className={styles["mission-vision-section"]}>
                <div className={`${styles.container} ${styles["mission-vision-grid"]}`}>

                    <div className={styles["mission-col"]}>
                    <h2 className={styles["section-title"]}>Our Mission</h2>
                    <p>
                        Our purpose at SparkWave is to help companies to be the examples of success due to their data-driven marketing and social media growth. With our belief — <b>Our vision is your spark</b> — we focus on our targets to create meaningful audience engagement, measurable growth and strong brand connections on digital platforms. 
                    </p>
                    </div>

                    <div className={styles["vision-col"]}>
                    <h2 className={styles["section-title"]}>Our Vision</h2>
                    <p>
                        The vision of <b>SparkWave</b> is simple, but powerful: to imply our expertise and creativity within the spark that influences your digital growth and heads up your brand for long-term success. We strive to convert the creative ideas into tangible effect and turn the strategic projects into lasting success. 
                    </p>
                    </div>

                </div>
                </section>

                {/* --- 3. Skills & Stats --- */}
                <section className={styles["skills-stats-section"]}>
                <div className={styles["skill-container"]}>
                    <div className={styles["skills-stats-grid"]}>

                    <div className={styles["skills-col"]}>
                        <h3>Our Skills</h3>

                        {[
                        { name: "Video Editing", percent: 90 },
                        { name: "Digital Marketing", percent: 87 },
                        { name: "Graphics Design", percent: 85 },
                        ].map((skill, idx) => (
                        <div className={styles["skill-bar"]} key={idx}>
                            <div className={styles["skill-bar-info"]}>
                            <span>{skill.name}</span>
                            <span>{skill.percent}%</span>
                            </div>
                            <div className={styles["skill-bar-progress-bg"]}>
                            <div
                                className={styles["skill-bar-progress-fg"]}
                                style={{ width: `${skill.percent}%` }}
                            />
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className={styles["stats-col"]}>
                        <div className={styles["stats-grid"]}>
                        <div className={styles["stat-item"]}>
                            <strong>5+</strong>
                            <span>Years Experience</span>
                        </div>
                        <div className={styles["stat-item"]}>
                            <strong>1000+</strong>
                            <span>Projects</span>
                        </div>
                        <div className={styles["stat-item"]}>
                            <strong>100+</strong>
                            <span>Clients</span>
                        </div>
                        <div className={styles["stat-item"]}>
                            <strong>10</strong>
                            <span>Awards</span>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                </section>

                {/* --- 4. Video --- */}
                <section className={styles["video-section"]}>
                <div className={`${styles.container} ${styles["text-center"]}`}>
                    <h2 className={styles["section-title"]}>See Our Work in Action</h2>

                    <div className={styles["video-responsive-wrapper"]}>
                    {/* <iframe
                        src="https://www.youtube.com/embed/1T7nvaWJJFM"
                        title="YouTube video"
                        allowFullScreen
                    /> */}
                    <img src="https://res.cloudinary.com/drpcl4uj3/image/upload/v1771427112/Coming_Soon_-_Youtube_Thumbnail_sfuzgw.png" alt="comming soon image" />
                    </div>
                </div>
                </section>

                {/* --- 5. CTA --- */}
                <section className={styles["join-journey-section"]}>
                <div className={`${styles.container} ${styles["text-center"]}`}>
                    <h2 className={styles["section-title"]}>Join Our Journey</h2>
                    <button className={`${styles.btn} ${styles["btn-primary"]}`}>
                    Get In Touch
                    </button>
                </div>
                </section>

            </div>
            </section>
        </>
    );
    };
