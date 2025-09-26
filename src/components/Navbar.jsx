import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Helena He</Link>
      </div>

      {/* Hamburger icon visible on mobile */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/cs-projects">CS</Link></li>
        <li><Link to="/creative-projects">Creative</Link></li>
        <li><Link to="/film">Film</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
