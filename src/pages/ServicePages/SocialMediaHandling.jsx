import React from "react";
import ServicePageLayout from "./ServicePageLayout";
import styles from "./ServicePageLayout.module.css";
import SocialMediaHandlingImg from "../../assets/ServiceSectionImg/SocialMediaHandling.jpg";
import SEO from "../../components/SEO";


    export default function SocialMediaHandling() {
    return (
        <>
            <SEO
                title="Organic Social Media Management - SparkWave Digital Media"
                description=" Our organic social media management services will take you to the next level helping you grow organically with achieving maximum impact and growth."
            />
        <ServicePageLayout
        title="SOCIAL MEDIA HANDLING (Organic)"
        intro={
            <>
            <strong className={styles["wd-highlight-text"]}>
                Organic Social Media Handling
            </strong>{" "}
            is about developing an authentic and strong brand presence without paid marketing. At SparkWave, we optimize your social media channels by creating strategic content planning, consistent content posting and interactive audience engagement approaches to fetch organic growth. Platform-specific strategies are mapped for creative storytelling, and data-driven insights. Our commitment is highly implied on your social media platforms to attract followers and turn them into loyal communities—helping your brand grow steadily and sturdily.
            </>
        }
        image={SocialMediaHandlingImg}
        
        /* === FIXED: Wrapped in the new strategies array format === */
        strategies={[
            {
            heading: "Planning & Strategy – Organic Social Media Handling",
            items: [
                {
                label: "Objective",
                desc: "Build a strong organic social media presence, escalate brand awareness and bring consistent engagement and community growth organically.",
                },
                {
                label: "Platform Selection",
                desc: "Select the appropriate platform - Facebook, Instagram, LinkedIn, or X—based on brand industry, industry, and business objectives.",
                },
                {
                label: "Audience Research",
                desc: " Research on audience behaviors with understanding their behaviours, interests and pain points to understand targeted customers.",
                },
                {
                label: "Content Strategy",
                desc: "Prepare a structured content calendar for high quality contents for posts, reels, stories and carousels aimed on value, brand voice and storytelling.",
                },
                {
                label: "Engagement and Community Building",
                desc: "Actively responding to audiences’s messages, comments and interactions to build loyalty, trust and long-term relationships.",
                },
                {
                label: "Analytics & Optimization",
                desc: "Use social media analytics to track performance and continuous optimization of content for effective engagement and growth.",
                },
                {
                label: "Outcome",
                desc: "Sustainable organic growth, improved brand visibility, and a loyal social media community that supports long-term business success.",
                },
            ],
            },
        ]}
        />
    </>
    );
    }