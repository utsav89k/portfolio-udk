import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-bg text-white min-h-screen selection:bg-brand-teal selection:text-brand-bg">
      <CustomCursor />
      <Navbar />

      {/* Hero Section with Scrollytelling Sequence */}
      <section className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Portfolio Content */}
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <TechStack />
      
      {/* Footer / Contact */}
      <Contact />
      <Footer />
    </main>
  );
}
