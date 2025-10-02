interface SkillTagProps {
  skill: string;
  variant?: "blue" | "green" | "purple" | "orange";
}

export default function SkillTag({ skill, variant = "blue" }: SkillTagProps) {
  const variantClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
  };

  return (
    <span
      className={`px-3 py-1 ${variantClasses[variant]} rounded-full text-sm`}
    >
      {skill}
    </span>
  );
}
