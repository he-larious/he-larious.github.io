import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Helena He</h1>
        <p>CS • Film • Creative Projects</p>
        <Link to="/cs-projects" className="hero-button">
          See My Work
        </Link>
      </div>
    </section>
  );
}

export default Hero;
