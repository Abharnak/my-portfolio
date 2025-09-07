import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
const [status,setStatus]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        setStatus("✅ Message Sent!");
        setFormData({ name: "", email: "", message: "" });

        // ✅ Clear the success message after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 3000);
      })
       .catch(() => setStatus("❌ Oops! Something went wrong. Please try again."));
 ;
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Hidden input for recipient name */}
            <input type="hidden" name="to_name" value="Abharna" /> {/* ✅ Added */}

            <div className="relative">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-white mt-2">{status}</p>
            )}
          </form>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/abharna-k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] w-full md:w-auto text-center"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/abharnak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] w-full md:w-auto text-center"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="/my-portfolio/resume.pdf"
              download="abharna-resume.pdf"
              className="flex items-center space-x-2 bg-green-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] w-full md:w-auto text-center"
            >
            <FaDownload size={20} />
            <span>Resume</span>
          </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
