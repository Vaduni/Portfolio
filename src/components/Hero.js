import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-16 bg-white text-primary">
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-primary">Vaduni Niranjan</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
         Aspiring Software Developer | Web Creator | Graphic Design Enthusiast | Cybersecurity Learner
        </h2>
        <p className="text-md sm:text-lg text-gray-600 mb-8 max-w-xl">
       Aspiring Software Developer passionate about solving real-world problems through code.I enjoy building clean, responsive, and efficient web applications—turning ideas into practical solutions that make a difference.

        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="/Vaduni_Resume.pdf" // Update this with your resume path
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
