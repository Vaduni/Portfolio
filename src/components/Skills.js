const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

      { name: "Python (basics)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/512/2621/2621042.png" }, // placeholder
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1669993573/nextjs/Icon_light_background.png" },
      { name: "Netlify", icon: "https://www.netlify.com/v3/img/components/logomark.png" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Canva", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
      {name:'Kaggle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg'},
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--color-about-bg)] text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6 border-b pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg shadow hover:shadow-md transition"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
