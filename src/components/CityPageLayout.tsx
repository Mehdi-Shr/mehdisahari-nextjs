"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Urgency from "@/components/Urgency";
import Pains from "@/components/Pains";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import WorkflowSection from "@/components/WorkflowSection";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function CityPageLayout({ city }: { city: string }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero city={city} />
        <Urgency />
        <Pains />
        <Services />
        <Metrics />
        <WorkflowSection />
        <TechStack />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer location={city} />
    </>
  );
}
