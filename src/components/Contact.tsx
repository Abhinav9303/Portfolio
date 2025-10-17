import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { contacts } from './constants';

export default function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="page-container max-w-4xl">
        <h2 className="section-title">Get In Touch</h2>

        <div className="card p-8 md:p-12">
          <p className="text-gray-300 text-center text-lg mb-8">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology.
            Feel free to reach out through any of the channels below.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href="mailto:your.email@example.com" className="tile group">
              <Mail className="icon-accent" size={32} />
              <span className="text-white font-medium">Email</span>
              <span className="text-gray-400 text-sm text-center">{contacts?.email}</span>
            </a>

            <a href={contacts?.linkedin} target="_blank" rel="noopener noreferrer" className="tile group">
              <Linkedin className="icon-accent" size={32} />
              <span className="text-white font-medium">LinkedIn</span>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                Connect <ExternalLink size={14} />
              </span>
            </a>

            <a href={contacts?.github} target="_blank" rel="noopener noreferrer" className="tile group">
              <Github className="icon-accent" size={32} />
              <span className="text-white font-medium">GitHub</span>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                View Profile <ExternalLink size={14} />
              </span>
            </a>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-400 text-sm">
          <p>© 2025 Abhinav. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
}
