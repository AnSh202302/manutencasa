import About from "./components/AboutSection";
import Contact from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Gallery from "./components/GallerySection";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Services from "./components/ServicesSection";
import ProblemCTASection from "./components/ProblemCTASection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ProblemCTASection/>
        <About />
        <FeaturesSection />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}

export default App;
