import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Python",
    "SQL",
    "C++",
    "HTML",
    "Machine Learning",
    "Data Visualization",
    
  ];

  const backendSkills = ["Powerbi", "Excel", "Google colab","Figma", "Kicad", "Fusion360", "Arduino"];

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
I'm a motivated and detail-oriented Software Developer with strong skills in Python, C++, and SQL. I enjoy building robust applications, optimizing databases, and creating efficient, scalable solutions. With a passion for software engineering and AI-driven systems, I love solving real-world challenges and contributing to innovative, high-impact projects.
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
                  <strong> B.Tech. in Artificial Inelligence and Data SCience </strong> - Kumaraguru College of Technology
                  (2022-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Machine Learning, Data Visualization
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Innovation Engineer Trainee at Forge (Jan 2025 - Jul 2025){" "}
                  </h4>
                  <p>
                    Developed a delta robot prototype, focusing on design, motion testing, accuracy evaluation, and automation integration.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Samsung PRISM (Feb 2025 - Sep 2025){" "}
                  </h4>
                  <p>
                    Optimized Whisper prompts for NER using LLMs, improving speech-to-entity extraction accuracy and overall model performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
