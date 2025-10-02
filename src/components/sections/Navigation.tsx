import { Github, Linkedin } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/myPhoto.jpg"
              alt="Ben Haggard Photo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-gray-900">Ben Haggard</h1>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/benhaggard21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/benhagg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
