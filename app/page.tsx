import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="page">
                <Intro />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
