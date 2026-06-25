import { FaGlobe, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "News App",
      image:
        "https://pin.it/2Vlx0NIke",
      tech: "React, Tailwind CSS, JavaScript",
      desc: "Responsive background changer with changes colour with single click.",
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
