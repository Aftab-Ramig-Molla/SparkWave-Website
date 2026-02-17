    import ServicePageLayout from "./ServicePageLayout";
    import styles from "./ServicePageLayout.module.css";
    import GraphicsImg from "../../assets/ServiceSectionImg/GraphicsCreation.jpg";
    import SEO from "../../components/SEO";

    
    export default  function GraphicsCreation() {
    return (
        <>
            <SEO
                title="Best Graphics Design Services | Increase Brand’s Visual Appeal"
                description="SparkWave elevates your brand's visual appeal with stunning graphics design services. Now, stand out from the crowd and increase your online presence."
            />
            <ServicePageLayout
            title="GRAPHICS DESIGN"
            intro={
                <>
                <strong className={styles["wd-highlight-text"]}>Graphics Design</strong>{" "}
                gives the brand a visual base. It turns ideas into powerful and impactful visuals that help to deliver essential messages, brand identity, and influence audiences. 
                Whether it is social media posts and ad creatives or brand assets and marketing images, good design is what helps a business to stand out and be memorable. Our designs are clean, modern, contemporary, purpose-driven, and targeted.
                </>
            }
            image={GraphicsImg}
            strategies={[
                {
                heading: "CREATIVE DESIGN PROCESS",
                items: [
                    {
                    label: "Discovery and Design Planning  ",
                    desc: "We will start by understanding your brand goals, target market and design requirements so that we can develop a defined graphic design strategy that meets your business requirements.",
                    },
                    {
                    label: "Research and Visual Direction ",
                    desc: "We examine industry trends, competitors' designs and audience choices so that we have come up with strong visual branding direction names that stand relevant.",
                    },
                    {
                    label: "Concept Development ",
                    desc: "According to insights, we compile design concepts that underline brand identity, layout structure, colour psychology, and typography so that they produce the best visual effect.",
                    },
                    {
                    label: "Design Execution ",
                    desc: "Our clean, modern, and conversion-based social-media creatives, marketing graphics, advertising, and branding assets take place. ",
                    },
                    {
                    label: "Review and Optimisation ",
                    desc: "Refinements to enhance the design element include feedback and considerations related to performance to refine the design in order to increase its engagement, clarity and brand consistency. ",
                    },
                    {
                    label: "Final Delivery",
                    desc: "Our professional graphic-design service includes the supply of high-resolution, web-optimised, and print-ready files, which can be used at once.",
                    },
                ],
                },
            ]}
            />
            
        </>
    );
    };
