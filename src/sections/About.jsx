import "./About.css";
import education from "../data/education";
import experience from "../data/experience";
import skills from "../data/skills";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      {/* Intro */}
      <p className="intro">
        I'm Helena He, a recent Computer Science graduate from Columbia University 
        who loves bringing together creativity and technology. I enjoy tackling complex, 
        real-world problems through code while also exploring storytelling 
        through film editing, Blender modeling, and interactive media projects. 
        For me, building software and creating art are two sides of the same coin.
      </p>

        {/* Education */}
        <h3>Education</h3>
        <div className="about-grid">
            {education.map((edu, idx) => (
                <div key={idx} className="about-card">
                    <div className="about-card-logo">
                        <img src={edu.logo} alt={`${edu.school} logo`} />
                    </div>
                    <div className="about-card-content">
                        <div className="about-card-header">
                        <h4>{edu.school}</h4>
                        <span className="date">{edu.date}</span>
                        </div>
                        <p>{edu.degree}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Experience */}
        <h3>Experience</h3>
        <div className="about-grid">
            {experience.map((exp, idx) => (
                <div key={idx} className="about-card">
                    <div className="about-card-logo">
                        <img src={exp.logo} alt={`${exp.company} logo`} />
                    </div>
                    <div className="about-card-content">
                        <div className="about-card-header">
                            <h4>{exp.company}</h4>
                            <span className="date">{exp.date}</span>
                        </div>
                        <p><strong>{exp.role}</strong></p>
                        <p>{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Skills */}
        <h3>Skills</h3>
        <div className="skills-grid">
            {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="skill-category">
                    <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                    <div className="skill-pills">
                        {items.map((skill, i) => (
                            <span key={i} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default About;
