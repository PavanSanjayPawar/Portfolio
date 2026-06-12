import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
function Contact() {
    return (
      <div>
        <section
          id="Contact"
          className=" flex items-center justify-center px-6 py-20 mb-0"
        >
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-6">
              Let's Connect
            </h1>

            <p className=" text-lg mb-12">
              Feel free to connect with me through any of the platforms below.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <a
                href="https://wa.me/917498169206"
                target="_blank"
                rel="noreferrer"
                className=" p-8 rounded-3xl border border-black hover:-translate-y-2 transition"
              >
                <FaWhatsapp className="text-5xl text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold">WhatsApp</h3>
              </a>

              <a
                href="https://instagram.com/me_pavanpawar"
                target="_blank"
                rel="noreferrer"
                className=" p-8 rounded-3xl border border-black hover:-translate-y-2 transition"
              >
                <FaInstagram className="text-5xl text-pink-500 mx-auto mb-4" />
                <h3 className="font-semibold">Instagram</h3>
              </a>

              <a
                href="https://github.com/PavanSanjayPawar"
                target="_blank"
                rel="noreferrer"
                className=" p-8 rounded-3xl border border-black hover:-translate-y-2 transition"
              >
                <FaGithub className="text-5xl  mx-auto mb-4" />
                <h3 className="font-semibold ">GitHub</h3>
              </a>

              <a
                href="https://linkedin.com/in/your_username"
                target="_blank"
                rel="noreferrer"
                className=" p-8 rounded-3xl border border-black hover:-translate-y-2 transition"
              >
                <FaLinkedin className="text-5xl text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold">LinkedIn</h3>
              </a>
            </div>
          </div>
        </section>
        <div className="mt-2 text-center bg-black text-white">
          <p className="text-lg font-semibold">
            📧 pavansanjaypawar06@gmail.com
          </p>

          <p className="text-lg font-semibold mt-0">📱 +91 7498169206</p>
        </div>
      </div>
    );
}

export default Contact;