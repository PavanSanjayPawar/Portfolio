import { FaGlobe, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
  {
    title: "Currency Converter",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
    tech: "React, Tailwind CSS, Currency API",
    desc: "A responsive currency converter that provides real-time exchange rates between different currencies.",
    live: "https://currencyconverterbypavan.netlify.app/",
    github: "https://github.com/PavanSanjayPawar/currency-converter",
  },
  {
    title: "Background Changer",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop",
    tech: "React, Tailwind CSS, Vite",
    desc: "A simple background color changer that allows users to switch colors instantly using interactive buttons.",
    live: "https://bg-changerreactvite.netlify.app/",
    github: "https://github.com/PavanSanjayPawar/background-changer",
  },
];

  return (
    <section id="Projects" className="min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-3">{project.tech}</p>

              <p className="mt-3">{project.desc}</p>

              
              <div className="flex gap-4 mt-6">
                
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-center py-2 rounded-lg border hover:bg-neutral-100 transition-colors"
                >
                  <FaGlobe />
                  <span>Live Demo</span>
                </a>

                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-center py-2 rounded-lg border hover:bg-neutral-100 transition-colors"
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
