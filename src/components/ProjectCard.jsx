import "./ProjectCard.css";

function ProjectCard({ title, description, image, links = [] }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
