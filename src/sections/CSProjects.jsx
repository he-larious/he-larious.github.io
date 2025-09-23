import ProjectCard from "../components/ProjectCard";
import csProjects from "../data/csProjects";
import "./CSProjects.css";

function CSProjects() {
  return (
    <section id="cs-projects">
      <h2>Computer Science Projects</h2>
      <div className="project-grid">
        {csProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default CSProjects;
