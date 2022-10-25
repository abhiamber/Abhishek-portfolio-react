import { Route, Routes, Navigate } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Skills from "../Pages/Skills";

function Allroute() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/" element={<Home />} />
      <Route
      path="*"
      element={<Navigate to="/" replace />}
  />
    </Routes>
  );
}
export default Allroute;
