import { ReactNode } from "react";
import Card from "../ui/Card";
import SkillTag from "../ui/SkillTag";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  iconBgColor: string;
  technologies: string[];
  techVariant: "blue" | "green" | "purple" | "orange";
  actionButton: ReactNode;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  icon,
  iconBgColor,
  technologies,
  techVariant,
  actionButton,
}: ProjectCardProps) {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <div className={`p-2 ${iconBgColor} rounded-lg`}>{icon}</div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
            <p
              className={`font-medium ${
                techVariant === "green"
                  ? "text-green-600"
                  : techVariant === "purple"
                  ? "text-purple-600"
                  : techVariant === "orange"
                  ? "text-orange-600"
                  : "text-blue-600"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex justify-start sm:justify-end">
          {actionButton}
        </div>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <SkillTag key={tech} skill={tech} variant={techVariant} />
        ))}
      </div>
    </Card>
  );
}
