import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    // listen in capture phase so we catch the click before it reaches the menu
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isOpen]);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        Helena He
      </div>

      {/* Hamburger icon visible on mobile */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/cs-projects" onClick={handleLinkClick}>CS</Link></li>
        <li><Link to="/creative-projects" onClick={handleLinkClick}>Creative</Link></li>
        <li><Link to="/film" onClick={handleLinkClick}>Film</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
