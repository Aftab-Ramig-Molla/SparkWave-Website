    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import AnalyticsDataImg from "../../assets/ServiceSectionImg/DataAnalysis.jpg";
    import SEO from "../../components/SEO";
    
    export default function AnalyticsData() {
    return (
        <>
        <SEO
        title=" Marketing Analytics and Data Insights Services for Growth"
        description=" In marketing analytics and data insights services, we track performance, analyze data, measure ROI, and deliver actionable insights to improve strategy."
        />

        <ServicePageLayout
        title="ANALYTICS & DATA INSIGHTS"
        intro={
            <>
            <strong className={styles["wd-highlight-text"]}>
                Analytics & Data
            </strong>{" "}
            The analytics and data insights enable businesses to achieve informed decision-making through converting raw data into actionable intelligence. Web analytics, customer journey tracking, and marketing performance analysis allows brands to have a profound understanding of traffic patterns, customer journeys, and conversion patterns. Through data-driven marketing tactics, real time performance monitoring and custom analytics dashboards, businesses can streamline campaigns, increase ROI, boost user experience in addition to sustainability and long-term development in the lens of measurable insights. 
            </>
        }
        image={AnalyticsDataImg}
        strategies={[
            {
            heading: " PLANNING AND STRATEGY",
            items: [
                {
                label: "Purpose",
                desc: " Use marketing and web data to create an actionable insight that will lead to an increase in performance, conversions, and ROI.",
                },
                {
                label: "Data Sources",
                desc: "Combine Google Analytics (GA4), web tracking applications, CRMs, and social media analytics, and ad platform insights to have a full picture of performance.",
                },
                {
                label: "Audience and Behavior Analysis",
                desc: " Examine user performance tracking, session analysis, engagement, and visitor paths to learn how the visitors use the digital assets.",
                },
                {
                label: "Key Metrics Focus",
                desc: "Keep track of traffic sources, bounced, conversion, user retention, ROI of a campaign, and funnel performance to find out areas of growth.",
                },
                {
                label: "Tools and Technology",
                desc: "Using advanced analytics tools, realtime tracking software, automation tools, and custom analytics dashboards.",
                },
                {
                label: "Optimization Strategy",
                desc: "Use the power of data-driven optimisation strategies, A/B testing and performance insights to continuously optimize the marketing work and further the performance.",
                },
                {
                label: "Outcome",
                desc: "Bring measurable growth, increase conversion rate optimization, smarter marketing investments, and long-term success.",
                },
            ],
            },
        ]}
        />
        </>
    );
    };
