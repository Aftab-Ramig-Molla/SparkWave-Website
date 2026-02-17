    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import LeadsGenImg from "../../assets/ServiceSectionImg/LeadGenerate.jpg";
    import SEO from "../../components/SEO";

    export default function LeadsGenaration() {
    return (
        <>
            <SEO
                title="Boost Conversion and growth with the Best Lead Generation Agency"
                description="Drive conversion and growth with best lead generation techniques of SparkWave. Learn more and grow your business with SparkWave's proven strategies. "
            />
            <ServicePageLayout
            title="LEADS GENERATION"
            intro={
                <>
                <strong className={styles["wd-highlight-text"]}>Leads Generation</strong>{" "}
                Looking to turn interest into real business opportunities? Lead generation assists in attracting and transforming high-quality intent-driven prospects into potential customers. Our approach is to use data-driven methods of generating leads, paid advertising, landing pages, and funnels to drive quantifiable, long-term business growth.
                </>
            }
            image={LeadsGenImg}
            strategies={[
                {
                heading: "Planning and Strategy",
                items: [
                    {
                    label: "Goal and Funnel Definition",
                    desc: "Identify explicit lead generation targets in terms of inquiries, bookings, sign-ups, or sales which are linked to top, middle and bottom-of-funnel steps.",
                    },
                    {
                    label: "Audience/ Buyer Persona Research",
                    desc: "The demographics, behavior, intent signals, and pain points are used to identify the ideal customers to attract high-quality leads.",
                    },
                    {
                    label: "Traffic Source Planning",
                    desc: "Target a variety of channels such as SEO, social media, paid advertising, search on Google, YouTube, and email marketing.",
                    },
                    {
                    label: "Content and Offer Strategy",
                    desc: "Produce lead magnets like free guides, consultations, demos, webinars, and downloads to receive information of users.",
                    },
                    {
                    label: "Conversion Optimization and Landing Page",
                    desc: "Create conversion-focused landing pages, high CTAs, high load speed and form optimization which will lead to high lead capture rates.",
                    },
                    {
                    label: "Paid Campaigns to Lead Generation.",
                    desc: "Use Google Ads, meta ads, LinkedIn ads and retargeting campaigns to target high intent users who are actively searching to find solutions.",
                    },
                    {
                    label: "Inbound and Organic Lead Generation",
                    desc: "Attract regular organic leads through the use of SEO-optimized content, blogs, videos, reels, and social media.",
                    },
                    {
                    label: "Outbound and Direct Outreach",
                    desc: "Use email outreach, Linked intreach, and cold intreach to target acquisition of B2B leads.",
                    },
                    {
                    label: "Lead Qualification and Nurturing",
                    desc: "Filter, score, and nurture uses email sequences and CRM workflows, and remarketing to enhance conversion rates.",
                    },
                    {
                    label: "Tracking, Optimization and Scaling",
                    desc: "Monitor CPL, conversion rates and ROI. Scale profitable lead generation campaigns.",
                    },
                ],
                },
            ]}
            />
    </>
    );
    };
