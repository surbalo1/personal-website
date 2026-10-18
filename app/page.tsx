import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Flow from "@/components/Flow";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Toolbox from "@/components/Toolbox";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Flow />
                <Journey />
                <Projects />
                <Toolbox />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
