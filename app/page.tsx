import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white overflow-hidden">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow flex flex-col">
        {/* Home/Hero Landing */}
        <Hero />

        {/* About Info & Specialization */}
        <About />

        {/* Technical Competencies Grid */}
        <Skills />

        {/* Showcased Projects Grid */}
        <Projects />

        {/* Experience, Education & Certs Timeline */}
        <Experience />

        {/* Contact Form Details */}
        <Contact />
      </main>

      {/* Socials & Footnotes Footer */}
      <Footer />
    </div>
  );
}
