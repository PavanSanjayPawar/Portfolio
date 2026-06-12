
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <section id="About"
      className="flex justify-center items-center min-h-screen 
      bg-linear-to-br   "
    >
      <div
        className="flex flex-col items-center gap-12 w-full 
       p-6 sm:p-10 rounded-2xl shadow-xl"
      >
        <div className="font-sans max-w-3xl text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-indigo-400 text-center">
            About Me
          </h1>
          <p className="leading-relaxed sm:text-lg md:text-xl ">
            Hi, I'm <span className=" font-semibold">Pavan</span>, a
            <span className=" font-semibold">Frontend Developer</span> & CS
            student passionate about creating modern and responsive web
            applications. I enjoy building user-friendly interfaces using
            <span className=" font-semibold">React</span>,
            <span className=" font-semibold">JavaScript</span> &
            <span className=" font-semibold">Tailwind CSS</span> while
            continuously improving my development.
          </p>

          <p className="leading-relaxed sm:text-lg md:text-xl  mt-6">
            Apart from web development, I spend time strengthening my
            <span className=" font-semibold">problem-solving</span> abilities
            and learning core computer science concepts. I enjoy turning ideas
            into functional projects and exploring new technologies that help me
            grow as a developer.
          </p>

          <p className="leading-relaxed sm:text-lg md:text-xl  mt-6">
            Currently, I'm focused o
            <span className="font-semibold">Full stack Development</span>,
            expanding my React expertise, and preparing for internship
            opportunities. My goal is to become a skilled software developer and
            create impactful digital experiences.
          </p>
          <h1 className="text-3xl font-bold mt-8 mb-0.5 text-indigo-400 text-center">
            My Skills
          </h1>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-5xl text-orange-500" />
              <span className="mt-2 text-sm">HTML5</span>
            </div>

            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-5xl text-blue-500" />
              <span className="mt-2 text-sm">CSS3</span>
            </div>

            <div className="flex flex-col items-center">
              <SiJavascript className="text-5xl text-yellow-400" />
              <span className="mt-2 text-sm">JavaScript</span>
            </div>

            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-cyan-400" />
              <span className="mt-2 text-sm">React</span>
            </div>

            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-5xl text-sky-400" />
              <span className="mt-2 text-sm">Tailwind</span>
            </div>

            <div className="flex flex-col items-center">
              <FaGitAlt className="text-5xl text-orange-600" />
              <span className="mt-2 text-sm">Git</span>
            </div>

            <div className="flex flex-col items-center">
              <FaGithub className="text-5xl " />
              <span className="mt-2 text-sm">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;