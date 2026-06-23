import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <footer id="Contact" className="pt-5 pb-12 px-6 md:px-20 mt-2">
      <div className="flex flex-col items-center max-w-xl mx-auto border-b border-gray-700 pb-12 text-center">
        <h2 className="text-4xl font-bold mb-3 text-blue-950">Let's Connect</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10 mt-10">
          <a
            href="https://github.com/PavanSanjayPawar"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-black text-white rounded-full transition duration-300 text-xl hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pavanpawar9967/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full transition duration-300 text-xl hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/917498169206"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-green-500 text-white rounded-full transition duration-300 text-xl hover:scale-110"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://instagram.com/me_pavanpawar"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-pink-600 text-white rounded-full transition duration-300 text-xl hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:pavansanjaypawar@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-red-600 text-white rounded-full transition duration-300 text-xl hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="bg-white text-black p-6 md:p-8 rounded-2xl shadow-xl w-full text-left border border-gray-100">
          <form
            action="https://formsubmit.co/pavansanjaypawar@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Type your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        
        <div className="mt-12 text-sm text-bold font-bold">
          <p className="bg-grey mt-1">
            Email: pavansanjaypawar06@gmail.com | Mobile No.: +91 7498169206
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
