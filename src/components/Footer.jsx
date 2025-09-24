import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
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
        <a href="https://www.youtube.com/@helarious" target="_blank" rel="noreferrer">
          <FaYoutube size={24} />
        </a>
        <a href="https://www.instagram.com/panikacake/" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.tiktok.com/@he.larious" target="_blank" rel="noreferrer">
          <FaTiktok size={24} />
        </a>
        <a href="mailto:hehelena01@gmail.com">
          <MdEmail size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
