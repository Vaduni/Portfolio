import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 bg-[var(--color-about-bg)] text-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-7 text-gray-800 text-justify">
          Hey there! I'm Vaduni Niranjan — a Computer Science student at
          Galgotias College of Engineering and Technology (CGPA: 8.66), driven
          by the thrill of turning ideas into impactful digital experiences.
          Whether it’s crafting sleek user interfaces, building full-stack web
          apps, or diving deep into cybersecurity, I thrive at the intersection
          of functionality and creativity.
        </p>
        <p className="text-lg leading-7 text-gray-800 mt-4 text-justify">
          With a strong foundation in programming and a growing curiosity for
          new technologies, I enjoy building solutions that are both functional
          and impactful. From coding interactive tools and dynamic websites to
          designing visuals for the GeeksforGeeks GCET Graphics Team, I enjoy
          bringing both logic and aesthetics into every project. I’m constantly
          learning, experimenting, and exploring new tech — always looking for
          innovative ways to solve real-world problems.
        </p>
        <p className="text-lg leading-7 text-gray-800 mt-4 text-justify">
          Design with purpose. Code with clarity. Develop with passion🚀
        </p>
      </div>
    </section>
  );
};

export default About;
