
const projects = [
  {
    title: "NewsNest",
    description: "Built a responsive React app to display live headlines via NewsAPI with category filters and infinite scroll.Secured API calls using Vercel serverless functions.",
    github: "https://github.com/Vaduni/React/tree/main/newsnest",
    demo: "https://newsnest-one.vercel.app",
  },
  {
    title: "TextCount",
    description: "This is a text utility tool offering word/character count, case conversion, text copy, and space cleanup ideal for writing within set limits.",
    github: "https://github.com/Vaduni/React/tree/main/textcount",
    demo: "https://vaduni.github.io/React/",
  },
 {
    title: "iNotebook",
    description: "A secure digital notebook with authentication and CRUD feature.",
    github: "https://github.com/Vaduni/React/tree/main/inotebook",
  },
  {
    title: "Currency Calculator",
    description: "Developed a real-time currency converter using JS, Fetch API, and external currency exchange data",
    github: "https://github.com/Vaduni/Web-Projects/tree/main/Currency%20converter",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ title, description, github, demo }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-600">{title}</h3>
              <p className="text-gray-700 mb-4">{description}</p>
              <div className="flex space-x-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
