import "./About.css";
import education from "../data/education";
import experience from "../data/experience";
import skills from "../data/skills";

function AboutCard({ logo, alt, heading, date, children }) {
  return (
    <div className="about-card">
      <div className="about-card-logo">
        <img src={logo} alt={alt} />
      </div>
      <div className="about-card-content">
        <div className="about-card-header">
          <h4>{heading}</h4>
          <span className="date">{date}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <header className="about-hero">
        <h1>Helena He</h1>
        <p>CS • Film • Creative Technology</p>
      </header>

      <h2>About Me</h2>

      <p className="intro">
        I'm Helena He, a recent Computer Science graduate from Columbia University
        who loves bringing together creativity and technology. I enjoy tackling complex,
        real-world problems through code while also exploring storytelling
        through film editing, Blender modeling, and interactive media projects.
        For me, building software and creating art are two sides of the same coin.
      </p>

      <h3>Education</h3>
      <div className="about-grid">
        {education.map((edu) => (
          <AboutCard
            key={`${edu.school}-${edu.date}`}
            logo={edu.logo}
            alt={`${edu.school} logo`}
            heading={edu.school}
            date={edu.date}
          >
            <p>{edu.degree}</p>
          </AboutCard>
        ))}
      </div>

      <h3>Experience</h3>
      <div className="about-grid">
        {experience.map((exp) => (
          <AboutCard
            key={`${exp.company}-${exp.date}`}
            logo={exp.logo}
            alt={`${exp.company} logo`}
            heading={exp.company}
            date={exp.date}
          >
            <p><strong>{exp.role}</strong></p>
            <p>{exp.description}</p>
          </AboutCard>
        ))}
      </div>

      <h3>Skills</h3>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div className="skill-pills">
              {items.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
