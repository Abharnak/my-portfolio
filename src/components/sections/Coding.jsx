import { RevealOnScroll } from "../RevealOnScroll";
import { SiLeetcode, SiHackerrank, SiGithub } from "react-icons/si";

export const Coding = () => {
  const leetcodeProfile = "https://leetcode.com/u/AbharnaK/";
  const hackerrankProfile = "https://www.hackerrank.com/profile/abharnak19";
  const githubUsername = "AbharnaK";

  return (
    <section
      id="coding"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Coding Platforms
          </h2>

          {/* Coding Profiles */}
          <div className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all mb-8">
            <h3 className="text-xl font-bold mb-4"> 🏆 Coding Profiles </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <SiLeetcode className="text-orange-500" />
                <strong>LeetCode:</strong>{" "}
                <a
                  href={leetcodeProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {leetcodeProfile}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiHackerrank className="text-green-500" />
                <strong>HackerRank:</strong>{" "}
                <a
                  href={hackerrankProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 underline"
                >
                  {hackerrankProfile}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiGithub className="text-gray-400" />
                <strong>GitHub:</strong>{" "}
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 underline"
                >
                  https://github.com/{githubUsername}
                </a>
              </li>
            </ul>
          </div>

          {/* Stats Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LeetCode Stats */}
            <div className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all text-center min-h-[2c00px]">
              <h3 className="text-xl font-bold mb-4"> 📊 LeetCode Stats </h3>
              <img
                src={`https://leetcard.jacoblin.cool/AbharnaK?theme=dark`}
                alt="LeetCode Stats"
                className="mx-auto rounded-xl shadow-md"
              />
            </div>

            {/* GitHub Stats */}
            <div className="glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all text-center min-h-[200px]">
              <h3 className="text-xl font-bold mb-4"> 🖥️ GitHub Stats </h3>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_title=true`}
                alt="GitHub Stats"
                className="mx-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
