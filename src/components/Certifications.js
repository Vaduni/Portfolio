// components/Certifications.js

export default function Certifications() {
  const certifications = [
    {
      title: "Frontend Development",
      issuer: "FreeCodeCamp",
      date: "Jan 2023",
      link: "https://www.freecodecamp.org/certification/yourprofile/frontend-development",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Dec 2022",
      link: "https://www.freecodecamp.org/certification/yourprofile/javascript-algorithms",
    },
    {
      title: "React Developer",
      issuer: "Coursera",
      date: "Mar 2023",
      link: "https://coursera.org/certificate/yourcertificate",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map(({ title, issuer, date, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
              <p className="text-gray-700 mb-1">{issuer}</p>
              <p className="text-gray-500 text-sm">{date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
