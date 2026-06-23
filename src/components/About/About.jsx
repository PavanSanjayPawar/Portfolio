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
    <section
      id="About"
      className="flex justify-center items-center min-h-screen "
    >
      <div className="flex flex-col items-center gap-12 w-full p-6 sm:p-10 rounded-2xl">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-8 text-blue-950 text-center tracking-tight font-sans">
            About Me
          </h1>

          <div className="space-y-6 leading-relaxed sm:text-lg md:text-xl font-normal tracking-normal text-gray-700">
            <p>
              Hi, I'm
              <span className="text-indigo-600 font-extrabold tracking-tight font-sans">
                Pavan Pawar
              </span>
              , a
              <span className="text-slate-900 font-bold">
                {" "}
                Full-Stack Developer
              </span>{" "}
              & Computer Science student with a strong fondation in Javascript.
              I love transforming my skills into user-friendly and scalable
              projects.
            </p>

            <p>
              My core stack
              <span className="text-slate-950 font-semibold">
                {" "}
                React, JavaScript, Tailwind CSS, Node.js, Express.js
              </span>{" "}
              &<span className="text-slate-950 font-semibold"> MongoDB</span>.
              <br />
              <span className="text-indigo-600 font-semibold">
                As an eager to learn{" "}
              </span>
              and a
              <span className="text-indigo-600 font-semibold">
                good communicator
              </span>
              , I thrive in collaborative environments and am always ready to
              adopt new tech stacks & technology.
            </p>

            <p>
              Beyond building websites, I actively spend time sharpening my
              <span className="text-slate-950 font-bold">
                {" "}
                problem-solving skills
              </span>{" "}
              through Data Structures & Algorithms (DSA). Turning innovative
              ideas into functional, real-world projects is what drives me
              forward.
            </p>

            <p>
              Currently, I am looking to channel my Full-Stack expertise into
              impactful
              <span className="text-indigo-600 font-bold">
                {" "}
                internship opportunities
              </span>
              , where I can collaborate, contribute & grow as a software
              engineer.
            </p>
          </div>

          <h1 className="text-4xl font-extrabold mt-16 mb-4 text-blue-950 text-center tracking-tight font-sans">
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
