import ProjectGallery from "../components/ProjectGallery";
import csProjects from "../data/csProjects";

function CSProjects() {
  return <ProjectGallery title="CS Projects" items={csProjects} />;
}

export default CSProjects;
