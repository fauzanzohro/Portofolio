import React, { useState } from "react";
import "./App.css";

import MarqueeText from "./components/textBerjalan";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Hero from "./components/hero";
import TechStack from "./components/techStack";
import ApiSimulator from "./components/apiSimulator";
import Experience from "./components/experience";
import Contact from "./components/contact";
import ProjectModal from "./components/projctModal";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(#CCFF00_1px,transparent_1px)] bg-size-[16px_16px] z-0"></div>

      {/* Ticker Tape */}
      <MarqueeText
        items={[
          "REACT.JS SPECIALIST",
          "EXPRESS.JS BACKEND ARCHITECT",
          "REST API DESIGNER",
          "NO PURPLE ZONE 🚫",
          "AVAILABLE FOR FREELANCE & FULLTIME",
          "BUILDING MODERN WEB APPS",
          "POSTGRESQL & NODE.JS",
        ]}
      />

      {/* Navigation Header */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative z-10 space-y-24">
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Matrix */}
        <TechStack />

        {/* Featured Projects */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-zinc-800 pb-4">
            <div>
              <div className="font-mono text-xs text-[#CCFF00] uppercase tracking-wider mb-1">
                // PORTFOLIO SHOWCASE
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                PROJECT GALLERY (REACT + EXPRESS)
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {["ALL", "FULLSTACK", "BACKEND", "FRONTEND"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 font-mono text-xs uppercase font-bold border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#CCFF00] text-black border-black shadow-[2px_2px_0px_0px_#ffffff]"
                      : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Projects
            selectedCategory={selectedCategory}
            onSelectProject={(project) => setActiveModalProject(project)}
          />
        </section>

        {/* Express API Terminal Simulator */}
        {/* <ApiSimulator /> */}

        {/* Experience & Timeline */}
        <Experience />

        {/* Contact Form */}
        <Contact />
      </main>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
