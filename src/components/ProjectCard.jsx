import "./ProjectCard.css";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

function ProjectCard({ title, description, image, links = [] }) {
  const iconMap = {
    "YouTube": FaYoutube,
    "Instagram": FaInstagram,
    "TikTok": FaTiktok
  };

  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="project-links">
          {links.map((link, idx) => {
            const Icon = iconMap[link.label];      // pick icon based on label
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
              >
                {Icon ? <Icon size={24} /> : link.label}  {/* fallback to text if no icon */}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
