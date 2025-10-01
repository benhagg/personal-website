import {
  Github,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
  Timer,
  Mic,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Ben Haggard</h1>
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

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Software & DevOps Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I love building software.
            <br /> Cloud | Development | DevOps
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Provo, UT</span>
            </div>
          </div>
        </div>
        {/* Projects Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
            Featured Projects
          </h3>
          <div className="grid gap-6">
            {/* AI Note Taker */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Mic size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      AI Note Taker
                    </h4>
                    <p className="text-green-600 font-medium">
                      Local AI-Powered Transcription & Summarization
                    </p>
                  </div>
                </div>
                <a
                  href="https://github.com/benhagg/note-taker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              </div>
              <p className="text-gray-700 mb-4">
                A very useful project I use every day to supplement my
                note-taking in class and ensure I don&apos;t miss anything the
                teacher says. Uses locally hosted models to transcribe and
                summarize audio recordings, keeping all data private. Planning
                to implement more agentic features in the future, including a
                to-do list with due dates and RAG integration with a vectorized
                database of my textbooks.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "AI/ML",
                  "Speech Recognition",
                  "Local Models",
                  "Audio Processing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio Optimization Tool */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <TrendingUp size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Portfolio Optimization Tool
                    </h4>
                    <p className="text-purple-600 font-medium">
                      Financial Analysis & Risk Management
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                  <span>Private Project</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                A sophisticated financial analysis tool that uses the yfinance
                API to pull historical data on stocks in my portfolio. Employs
                Python and pandas to create covariance matrices based on
                predicted returns and optimizes the Sharpe ratio for selected
                stock groups. This tool has been instrumental in helping me
                diversify my portfolio and make data-driven investment
                decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "pandas",
                  "yfinance",
                  "Financial Modeling",
                  "Data Analysis",
                  "Statistics",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* React Timer Game */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Timer size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      React Timer Game
                    </h4>
                    <p className="text-blue-600 font-medium">
                      Interactive Web Game
                    </p>
                  </div>
                </div>
                <a
                  href="https://benhagg.github.io/React-timer-game/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Play Game</span>
                </a>
              </div>
              <p className="text-gray-700 mb-4">
                A precision-based timer game built with React where players
                challenge themselves to start and stop a timer at exact
                intervals (e.g., 5 seconds). Test your timing skills and see how
                close you can get to the target time! Features real-time
                feedback and score tracking.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "CSS", "HTML", "GitHub Pages"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
            Skills
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "TypeScript",
                    "JavaScript",
                    "C++",
                    "C#",
                    "SQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Frameworks & Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "React Native",
                    "Flask",
                    "Django",
                    "Node.js",
                    "ASP.NET",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Cloud & DevOps
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Azure ML",
                    "GitHub Actions",
                    "CI/CD",
                    "Docker",
                    "Terraform",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Data & Analytics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "ETL Processes",
                    "Data Visualization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                Professional Development
              </h4>
              <p className="text-gray-700">
                Spent 200+ hours in online courses in web & mobile development
                (React, React Native, Django, Flask), cloud computing (AWS,
                Google Cloud), and cybersecurity (Hack The Box, Try Hack Me).
              </p>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
            Education
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-gray-900">
                Brigham Young University – Marriott School of Business
              </h4>
              <span className="text-gray-600">Provo, UT</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-blue-600 font-medium">
                Master of Science in Information Systems
              </p>
              <span className="text-gray-600">Sept 2023 - Current</span>
            </div>
            <ul className="text-gray-700 space-y-1 list-disc pl-5">
              <li>3.94/4.00 GPA</li>
              <li>Academic merit scholarship</li>
              <li>
                Relevant Coursework: Software Development, Machine Learning,
                Cybersecurity, Cloud Computing, Networking, Infastructure
              </li>
            </ul>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
            Work Experience
          </h3>

          <div className="space-y-6">
            {/* Silver Fund */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-900">
                  Silver Fund
                </h4>
                <span className="text-gray-600">Provo, UT</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-blue-600 font-medium">Software Engineer</p>
                <span className="text-gray-600">Jan 2025 – Current</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • Redesigned cloud architecture using Docker, Terraform, and
                  AWS (EB, EC2, VPC, IAM), improving reliability and reducing
                  infrastructure costs by 50%.
                </li>
                <li>
                  • Automated deployments with CI/CD pipelines to simplify
                  future DevOps operations.
                </li>
                <li>
                  • Migrated main website to Next.js with TypeScript and ShadCN,
                  modernizing UI/UX
                </li>
              </ul>
            </div>

            {/* SureMark Digital */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-900">
                  SureMark Digital
                </h4>
                <span className="text-gray-600">Provo, UT</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-blue-600 font-medium">
                  Frontend and QA Engineering Intern
                </p>
                <span className="text-gray-600">Apr 2025 – Aug 2025</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • Developed a unified React/TypeScript UI integrating internal
                  npm packages, a browser extension, and multiple apps,
                  simplifying cryptographic workflows, and improving secure
                  content verification for users.
                </li>
                <li>
                  • Collaborated with developers to deliver deadline-driven
                  feature releases, emphasizing frontend functionality and
                  end-to-end testing
                </li>
                <li>
                  • Implemented some full-stack features including expanding
                  support of signing and verifying web-based content by 200%
                </li>
              </ul>
            </div>

            {/* Spot Parking */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-900">
                  Spot Parking
                </h4>
                <span className="text-gray-600">Provo, UT</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-blue-600 font-medium">
                  Backend Engineer Intern
                </p>
                <span className="text-gray-600">Jan 2025 – May 2025</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • Designed a relational database schema for scalability and
                  migrated a NoSQL DynamoDB database to an AWS RDS MySQL
                  instance, using Python scripts for data ETL.
                </li>
              </ul>
            </div>

            {/* BYU AC Shop */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-semibold text-gray-900">
                  BYU AC Shop
                </h4>
                <span className="text-gray-600">Provo, UT</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-blue-600 font-medium">
                  Controls Programming Technician
                </p>
                <span className="text-gray-600">Jul 2024 – May 2025</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • Transformed legacy programming for several campus-wide
                  distributed utility controls systems into GCL+ line code,
                  improving system efficiency and maintainability
                </li>
                <li>
                  • Developed full-stack features and resolved bugs on an
                  internal website using JavaScript and Flask
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
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
      </section>
    </main>
  );
}
