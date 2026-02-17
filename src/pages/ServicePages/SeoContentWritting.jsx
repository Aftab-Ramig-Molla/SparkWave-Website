    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import SeoContentImg from "../../assets/ServiceSectionImg/Seo-Content.jpg";
    import SeoImg from "../../assets/ServiceSectionImg/Seo.jpg"; 
    import ContentImg from "../../assets/ServiceSectionImg/Content.jpg"; 
    import SEO from "../../components/SEO";

    export default function ServicesPage() {
    return (
        <>
        <SEO
        title=" SparkWave Digital Media: SEO and Content Writing Services"
        description="Improve rankings with SEO and content writing services for business growth by SparkWave Digital Media that drives traffic and leads to your websites."
        />
        <ServicePageLayout
            title="WEBSITE SEO & CONTENT WRITING"
            intro={
            <>
                <strong className={styles["wd-highlight-text"]}>
                Website SEO (Search Engine Optimization){" "}
                </strong> <br />
                Website SEO focusing on search visibility, organic reach and ranking stability. Through on-page SEO, technical SEO, key-word optimization, site-speed optimization, mobile optimization as well as interlinking, we enable the ability of the website to rank on high-intent search queries. We target long-tail keywords, local SEO terms, and conversion-focused keywords with a view of generating traffic which has higher chances of being converted into leads and customers.
                <br />
                <strong className={styles["wd-highlight-text"]}>
                Content Writing{" "}
                </strong> <br />
                Traffic is transformed into trust and conversion through content writing. We prepare web copy, SEO-content, blogs, landing-page content and service pages, which are keyword-optimised, purposeful and easy to understand. By implementing search-intent mapping, long-form content planning and conversion-focused copywriting, we help companies to rank higher, get customers to stay longer, and make inquiries, sign ups and sales.

            </>
            }
            image={SeoContentImg}
            
            // Updated to 'strategies' array to support multiple blocks
            strategies={[
            {
                
                heading: "Website SEO Focus Areas",
                //para1: "SEO improves website visibility on search engines like Google, driving organic traffic. It involves:",
                image: SeoImg,
                items: [
                { label: "SEO Goal and Keyword Planning", desc: " Identify business objectives and focus on long-tail keywords, high-intent keywords and local SEO terms with good search volume." },
                { label: "On-Page SEO Optimization", desc: "Optimize meta titles and meta descriptions, headings, URLs, internal and external links and image alt text for increasing rankings." },
                { label: "Technical SEO Setup", desc: "Enhance website speed, mobile responsiveness, Core Web Vitals, indexing, and crawlability." },
                { label: "Website Structure and UX SEO", desc: "Introduce SEO-friendly site architecture, page hierarchy, and navigation for user experience and search engines." },
                { label: "Local and Conversion SEO", desc: "Implement optimization on Google Business Profile, location pages, and conversion paths to attract ready-to-convert users." },
                { label: "SEO Monitoring and Optimization", desc: "Track traffic, rankings and conversions and continuously evaluate strategy for sustainable organic growth." }
                ],
                //para2: "Effective SEO increases visibility, builds credibility, and attracts targeted audiences, boosting conversions and revenue.",
            },
            {
                
                heading: "Content Writing",
                //para1: "Content writing involves creating engaging, relevant, and valuable text to inform, entertain, or persuade a target audience. It includes blogs, articles, website copy, social media posts, product descriptions, and more. Effective content writing focuses on clear communication, proper tone, and audience-specific language. Key elements include thorough research, keyword optimization for SEO, and a compelling structure with attention-grabbing headlines and concise, well-organized paragraphs. High-quality content builds trust, drives traffic, boosts engagement, and supports marketing goals, ultimately converting readers into loyal customers.",
                //subHeading: "Content  Strategy",
                //subPara1: "Content writing offers several advantages, including increased audience engagement, improved SEO rankings, and enhanced brand authority.",
                image: ContentImg,
                items: [
                { label: "Content Research and Search Intent Mapping", desc: "Research search intents trending topics and keyword clusters to plan high-ranking content." },
                { label: "SEO Blog Writing:", desc: "Create informational content, keyword-optimized blogs and long-form articles for increase of organic traffic." },
                { label: "Website and Service Page Content", desc: "Write SEO-friendly website content, service pages, and landing page copy focused on conversions." },
                { label: "Conversion and Brand Copywriting", desc: "Develop About us pages, CTAs, case studies, and marketing copy that builds trust and drives action." },
                { label: "Content Optimization and Updates", desc: "Refresh existing content, improve keyword placement, readability, and internal linking." },
                { label: "Performance Tracking and Scaling", desc: "Monitor rankings, engagement, and leads. Scale high-performing SEO content strategies." }
                ],
                //para2: "Additionally, it is a cost-effective marketing strategy with long-term benefits and promotes social sharing, boosting overall visibility and reach.",
            }
            ]}
        />
        </>
    );
    }