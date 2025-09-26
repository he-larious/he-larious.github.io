import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import filmProjects from "../data/filmProjects";
import featuredEdits from "../data/featuredEdits";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Film.css";

function Film() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % featuredEdits.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + featuredEdits.length) % featuredEdits.length);
  };

  return (
    <section id="film-projects" className="film-projects">
      <h2>Film & Creative Media</h2>

      {/* Experience Section */}
      <div className="project-grid">
        {filmProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>

      {/* Showcase Section */}
      <h2 id='featured-edits'>Featured Edits</h2>

      <div className="simple-carousel">
        <button onClick={prevSlide} className="nav-btn">
          <ChevronLeft size={32} strokeWidth={2.5} />
        </button>

        <div className="film-video">
          <iframe
            key={current}                  // ensures iframe reloads on change
            src={featuredEdits[current].url}
            title={featuredEdits[current].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <button onClick={nextSlide} className="nav-btn">
          <ChevronRight size={32} strokeWidth={2.5} />
        </button>
      </div>

      <div className="dots">
        {featuredEdits.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={idx === current ? "dot active" : "dot"}
          />
        ))}
      </div>
    </section>
  );
}

export default Film;
