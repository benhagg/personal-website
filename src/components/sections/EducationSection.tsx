import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function EducationSection() {
  return (
    <section className="mb-12">
      <SectionHeader title="Education" />
      <Card>
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
            Cybersecurity, Cloud Computing, Networking, Infrastructure
          </li>
        </ul>
      </Card>
    </section>
  );
}
