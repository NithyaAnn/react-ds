import React from 'react';

// Import Bootstrap CSS & Icons directly into App.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Optional Bootstrap JS (needed for dropdowns, modals, collapsibles, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lifecycle from './Lifecycle';
import Later from './Later';
import CaseStudy from './CaseStudy';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/Later" element={<Later/>}/>
        <Route path="/case-study" element={<CaseStudy/>}/>
      </Routes>
    </Router>
  );
}

export default App;