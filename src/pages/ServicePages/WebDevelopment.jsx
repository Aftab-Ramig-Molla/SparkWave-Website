import ServicePageLayout from "./ServicePageLayout";
import styles from "./ServicePageLayout.module.css";
import WebDevImg from "../../assets/ServiceSectionImg/WebSiteDevelopment.jpg";
import SEO from "../../components/SEO";

export default function WebDevelopment() {
  return (
    <>
      <SEO
      title="SparkWave Digital Media: Best Website Development Agency"
      description="SparkWave Digital Media, best website development agency, helps to increase traffic with custom designs and SEO strategies. Learn More"
      />
      <ServicePageLayout
      title="WEBSITE DEVELOPMENT"
      intro={
        <>
          <strong className={styles["wd-highlight-text"]}>
            Website development
          </strong>{" "}
          The website is the brand's digital foundation. Website development is aimed at developing fast, responsive and conversion oriented websites that enhance user experience and business outcomes. We create SEO-friendly, mobile-friendly websites that captivate traffic, appeal to users, and deliver visitors as leads and customers, whether based on business websites and landing pages or on full-scale website development.
        </>
      }
      image={WebDevImg}
      
      /* === UPDATED: Wrapped in the new 'strategies' array format === */
      strategies={[
        {
          heading: "PLANNING & STRATEGY",
          items: [
            {
              label: "Requirement and Goal Analysis",
              desc: "Know business objectives, target market and purpose of a site such as lead generation, sales or brand visibility.",
            },
            {
              label: "UX/UI Planning",
              desc: "Develop user experience and interface layouts focusing on clarity, navigation and engagement.",
            },
            {
              label: "Technology/ Platform Choice",
              desc: "Select the appropriate stack Wordpress, custom development, CMS, or landing page builders depending on the performance and scalability.",
            },
            {
              label: "SEO-Friendly Development",
              desc: "Apply on-page SEO, clean code, high page loading speed and mobile friendliness.",
            },
            {
              label: "Content & Conversion Mapping",
              desc: "Organize pages, call to action and funnels to facilitate website conversion optimization.",
            },
            {
              label: "Testing, Launch and Optimization",
              desc: "Preliminary test performance, security and usability. Always improve speed, search optimization and more.",
            },
          ],
        },
      ]}
    />
    </>
  );
}