// components/Skills.js

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "Tailwind CSS", level: 90 },
  { name: "TypeScript", level: 70 },
  // Add more skills here
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
        <div className="space-y-6">
          {skills.map(({ name, level }) => (
            <div key={name}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-900">{name}</span>
                <span className="text-sm text-gray-600">{level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-primary h-4 rounded-full"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
