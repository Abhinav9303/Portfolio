import { ChevronDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="page-container section relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-brand-400">Abhinav</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-delay-1">
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
            Building scalable solutions and solving complex problems
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
