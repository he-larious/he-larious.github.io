import ProjectCard from "../components/ProjectCard";
import filmProjects from "../data/filmProjects";
import featuredEdits from "../data/featuredEdits";
import Slider from "react-slick";
import "./Film.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Film() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,   // one video at a time
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,   // set to true if you want auto scroll
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
      <Slider {...settings} className="film-carousel">
        {featuredEdits.map((edit, idx) => (
            <div key={idx} className="film-slide">
            <div className="film-video">
                <iframe
                src={edit.url}
                title={edit.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                />
            </div>
            </div>
        ))}
      </Slider>
    </section>
  );
}

export default Film;
