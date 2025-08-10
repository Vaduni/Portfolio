import { useEffect, useRef } from "react";

const projects = [
  {
    title: "NewsNest",
    label: "React App",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Built a responsive React app to display live headlines via NewsAPI with category filters and infinite scroll. Secured API calls using Vercel serverless functions.",
    github: "https://github.com/Vaduni/React/tree/main/newsnest",
    demo: "https://newsnest-one.vercel.app",
    image: "/projects/newsnest.png",
  },
  {
    title: "TextCount",
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "A text utility tool offering word/character count, case conversion, text copy, and space cleanup — ideal for writing within set limits.",
    github: "https://github.com/Vaduni/React/tree/main/textcount",
    demo: "https://vaduni.github.io/React/",
    image: "/projects/textcount.png",
  },
  {
    title: "iNotebook",
    label: "MERN",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "A secure digital notebook with user authentication and full CRUD features, built using React, Node.js, Express, and MongoDB.",
    github: "https://github.com/Vaduni/React/tree/main/inotebook",
    image: "/projects/inotebook.png",
  },
  {
    title: "Currency Calculator",
    label: "JS Utility",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Developed a real-time currency converter using JavaScript, Fetch API, and external exchange data APIs.",
    github: "https://github.com/Vaduni/Web-Projects/tree/main/Currency%20converter",
    demo: "https://currency-converter-one-rose.vercel.app",
    image: "/projects/currency.png",
  },
  {
    title: "TinDog",
    label: "HTML/CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "A responsive landing page for a fictional dog adoption service, showcasing HTML, CSS, and Bootstrap skills.",
    github: "https://github.com/Vaduni/Web-Projects/tree/main/Tindog",
    demo: "https://tindog-vaduni-niranjans-projects-32a1dc87.vercel.app",
    image: "/projects/tindog.png",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    const scroll = () => {
      if (!isHovered.current) {
        container.scrollLeft += 2; 
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 15);
    return () => clearInterval(interval);
  }, []);

  const scrollingProjects = [...projects, ...projects]; 

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-3 text-center">
          Projects
        </h2>
<h4 className="text-center text-gray-600 mb-8">
  15+ projects crafted with love 🩶 Here are a few highlights..
</h4>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          {scrollingProjects.map(
            ({ title, description, github, demo, image, label, icon }, idx) => (
              <div
                key={`${title}-${idx}`}
                className="group relative min-w-[300px] max-w-[300px] bg-[var(--color-navbar-scrolled)] border-2 border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0 overflow-hidden"
              >
                <div className="p-4 pb-0">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-[var(--color-navbar-scrolled)] bg-opacity-90 text-[var(--color-primary)] text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-center">
                  <p className="mb-3">{description}</p>
                  {label && icon && (
                    <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      <img src={icon} alt={label} className="w-4 h-4" />
                      {label}
                    </span>
                  )}
                </div>

                <div className="p-4 pt-3 z-20 relative">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                    {title}
                  </h3>
                  <div className="flex space-x-4 text-sm text-[var(--color-primary)]">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
