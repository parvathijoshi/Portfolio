import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills"
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Education />
      <ExperienceSection />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
