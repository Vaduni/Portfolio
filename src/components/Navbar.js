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
        isScrolled ? "bg-[var(--color-navbar-scrolled)] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-16">
        {/* Logo*/}
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-[var(--color-primary)]">
          <img src="/logo.png" alt="Logo" className="w-40 h-25 object-contain" />
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "About", "Projects", "Skills", "Certifications", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-[var(--color-primary)] transition-colors"
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
