import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Helena He</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/cs-projects">CS Projects</Link></li>
        <li><Link to="/creative-projects">Creative Projects</Link></li>
        <li><Link to="/film">Film</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
