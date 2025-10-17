import { Code, Database, Layers, Wrench } from 'lucide-react';
import {skills} from './constants';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Frontend',
      skills: skills.frontend,
    },
    {
      icon: <Layers size={24} />,
      title: 'Backend',
      skills: skills.backend,
    },
    {
      icon: <Database size={24} />,
      title: 'Database',
      skills: skills.databases,
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools & Others',
      skills: skills.tools,
    },
  ];

  return (
    <section id="skills" className="section section-dark">
      <div className="page-container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card card-hover"
            >
              <div className="bg-brand-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full hover:bg-brand-600 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
