    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import SMMImage from "../../assets/ServiceSectionImg/SocialMediaMarketing.jpg";
    import SEO from "../../components/SEO";

    export default function AdsPaidMarketing() {
    return (
        <>
            <SEO
                title="Boost reach with best Paid Marketing Services"
                description="SparkWave Solutions offers best paid marketing services with proven techniques that can increase your online presence and drive more traffic and conversions."
            />
        <ServicePageLayout
        title="ADS / PAID MARKETING"
        intro={
            <>
            <strong className={styles["wd-highlight-text"]}>
                Ads or Paid Marketing
            </strong>{" "}
            focuses on reaching a precise target audience at the right time through targeted digital advertising. Paid campaigns help businesses gain instant online visibility, generate high-quality leads, and drive sales quickly using platforms like Google Ads, Facebook Ads, and Instagram Ads. With smart budget allocation, continuous campaign optimization, and performance tracking, paid marketing turns clicks into measurable business results and scalable growth.
            </>
        }
        image={SMMImage}
        strategies={[
            {
            heading: "Planning and Strategy",
            items: [
                {
                label: "Goal Setting",
                desc: "Establish clear advertising goals, e.g. lead generation, sales, website traffic, and brand awareness, to develop a results-oriented and focused paid marketing strategy.",
                },
                {
                label: "Platform Selection",
                desc: "Choose the most efficient platforms, Google ads, Facebook ads, Instagram ads, and LinkedIn ads, depending on the behavior of the audience, its search motivation, and business goals.",
                },
                {
                label: "Audience Targeting",
                desc: "Make use of high-end targeting methods through the use of demographics, interests, keywords, search intent, and retargeting to target high-quality and conversion-ready audiences.",
                },
                {
                label: "Ad Creative & Messaging",
                desc: "Create ad creatives that perform and write compelling copy that elicits attention and establishes clicks and conversions.",
                },
                {
                label: "Budget and Bidding Strategy",
                desc: "Formulate budgets in a strategic manner and maximize bidding strategies to maximize the ROI and yet controlled spending on Ads.",
                },
                {
                label: "Landing Page Optimization",
                desc: "Maximize the landing pages in terms of speed, relevance and conversion rate to maximize overall performance of the ad.",
                },
                {
                label: "Performance Tracking & Optimization",
                desc: "On a continuous basis, track metrics, do A/B tests and optimize campaigns to minimize wasted money and improve performance.",
                },
                {
                label: "Outcome",
                desc: "Create a steady stream of leads, increase conversions, maximize ads spend and quantifiable business growth by doing paid advertising.",
                },
            ],
            },
        ]}
        />
    </>
    );
    }
