import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skils';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
