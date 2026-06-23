import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col-reverse md:flex-row items-center justify-between md:px-20 gap-5"
    >
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
          Hello, I am Pavan
        </h1>

        <p className="text-lg md:text-xl text-black font-serif font-bold">
          I am a Full stack Developer with a strong foundation in JavaScript. I
          am focused on building scalable and user friendly projects.
        </p>

        <div className="flex justify-center md:justify-start gap-3 mt-6">
          <a href="#Contact">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition">
              Contact Me
            </button>
          </a>

          <a href="#Projects">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:scale-110 transition">
              My Work
            </button>
          </a>
        </div>

        
        <div className="flex justify-center md:justify-start gap-5 mt-6">
        
          <a
            href="https://github.com/PavanSanjayPawar"
            target="_blank"
            rel="noreferrer"
            className="p-3 text-2xl text-gray-700 hover:text-black hover:scale-110 transition duration-300 bg-gray-100 rounded-full shadow-md"
          >
            <FaGithub />
          </a>

          
          <a
            href="https://www.linkedin.com/in/pavanpawar9967/"
            target="_blank"
            rel="noreferrer"
            className="p-3 text-2xl text-blue-600 hover:text-blue-800 hover:scale-110 transition duration-300 bg-gray-100 rounded-full shadow-md"
          >
            <FaLinkedin />
          </a>

          
          <a
            href="https://wa.me/917498169206"
            target="_blank"
            rel="noreferrer"
            className="p-3 text-2xl text-green-500 hover:text-green-600 hover:scale-110 transition duration-300 bg-gray-100 rounded-full shadow-md"
          >
            <FaWhatsapp />
          </a>

          
          <a
            href="mailto:pavansanjaypawar06@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 text-2xl hover:scale-110 transition duration-300 bg-gray-100 rounded-full shadow-md text-[#EA4335]"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/hero.png"
          alt="hero"
          className="w-55 sm:w-72 md:w-80 lg:w-90 rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
