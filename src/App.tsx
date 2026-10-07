import FAQSection from "./components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
// import Gallery from "./components/GallerySection";  
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Services from "./components/ServicesSection";
import ProblemCTASection from "./components/ProblemCTASection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ContactLink from "./components/CustomLink/ContactLink";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ProblemCTASection />
        <HowItWorksSection />
        <AboutSection />
        <FeaturesSection />
        {/* <Gallery /> */}
        <FAQSection />
        <ContactLink cta="whatsapp" aria-label="Contattaci su WhatsApp" position="fixed"
          right={4}
          bottom={4}
          zIndex={1100}
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          justifyContent="center"
          w="56px"
          h="56px"
          borderRadius="full"
          bg="brand.primary" color="white"
          fontSize="30px"
          boxShadow="md"
          _hover={{ bg: "#20bd5a", textDecoration: "none" }}
          _focusVisible={{ outline: "2px solid", outlineColor: "brand.primary", outlineOffset: "2px" }}

        > </ContactLink>
      </main>
      <Footer />
    </>
  );
}

export default App;
