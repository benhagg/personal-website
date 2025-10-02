import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import SkillTag from "../ui/SkillTag";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  variant: "blue" | "green" | "purple" | "orange";
}

function SkillCategory({ title, skills, variant }: SkillCategoryProps) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} variant={variant} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="mb-12">
      <SectionHeader title="Skills" />
      <Card>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillCategory
            title="Languages"
            skills={["Python", "TypeScript", "JavaScript", "C++", "C#", "SQL"]}
            variant="blue"
          />
          <SkillCategory
            title="Frameworks & Development"
            skills={[
              "React",
              "React Native",
              "Flask",
              "Django",
              "Node.js",
              "ASP.NET",
            ]}
            variant="green"
          />
          <SkillCategory
            title="Cloud & DevOps"
            skills={[
              "AWS",
              "Azure ML",
              "GitHub Actions",
              "CI/CD",
              "Docker",
              "Terraform",
            ]}
            variant="purple"
          />
          <SkillCategory
            title="Data & Analytics"
            skills={[
              "Azure Machine Learning",
              "Data Pipelines",
              "Pandas",
              "NumPy",
              "scikit-learn",
            ]}
            variant="orange"
          />
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">
            Professional Development
          </h4>
          <p className="text-gray-700">
            Spent 300+ hours in online courses in web & mobile development
            (React, React Native, Django, Flask), cloud computing (AWS, Google
            Cloud), and cybersecurity (Hack The Box, Try Hack Me).
          </p>
        </div>
      </Card>
    </section>
  );
}
