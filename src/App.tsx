import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Companies from "./components/Companies";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        {/* Full Image Banner */}
        <div className="w-full relative z-10 bg-[#080808]">
          <img
            src="/images/ChatGPT Image Sep 10, 2026, 02_50_52 PM.png"
            alt="Banner"
            className="w-full h-[35vh] sm:h-auto min-h-[20px] max-h-[80vh] object-cover object-[25%_top] block"
          />
        </div>
        <Companies />
        <Showreel />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
