    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import VideoMarketingImg from "../../assets/ServiceSectionImg/VideoMarketing.jpg";
    import SEO from "../../components/SEO";
    
    export default function VideoMarketing(){
    return (
        <>
            <SEO
                title="Best Video Marketing Services | Increase Your Online Presence"
                description="Drive traffic and conversions to your business with best video marketing services by SparkWave Solutions and increase your online presence."
            />
            <ServicePageLayout
            title="VIDEO MARKETING"
            intro={
                <>
                <strong className={styles["wd-highlight-text"]}>Video Marketing</strong>{" "}
                helps brands to capture attention, share stories and drive action by captivating visual content. Whether it is social media videos, ad developers, brand video, and reels, strategic video marketing enhances reach, adds engagement, and conversions. 
                </>
            }
            image={VideoMarketingImg}
            strategies={[
                {
                heading: "Planning and Strategy",
                items: [
                    {
                    label: "Goal and Funnel Planning",
                    desc: "Goals Experts aim to drive through video marketing specific goals: brand awareness, lead, response, or conversion, according to your sales funnel and business objectives.",
                    },
                    {
                    label: "Platform and Format Strategy",
                    desc: "Use the suitable platforms, such as YouTube, Instagram Reels, Facebook, LinkedIn, Shorts, and select the video formats and behavior of the audience, intending to search.",
                    },
                    {
                    label: "Messaging and Audience Research",
                    desc: "Identify audience interests, pain points and viewing habits to develop relevant and high retention video content that proves to be relatable and converts. Content Strategy/Storytelling Strategy Develop brand video ideas, scripts, and storylines of brand videos, social media videos, advertisements, and explainer contents.",
                    },
                    {
                    label: "Production and editing approach",
                    desc: "Produce videos of high-quality and platform-optimized content along with high hooks, pacing, captions, and visual clarity.",
                    },
                    {
                    label: "Distribution and Optimization",
                    desc: "Add SEO titles, descriptions, hashtags, thumbnails, and CTAs to optimize videos in order to make them more reachable, watched, and engaged.",
                    },
                    {
                    label: "Performance Monitoring and Appraisals",
                    desc: "Retention, conversions, clicks, and track views. Keep on optimizing and scaling the high performing video marketing campaigns.",
                    },
                ],
                },
            ]}
            />

        </>
    );
    };
