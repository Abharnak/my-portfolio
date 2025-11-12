import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const categories = ["All", "Data Visualization", "Machine Learning", "Others"];

  const toggleCategory = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        const newSelection = prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev.filter((c) => c !== "All"), category];
        return newSelection.length === 0 ? ["All"] : newSelection;
      });
    }
  };

  const projects = [
    {
      title:
        "LLM-based Prompt Optimization for Speech-based Named Entity Recognition (Samsung PRISM)",
      description:
        "Developed a backend pipeline to optimize Whisper ASR prompts using LLMs for improved speech-based NER. Evaluated 10 different prompt styles, integrating DistilBERT for entity extraction, Phi for prompt generation, and WER for evaluation, achieving over 2% reduction in error rate.",
      tech: ["Python", "Whisper", "Phi LLM", "DistilBERT", "HuggingFace"],
      link: "https://github.com/Abharnak",
      category: "Machine Learning",
    },
    {
      title: "Bleeding Detection in Wireless Capsule Endoscopy Images",
      description:
        "Built a deep learning model to classify bleeding and non-bleeding frames from a wireless capsule endoscopy dataset. Modified a pre-trained MobileNetV2 architecture for binary classification, achieving 97% accuracy.",
      tech: [
        "Python",
        "Tensorflow",
        "MobileNetV2",
        "Transfer Learning",
        "Deep Learning",
      ],
      link: "https://github.com/Abharnak/Internal-Bleeding-Detection/blob/main/README.md",
      category: "Machine Learning",
    },
    {
      title: "Audio to Text Transcriber",
      description:
        "Video-to-Text Transcriber that automates audio extraction from videos using MoviePy and Pydub, and converts speech to text with OpenAI Whisper for accurate transcription.",
      tech: ["OpenAI", "Whisper", "HTML", "CSS"],
      link: "https://github.com/Abharnak/Video-to-audio-transcription/blob/main/README.md",
      category: "Others",
    },
    {
      title: "Crop Recommendation System",
      description:
        "AI-driven crop recommendation system that assists farmers in selecting the most profitable crops by analyzing soil nutrient levels and environmental conditions.",
      tech: ["Python", "Excel", "Naive Bayes", "Machine Learning"],
      link: "https://github.com/Abharnak/Crop-Recommendation-System/blob/main/README.md",
      category: "Machine Learning",
    },
    {
      title: "Startup Funding Analytics Dashboard",
      description:
        "Comprehensive Power BI dashboard analyzing investor trends across startups, cities, and investment amounts.",
      tech: ["Power BI", "Excel"],
      link: "https://github.com/Abharnak/Data-Visualization-projects/blob/main/Investor-Trend-Analysis/README.md",
      category: "Data Visualization",
    },
    {
      title: "Healthcare Claim Cost Analysis",
      description:
        "Analyzed healthcare claims data to identify cost drivers, trends, and patterns across demographics, optimizing spending.",
      tech: ["SQL", "Power BI", "Excel"],
      link: "https://github.com/Abharnak/Data-Visualization-projects/blob/main/Healthcare-Claims-Cost-Analysis/README.md",
      category: "Data Visualization",
    },
    {
      title: "Superstore Sales Analysis",
      description:
        "Analyzed Superstore sales data and created an interactive dashboard revealing insights on profits, sales, and customer segments.",
      tech: ["SQL", "Power BI", "Excel"],
      link: "https://github.com/Abharnak/Data-Visualization-projects/blob/main/Superstore-Sales-Analysis/README.md",
      category: "Data Visualization",
    },
  ];

  const filteredProjects =
    selectedCategories.includes("All")
      ? projects
      : projects.filter((p) => selectedCategories.includes(p.category));

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* --- Category Buttons --- */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`py-2 px-5 rounded-full text-lg font-medium transition-all duration-300 shadow-md
                ${
                  selectedCategories.includes(cat)
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-cyan-400/40"
          : "bg-gray-900 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white"
     
                } hover:-translate-y-0.5`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* --- Project Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all duration-500 opacity-0 animate-fadeIn"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

/* --- Add this to your global CSS (e.g., index.css or globals.css) for fade animation --- */
