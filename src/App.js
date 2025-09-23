import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import CSProjects from "./sections/CSProjects";
import CreativeProjects from "./sections/CreativeProjects";
import Film from "./sections/Film";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/cs-projects" element={<CSProjects />} />
        <Route path="/creative-projects" element={<CreativeProjects />} />
        <Route path="/film" element={<Film />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
