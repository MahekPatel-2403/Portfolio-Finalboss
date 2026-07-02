import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <OpenSource />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
