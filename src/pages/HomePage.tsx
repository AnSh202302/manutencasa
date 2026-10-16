import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import Gallery from "../components/GallerySection";
import Hero from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Services from "../components/ServicesSection";
import ProblemCTASection from "../components/ProblemCTASection";
import AboutSection from "../components/AboutSection";
import FloatingWhatsAppButton from "../components/Buttons/FloatingWhatsAppButton";

function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <ProblemCTASection />
            <HowItWorksSection />
            <AboutSection />
            <FeaturesSection />
            <Gallery />
            <FAQSection />
            <FloatingWhatsAppButton />
        </>
    )
}

export default HomePage
