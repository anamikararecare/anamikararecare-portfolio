import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects'

// remember to git pull origin main

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App;