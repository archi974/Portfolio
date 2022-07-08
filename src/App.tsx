import React from 'react';
import { BrowserRouter as Router, Routes, HashRouter, Route } from "react-router-dom";
import Bio from "./pages/bio";
import Project from "./pages/project";
import Contact from "./pages/contact";
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;