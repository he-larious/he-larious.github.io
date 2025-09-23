import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Helena He</p>
      <div className="footer-links">
        <a href="https://github.com/he-larious" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/helenahe" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:hehelena01@gmail.com">
          <MdEmail size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
