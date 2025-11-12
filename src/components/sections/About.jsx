import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Python",
    "SQL",
    "MongoDB",
    "C++",
    "Git",
    "HTML",
    "Machine Learning",
    "Data Visualization",
    
  ];

  const backendSkills = ["Powerbi", "Excel", "Whisper", "Google colab",
                        "Figma", "Canva","Kicad", "Fusion360"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
I'm a motivated and detail-oriented Data Analyst skilled in Python, C++, SQL, and Power BI. I specialize in building insightful dashboards, optimizing data workflows, and developing scalable analytical solutions. With a strong interest in AI-driven systems and software engineering, I'm passionate about transforming data into actionable insights and contributing to innovative, real-world projects that drive impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech. in Artificial Inelligence and Data Science </strong> - Kumaraguru College of Technology
                  (2022-2024)
                </li>
                <li>
                  <strong>Relevant Coursework:       </strong> 
                       <p>Data Structures & Algorithms, Operating System, Data Modelling, Machine Learning, Data Visualization</p>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Samsung PRISM (Feb 2025 - Sep 2025){" "}
                  </h4>
                  <p>
                    Mentored by professionals on real-world projects.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Innovation Engineer Trainee at Forge (Jan 2025 - Jul 2025){" "}
                  </h4>
                  <p>
                    Developed a delta robot prototype, focusing on design, motion testing and automation.
                  </p>
                </div>
              </div>
            </div>

            {/* achievement */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🏆 Achievements </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Mahatma Gandhi Merit Scholar</li>
                  <li>Runner-up at Intra-Ideathon</li>
                  <li>Completed Advance Data Modelling Certification</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🎯 Participation </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Participated in TANCAM Hackathon organized by Dassault Systems.</li>
                  <li>Participated in Hackatra conducted by devpost.</li>
                </ul>
              </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
