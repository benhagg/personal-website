import { Github, Timer, Mic, TrendingUp, ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mb-12">
      <SectionHeader title="Featured Projects" />
      <div className="grid gap-6">
        {/* AI Note Taker */}
        <ProjectCard
          title="AI Note Taker"
          subtitle="Local AI-Powered Transcription & Summarization"
          description="A very useful project I use every day to supplement my note-taking in class and ensure I don't miss anything the teacher says. Uses locally hosted models to transcribe and summarize audio recordings, keeping all data private. Planning to implement more agentic features in the future, including a to-do list with due dates and RAG integration with a vectorized database of my textbooks."
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
          description="A sophisticated financial analysis tool that uses the yfinance API to pull historical data on stocks in my portfolio. Employs Python and pandas to create covariance matrices based on predicted returns and optimizes the Sharpe ratio for selected stock groups. This tool has been instrumental in helping me diversify my portfolio and make data-driven investment decisions."
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
