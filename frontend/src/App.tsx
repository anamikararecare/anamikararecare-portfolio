import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Advocacy from './pages/Advocacy';
import Future from './pages/Future';

// remember to git pull origin main

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/future" element={<Future />} />
      </Routes>
    </Router>
  )
}



export default App;