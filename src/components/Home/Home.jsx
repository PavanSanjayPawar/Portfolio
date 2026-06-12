// import React from 'react'
import heroImg from "../../assets/images/Hero.jpg";
function Home() {
  return (
    <section className="flex items-center justify-between px-20 py-20 text-white">
      <div className="max-w-lg">
        <h1 className="text-6xl font-bold text-blue-950">Hello' I am Pavan</h1>

        <p className="mt-4 text-xl text-black">
          I am a computer science student . A full stack devloper with stong
          base in javascript
        </p>

        <button className="mt-6 px-6 py-3 bg-indigo-500 rounded-full">
          Contact Me
        </button>
      </div>

      <div>
        <img src={heroImg} alt="hero" className="w-80 rounded-2xl" />
      </div>
    </section>
  );
}

export default Home
