import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CSProjects from "./sections/CSProjects";
import Hero from "./sections/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/cs-projects" element={<CSProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
