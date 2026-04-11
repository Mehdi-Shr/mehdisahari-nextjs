import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Urgency from "@/components/Urgency";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Urgency />
        <Services />
        <TechStack />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
