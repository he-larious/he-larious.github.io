import ProjectCard from "../components/ProjectCard";
import creativeProjects from "../data/creativeProjects";
import "./CreativeProjects.css";

function CreativeProjects() {
  return (
    <section id="creative-projects" className="creative-projects">
      <h2>Creative Projects</h2>
      <div className="project-grid">
        {creativeProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>

      <h2 id="blender">Featured Blender Projects</h2>
      <div className="blender-grid">
        <div className="blender-item">
          <h3>Bowser's Castle</h3>
          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Bowser's Castle"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://sketchfab.com/models/3610c2690d0a475d95a4ebd900a7c9b1/embed"
            ></iframe>
          </div>
        </div>

        <div className="blender-item">
          <h3>Nintendo Switch Controller</h3>
          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Nintendo Switch Controller"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://sketchfab.com/models/2d59b06407c642919818f42fdc151989/embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeProjects;
