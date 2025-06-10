// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-indigo-600">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
