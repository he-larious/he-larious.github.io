import ProjectGallery from "../components/ProjectGallery";
import filmProjects from "../data/filmProjects";
import featuredEdits from "../data/featuredEdits";

function Film() {
  const filmRows = [
    {
      title: "Creative Media",
      items: filmProjects,
    },
    {
      title: "Featured Edits",
      items: featuredEdits.map((edit) => ({
        title: edit.title,
        embedUrl: edit.url,
      })),
    },
  ];

  return <ProjectGallery title="Film & Creative Media" rows={filmRows} />;
}

export default Film;
