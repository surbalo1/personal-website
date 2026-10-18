import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Focus from "@/components/Focus";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Focus />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
