import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatISolve from "@/components/WhatISolve";
import HowIWork from "@/components/HowIWork";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatISolve />
        <HowIWork />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <FloatingCTA />
      <Footer />
    </>
  );
}
