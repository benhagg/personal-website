import Card from "../ui/Card";

interface WorkExperienceCardProps {
  company: string;
  location: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export default function WorkExperienceCard({
  company,
  location,
  position,
  duration,
  responsibilities,
}: WorkExperienceCardProps) {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <h4 className="text-xl font-semibold text-gray-900">{company}</h4>
        <span className="text-gray-600">{location}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
        <p className="text-blue-600 font-medium">{position}</p>
        <span className="text-gray-600">{duration}</span>
      </div>
      <ul className="text-gray-700 space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>• {responsibility}</li>
        ))}
      </ul>
    </Card>
  );
}
