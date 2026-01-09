import { useState } from "react";
import csProjects from "../data/csProjects";
import "./CSProjects.css";

function CSProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = csProjects[activeIndex] || csProjects[0];

  return (
    <section id="cs-projects" className="cs-preview">
      <div className="preview-layout">
        <div className="preview-hero" role="region" aria-live="polite">
          <div className="preview-hero-body">
            <div className="preview-hero-media">
              {activeProject?.image && (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                />
              )}
            </div>
            <div className="preview-hero-overlay">
              <p className="preview-hero-eyebrow">Now Showing</p>
              <h3>{activeProject?.title}</h3>
              {activeProject?.description && (
                <p className="preview-hero-description">{activeProject.description}</p>
              )}
              {activeProject?.links?.[0] && (
                <a
                  className="preview-hero-button"
                  href={activeProject.links[0].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {activeProject.links[0].label}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="preview-strip">
          <h2>CS Projects</h2>
          <div className="preview-strip-row" aria-label="Project thumbnails">
            {csProjects.map((proj, idx) => (
              <button
                key={`${proj.title}-${idx}`}
                type="button"
                className={`preview-thumb ${idx === activeIndex ? "is-active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                {proj.image && <img src={proj.image} alt={proj.title} />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSProjects;
