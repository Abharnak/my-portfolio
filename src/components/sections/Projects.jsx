import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">LLM-based Prompt Optimization for Speech-based Named Entity Recognition(Samsung PRISM)</h3>
              <p className="text-gray-400 mb-4">
                Developed a backend pipeline to optimize Whisper ASR prompts using LLMs for improved speech-based NER. Evaluated 10 prompt styles, integrating DistilBERT for entity extraction, Phi for prompt generation, and WER for evaluation, achieving over 2% reduction in error rate.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Whisper", "Phi LLM", "DistilBERT","HuggingFace"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Bleeding Detection in Wireless Capsule Endoscopy Images </h3>
              <p className="text-gray-400 mb-4">
                Built a deep learning model to classify bleeding and non-bleeding frames from a wireless capsule endoscopy dataset. Modified a pre-trained MobileNetV2 architecture for binary classification, achieving 97% accuracy. Applied transfer learning, image preprocessing, and regularization techniques to enhance model performance and generalization. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Tensorflow", "MobileNetV2", "Deep Learning"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Abharnak/Internal-Bleeding-Detection/blob/main/README.md"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="
            p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
            transition">
              <h3 className="text-xl font-bold mb-2">Audio to Text Transcriber</h3>
              <p className="text-gray-400 mb-4">
              Video-to-Text Transcriber that automates audio extraction from videos using MoviePy and Pydub, and converts speech to text with OpenAI Whisper for accurate transcription, even in diverse acoustic environments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["OpenAI", "Whisper"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Abharnak/Video-to-audio-transcription/blob/main/README.md"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="
            p-6 rounded-xl border border-white/10 
            hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
            transition">
              <h3 className="text-xl font-bold mb-2">Crop Recommendation System</h3>
              <p className="text-gray-400 mb-4">
              Designed and implemented an AI-driven crop recommendation system that assists farmers in selecting the most profitable crops by analyzing key factors such as soil nutrient levels, and environmental conditions. Applied Naive Bayes and Random Forest algorithms to improve crop prediction accuracy up to 95% experienced in data preprocessing, feature engineering, and model evaluation for precision agriculture. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Excel","Naive Bayes","Machine Learning"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Abharnak/Crop-Recommendation-System/blob/main/README.md"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>


            
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Startup Funding Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
              This dashboard provides a comprehensive analysis of investor trends across different startup types, cities, and investment amounts, offering insights into the startup investment landscape.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Powerbi", "Excel"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Abharnak/Data-Visualization-projects/blob/main/README.md"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
