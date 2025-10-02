import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-gray-500">
      <p className="text-gray-600 mb-4">
        Let&apos;s connect and build something amazing together!
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://linkedin.com/in/benhaggard21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/benhagg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Github size={24} />
        </a>
      </div>
    </footer>
  );
}
