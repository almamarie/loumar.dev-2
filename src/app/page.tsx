import About from "@/components/modules/about/About";
import Achievements from "@/components/modules/achievements/Achievements";
import Certificates from "@/components/modules/certificates/Certificates";
import Contact from "@/components/modules/contact/Contact";
import Footer from "@/components/modules/footer/Footer";
import Hero from "@/components/modules/hero/Hero";
import Jobs from "@/components/modules/jobs/Jobs";
import Projects from "@/components/modules/projects/Projects";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
