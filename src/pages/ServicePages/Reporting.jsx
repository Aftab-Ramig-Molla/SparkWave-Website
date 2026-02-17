    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import ReportingImg from "../../assets/ServiceSectionImg/report.jpg";
    import SEO from "../../components/SEO";

    export default function Reporting(){
    return (
        <>
        <SEO
        title="Digital Marketing Reporting Services for Business Growth"
        description=" In marketing analytics and data insights services, we track performance, analyze data, measure ROI, and deliver actionable insights to improve strategy."
        />
        <ServicePageLayout
        title="REPORTING SERVICES"
        intro={
            <>
            <strong className={styles["wd-highlight-text"]}>
                Reporting
            </strong>{" "}
            We offer digital marketing reporting services which offer clear data-driven insights to help businesses track the performance, measure ROI, and implement more informed decisions. We convert complex data into growth-oriented insights through custom marketing performance reports, real-time analytics dashboards, and actionable KPI tracking. Campaign analysis to audience behaviour report, we ensure all levels of transparency and quantifiable development on the entire digital channels.
            </>
        }
        image={ReportingImg}
        strategies={[
            {
            heading: "REPORTING STRATEGY",
            items: [
                {
                label: "Performance Metrics Tracking",
                desc: "Track critical KPIs such as traffic, engagements, and conversions as well as ROI using advanced performance reporting tools.",
                },
                {
                label: "Analytics and Dashboards Reports",
                desc: " Permission to custom analytics dashboards that work with visual charts in order to have a clear picture of trends and growth patterns.",
                },
                {
                label: "Campaign Performance Reports",
                desc: "The effectiveness of such Deliverables as paid advertisements, social programs, and SEO efforts may be measured by ROI analysis.",
                },
                {
                label: "User and  Audience Insights",
                desc: "Gather deep insights into customer behavior, customer journeys, and engagement metrics to improvise strategies.",
                },
                {
                label: "Actionable Recommendations",
                desc: " Get data-backed optimization suggestions to optimize campaigns and make them more efficient.",
                },
            ],
            },
        ]}
        />
    </>
    );
    };
