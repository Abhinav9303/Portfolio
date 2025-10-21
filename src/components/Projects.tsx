import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Am I Audible?',
      description: 'A Zoom clone application with real-time video conferencing capabilities. Built with WebRTC for peer-to-peer communication.',
      technologies: ['React', 'WebRTC', 'Node.js', 'Socket.io'],
      github: '#',
      live: '#',
      featured: true,
      // isPersonal: true,
    },
    {
      title: 'Logistics Control Tower',
      description: 'Enterprise application for managing and monitoring logistics operations in real-time. Provides visibility and control over supply chain processes.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      // github: '#',
      // live: '#',
      featured: false,
    },
    {
      title: 'Yard Management App',
      description: 'Application for optimizing yard operations, including dock scheduling, trailer tracking, and resource allocation.',
      technologies: ['React', 'Express', 'MongoDB', 'Docker'],
      // github: '#',
      // live: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section section-muted">
      <div className="page-container">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-dark card-hover ${project.featured ? 'ring-2 ring-brand-500' : ''}`}
            >
              {project.featured && (
                <div className="badge">FEATURED</div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 min-h-[80px]">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                { project.isPersonal && <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-brand-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-brand-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
