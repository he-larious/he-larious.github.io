import ProjectGallery from "../components/ProjectGallery";
import creativeProjects from "../data/creativeProjects";
import blenderProjects from "../data/blenderProjects";

function CreativeProjects() {
  return (
    <ProjectGallery
      rows={[
        { title: "Creative Projects", items: creativeProjects },
        { title: "Blender Projects", items: blenderProjects },
      ]}
    />
  );
}

export default CreativeProjects;
