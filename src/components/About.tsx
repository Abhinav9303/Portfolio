import { Briefcase, Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section section-muted">
      <div className="page-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-brand-600 p-3 rounded-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Current Role</h3>
                <p className="text-gray-300">
                  Full Stack Developer at Freight Tiger
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-600 p-3 rounded-lg">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                <p className="text-gray-300">
                  Over the past 2 Years, I've focused on making new projects, resolving bugs, maintaining systems,
                  and ensuring production stability. I've gained valuable experience in debugging and
                  system reliability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-600 p-3 rounded-lg">
                <Rocket className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What's Next</h3>
                <p className="text-gray-300">
                  I'm ready to take on more challenging work — designing, building, and optimizing
                  solutions from the ground up. I'm passionate about moving from maintaining systems
                  to building them, and solving problems that drive business forward.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
            <p className="text-gray-300 mb-4">
              I believe in end-to-end involvement — from understanding product requirements to
              delivering and iterating on solutions. I'm drawn to environments that value:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
                Problem-solving and innovation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
                Technical depth and architecture discussions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
                Cross-functional collaboration
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
                Ownership and accountability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
