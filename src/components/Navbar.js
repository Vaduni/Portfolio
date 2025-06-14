import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-navbar-scrolled shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-16">
        <a href="#hero" className="text-xl font-bold text-primary">
          Vaduni Niranjan
        </a>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "About", "Projects", "Skills", "Certifications", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
