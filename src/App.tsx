import FAQSection from "./components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
import Gallery from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Services from "./components/ServicesSection";
import ProblemCTASection from "./components/ProblemCTASection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ProblemCTASection/>
        <HowItWorksSection />
        <AboutSection />
        <FeaturesSection />
        <Gallery />
        <FAQSection />
      </main>
        <Footer />
    </>
  );
}

export default App;
