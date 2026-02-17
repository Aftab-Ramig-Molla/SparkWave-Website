    import styles from './AllServices.module.css';
    import ServiceImage1 from "../../assets/ServiceSectionImg/serviceimg.jpg";
    // Service data - easy to add, remove, or change services here
    import { FaShareAlt, FaPhotoVideo, FaUserPlus, FaPenNib, FaLaptopCode, FaPodcast  } from "react-icons/fa";
    import { MdOutlineCampaign, MdAnalytics, MdOutlineReport } from "react-icons/md";
    import { HiArrowRight } from "react-icons/hi";
    import { NavLink } from "react-router-dom";

    import SEO from "../../components/SEO";

    const servicesData = [
    {
        icon: <FaShareAlt />,
        title: 'SOCIAL MEDIA HANDLING (ORGANIC)',
        description: 'Managing and growing social media presence organically by creating high-engagement content, actively interacting with followers, and improving brand visibility. ',
        link: '/services/social-media-handling',
    },
    {
        icon: <MdOutlineCampaign />,
        title: 'ADS / PAID MARKETING',
        description: 'Scaling business growth through paid digital marketing, by running targeted Google Ads, Facebook Ads, and Instagram ad campaigns to reach the right audience and generate high-quality leads.',
        link: '/services/ads-paid-marketing',
    },
    {
        icon: <FaPhotoVideo />,
        title: ' GRAPHICS CREATION ',
        description: 'Delivering impactful brand visuals through creative graphic design services, including logo design, social media creatives, marketing banners, ad designs, thumbnails, posters, and brand identity graphics.',
        link: '/services/graphics-creation',
    },
    {
        icon: <FaPhotoVideo />,
        title: 'VIDEO MARKETING & EDITING',
        description: 'Driving engagement through video marketing and professional video editing, including social media reels, promotional videos, ad creatives, YouTube video editing, and brand storytelling content.',
        link: '/services/photography-vediography',
    },
    {
        icon: <FaUserPlus />,
        title: 'LEADS GENARATION ',
        description: 'Generating high-quality business opportunities through lead generation services, using targeted digital marketing strategies, optimized ad campaigns, landing pages, and conversion-focused funnels.',
        link: '/services/leads-genaration',
    },
    {
        icon: <FaLaptopCode />,
        title: 'WEBSITE DEVELOPMENT',
        description: 'Building fast, responsive, and conversion-focused websites through professional website development services, including business websites, landing pages, and custom web solutions.',
        link:'/services/web-development',
    },
    {
        icon: <FaPodcast  />,
        title: 'PHOTOGRAPHY & VEDIO GRAPHY',
        description: 'Creating compelling visual stories through professional photography and video editing services, including brand shoots, product photography promotional videos, and post-production editing.',
        link:'/services/photography-vediography',
    },
    {
        icon: <FaPenNib  />,
        title: 'SEO & CONTENT WRITTING',
        description: 'Driving organic growth through SEO and content writing services, including on-page SEO, keyword research, website optimization, blog writing, and search-engine-friendly content.',
        link: '/services/seo-content-writting',
    },
    {
        icon: <MdAnalytics />,
        title: 'ANALYTICS AND DATA ANALYSIS',
        description: 'Empowering smarter marketing decisions through analytics and data insights services, including website analytics, campaign performance tracking, user behavior analysis, and conversion reporting.',
        link: '/services/analytics-and-data',
    },
    {
        icon: <MdOutlineReport />,
        title: 'REPORTING SERVICES',
        description: 'Delivering clarity and transparency through performance reports, campaign insights, KPI tracking, ROI analysis, and data-driven summaries.',
        link: '/services/reporting',
    },
    ];

    export const AllServices = () => {
    return (
        <>
            <SEO
                title="Full-Service Digital Marketing Agency for Business Growth"
                description="We are a full-service digital marketing agency offering SEO, paid ads, social media, website development and lead generation services for business growth."
            />


            <section className={styles['servicesSection']}>
            <div className={styles['container']}>
                <div
                    className={styles['services-banner']}
                    style={{ backgroundImage: `url(${ServiceImage1})` }}
                >
                    <div className={styles['overlay']}>
                        <div className={styles['banner-content']}>
                            <h1 className={styles['banner-heading']}>OUR SERVICES</h1>
                            <nav className={styles['breadcrumb']}>
                                <a href="/">Home</a> &gt; <span>Our Services</span>
                            </nav>
                        </div>
                    </div>
                </div>
            <div className={styles['services-header']}>
            <span className={styles['services-subheading']}>Features Services</span>
            <h2 className={styles['services-heading']}>
                Our All Services
            </h2>
            </div>
            
            <div className={styles['services-grid']}>
            {servicesData.map((service, index) => (
                <div className={styles['service-card']} key={index}>
                <div className={styles['service-icon']}>
                    {service.icon}
                </div>
                <h3 className={styles['service-title']}>{service.title}</h3>
                <p className={styles['service-description']}>{service.description}</p>
                <NavLink to={service.link} className={styles['service-link']}>
                    <HiArrowRight />
                </NavLink>
                </div>
            ))}
            </div>


            {/* NEW: Orange CTA Section (Exactly like your image) */}
            <div className={styles.orangeCtaSection}>
            <div className={styles.orangeCtaContent}>
                <h2 className={styles.orangeCtaHeading}>
                Start growing today — book your free strategy call 
                </h2>
                <a href="/contact" className={styles.orangeCtaButton}>
                CONTACT WITH US
                </a>
            </div>
            </div>
        </div>
        </section>
    </>
    
    );
    };

