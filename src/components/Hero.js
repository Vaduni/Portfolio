import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center md:items-start px-6 md:px-16 py-20 bg-white text-primary">
      {/* Left: Text Section */}
      <div className="max-w-2xl md:w-1/2">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-primary">Vaduni Niranjan</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
          Aspiring Software Developer | Web Creator | Graphic Design Enthusiast | Cybersecurity Learner
        </h2>
        <p className="text-md sm:text-lg text-gray-600 mb-8 text-justify">
         Passionate about solving real-world problems through code. I enjoy building clean, responsive, and efficient web applications—turning ideas into practical solutions that make a difference.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-[#023047] text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-[#d6e2e9] hover:text-[#023047] border border-[#023047]"
          >
            Contact Me
          </a>
          <a
            href="/Vaduni_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
           className="bg-[#023047] text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-[#d6e2e9] hover:text-[#023047] border border-[#023047]">
            Download Resume
          </a>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="mt-10 md:mt-0 md:ml-12 md:w-1/2 flex justify-center">
        <img
          src="/Vaduni.jpeg"
          alt="Vaduni Niranjan"
          className="w-84 h-84 md:w-90 md:h-90 object-cover rounded-full shadow-lg  border-primary"
        />
      </div>
    </section>
  );
};

export default Hero;
