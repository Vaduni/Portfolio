import { useEffect, useRef } from "react";

export default function Certifications() {
  const certifications = [
    {
      title: "Content Designing ",
      issuer: "GCET",
      date: "April 2025",
      image: "/certifications/design.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "October 2024",
      image: "/certifications/cybersecurity-ibm.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Java Bootcamp",
      issuer: "Let's Upgrade",
      date: "January 2025",
      image: "/certifications/lu.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "May 2023",
      image: "/certifications/cisco-essentials.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "100 Days Badge",
      issuer: "Leetcode",
      date: "May 2025",
      image: "/certifications/leetcode100.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Java Fundamentals",
      issuer: "Scaler",
      date: "August 2024",
      image: "/certifications/scaler.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "CCSK v4.1 Foundation Training ",
      issuer: "Cisco",
      date: "June 2023",
      image: "/certifications/ccsk.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Graphs Programming Camp ",
      issuer: "AlgoUniversity",
      date: "May 2025",
      image: "/certifications/algo.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Database Programming ",
      issuer: "Oracle Academy",
      date: "December 2024",
      image: "/certifications/oracle-sql.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
     {
      title: "BuildWithIndia Hackathon ",
      issuer: "Hack With India",
      date: "March 2025",
      image: "/certifications/bwi.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Infosys Springboard",
      date: "April 2024",
      image: "/certifications/infosys-dsa.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "Introduction to Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "May 2023",
      image: "/certifications/cisco-packet-tracer.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
    {
      title: "50 Days Badge",
      issuer: "Leetcode",
      date: "February 2025",
      image: "/certifications/leetcode50.png",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
  ];

  const containerRef = useRef(null);
  const isHovered = useRef(false);

  // Auto-scroll logic
  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (!isHovered.current) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  // Duplicate cards for infinite loop
  const scrollingCards = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

        <div
          ref={containerRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <div className="inline-flex gap-6">
            {scrollingCards.map(({ title, issuer, date, image, link }, idx) => (
              <a
                key={`${title}-${idx}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 flex-shrink-0 bg-[var(--color-about-bg)] rounded-2xl border border-gray-300 shadow hover:shadow-lg transition"
              >
                <div className="p-2">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover rounded-xl mb-3"
                  />
                  <div className="text-center px-2">
                    <h3 className="text-md font-semibold text-gray-800 break-words leading-snug max-w-full">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 break-words">{issuer}</p>
                    <p className="text-xs text-gray-500 mt-1">{date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
