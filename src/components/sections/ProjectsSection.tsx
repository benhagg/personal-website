import {
  Github,
  Timer,
  Mic,
  TrendingUp,
  ExternalLink,
  Search,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mb-12">
      <SectionHeader title="Featured Projects" />
      <div className="grid gap-6">
        {/* RAG based Job Search */}
        <ProjectCard
          title="RAG based Job Search"
          subtitle="AI-Powered Job Search Tool"
          description="My school provides us with a spreadsheet of ~1500 job and internship listings. I use this tool to vectorize and efficiently search the listings. Uses a containerized architecture."
          icon={<Search size={24} className="text-green-600" />}
          iconBgColor="bg-green-100"
          technologies={[
            "Python",
            "AI/ML",
            "Docker",
            "RAG",
            "Vector DB",
            "Hugging Face",
          ]}
          techVariant="green"
          actionButton={
            <a
              href="https://github.com/benhagg/job-search"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          }
        />
        {/* AI Note Taker */}
        <ProjectCard
          title="AI Note Taker"
          subtitle="Local AI-Powered Transcription & Summarization"
          description="I use this project every day to supplement my note-taking in class and ensure I don't miss anything. This project has been super valuable to me. Uses locally hosted models to transcribe and summarize audio recordings."
          icon={<Mic size={24} className="text-green-600" />}
          iconBgColor="bg-green-100"
          technologies={[
            "Python",
            "AI/ML",
            "Speech Recognition",
            "Local Models",
            "Audio Processing",
          ]}
          techVariant="green"
          actionButton={
            <a
              href="https://github.com/benhagg/note-taker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          }
        />

        {/* React Timer Game */}
        <ProjectCard
          title="React Timer Game"
          subtitle="Interactive Web Game"
          description="A precision-based timer game built with React where players challenge themselves to start and stop a timer at exact intervals (e.g., 5 seconds). Test your timing skills and see how close you can get to the target time! Features real-time feedback and score tracking."
          icon={<Timer size={24} className="text-blue-600" />}
          iconBgColor="bg-blue-100"
          technologies={["React", "JavaScript", "CSS", "HTML", "GitHub Pages"]}
          techVariant="blue"
          actionButton={
            <a
              href="https://benhagg.github.io/React-timer-game/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Play Game</span>
            </a>
          }
        />

        {/* Portfolio Optimization Tool */}
        <ProjectCard
          title="Portfolio Optimization Tool"
          subtitle="Financial Analysis & Risk Management"
          description="A financial analysis tool that uses the yfinance API to pull historical data on stocks in my portfolio. Creates covariance matrices based on predicted returns and optimizes the Sharpe ratio for selected stock groups. I have used this tool to diversify my portfolio and make data-driven investment decisions."
          icon={<TrendingUp size={24} className="text-purple-600" />}
          iconBgColor="bg-purple-100"
          technologies={[
            "Python",
            "pandas",
            "yfinance",
            "Financial Modeling",
            "Data Analysis",
            "Statistics",
          ]}
          techVariant="purple"
          actionButton={
            <div className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
              <span>Private Project</span>
            </div>
          }
        />
      </div>
    </section>
  );
}
