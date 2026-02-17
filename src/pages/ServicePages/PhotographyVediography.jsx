    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import PodcastImg from "../../assets/ServiceSectionImg/Podcast.jpg";
    import SEO from "../../components/SEO";

    export default function PhotographyVediography(){
    return (
        <>
        <SEO
        title="Professional Photography and Videography Services for Businesses"
        description=" Explore professional photography and videography services with SparkWave Digital Media through high-quality visuals, promotional videos and creatives."
        />
        <ServicePageLayout
        title="PHOTOGRAPHY & VEDIO GRAPHY"
        intro={
            <>
            <strong className={styles["wd-highlight-text"]}>
                photography and videography
            </strong>{" "}
            The animating features of photography and videography bring your brand to life with inspiring quality of professional visuals that help build a sense of trust and interaction. We create high-quality and story-based content that is optimised to be used in digital mediums, social media marketing, and attention spans of the modern audience
            </>
        }
        image={PodcastImg}
        strategies={[
            {
            heading: "PLANNING AND STRATEGY",
            items: [
                {
                label: "Goal and Visual requirement planning",
                desc: "Set up specific goals including brand photography, product photography, corporate shoots, promotional videos as well as creation of social media content.",
                },
                {
                label: "Audience and Platform Research",
                desc: "Analyze the target audience behaviour and platforms, such as Instagram, YouTube, LinkedIn, and website traffic, to base on the planning of the effective content.",
                },
                {
                label: "Creative Concept and Storyboarding",
                desc: "Design visual concepts, shot lists, and storyboards that give brand storytelling, short-form videos, reels, and high-engagement visuals that are a priority.",
                },
                {
                label: "Shoot Planning and Execution",
                desc: "Arrange the scenes, lighting, styling, and equipment to produce professional photography and videography with a high-standard of visual quality.",
                },
                {
                label: "Editing and Post‑Production",
                desc: "Improve the graphics with professional photo editing, colour grading, video editing and motion graphics optimised to digital platforms.",
                },
                {
                label: "Content Optimization and Delivery",
                desc: "Finalise social media, websites, advertisement and marketing campaign assets, with consideration to formats and resolutions.",
                },
                {
                label: "Performance Review and Repurposing",
                desc: "Review engagement metrics and repurpose content into reels, shorts, ads, and banners for extended reach and ROI. ",
                },
            ],
            },
        ]}
        />
    </>
    );
    };