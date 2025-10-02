import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CSProjects from "./sections/CSProjects";
import CreativeProjects from "./sections/CreativeProjects";
import Film from "./sections/Film";
import About from "./sections/About";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} /> 
        <Route path="/cs-projects" element={<CSProjects />} />
        <Route path="/creative-projects" element={<CreativeProjects />} />
        <Route path="/film" element={<Film />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
