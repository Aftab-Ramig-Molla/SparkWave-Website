import { AboutCompanySection } from "../components/ui/AboutCompanySection";
import { GrowthSection } from "../components/ui/GrowthSection";
import { HeroSection } from "../components/ui/HeroSection"
import { PortfolioSection } from "../components/ui/PortfolioSection";
import { ServiceOverview } from "../components/ui/ServiceOverview";
import {Testimonials} from "../components/ui/Testimonials";
import { TrustExpertiseSection } from "../components/ui/TrustExpertiseSection";
import { ExpertTeam } from "../components/ui/ExpertTeam";
import { FAQSection } from "../components/ui/FAQSection";
import SEO from "../components/SEO";

export const Home = () => {
    return (
        <>
        <SEO
            title="SparkWave Digital Media: Best Digital Marketing Agency in Kolkata"
            description="SparkWave Digital Media, best website development agency in Kolkata, helps to increase traffic with creative designs and SEO strategies. Learn More."
        />
            <HeroSection />
            <ServiceOverview />
            <GrowthSection />
            <AboutCompanySection />
            <PortfolioSection/>
            <TrustExpertiseSection />
            <Testimonials />
            <ExpertTeam />
            <FAQSection />
        </>
    )
}