import SectionHeader from "../ui/SectionHeader";
import WorkExperienceCard from "../ui/WorkExperienceCard";

const workExperiences = [
  {
    company: "Silver Fund",
    location: "Provo, UT",
    position: "Software Engineer",
    duration: "Jan 2025 – Current",
    responsibilities: [
      "Redesigned cloud architecture using Docker, Terraform, and AWS (EB, EC2, VPC, IAM), improving reliability and reducing infrastructure costs by 50%.",
      "Automated deployments with CI/CD pipelines to simplify future DevOps operations.",
      "Migrated main website to Next.js with TypeScript and ShadCN, modernizing UI/UX",
    ],
  },
  {
    company: "SureMark Digital",
    location: "Provo, UT",
    position: "Frontend and QA Engineering Intern",
    duration: "Apr 2025 – Aug 2025",
    responsibilities: [
      "Developed a unified React/TypeScript UI integrating internal npm packages, a browser extension, and multiple apps, simplifying cryptographic workflows, and improving secure content verification for users.",
      "Developed comprehensive unit tests for frontend React components using Vitest and Jest. Starting with the most business critical components, I increased test coverage from 5% to 60%",
      "Implemented some full-stack features including expanding support of signing and verifying web-based content by 200%",
    ],
  },
  {
    company: "Spot Parking",
    location: "Provo, UT",
    position: "Backend Engineer Intern",
    duration: "Jan 2025 – May 2025",
    responsibilities: [
      "Designed a relational database schema for scalability and migrated a NoSQL DynamoDB database to an AWS RDS MySQL instance, using Python scripts for data ETL.",
    ],
  },
  {
    company: "BYU AC Shop",
    location: "Provo, UT",
    position: "Controls Programming Technician",
    duration: "Jul 2024 – May 2025",
    responsibilities: [
      "Transformed legacy programming for several campus-wide distributed utility controls systems into GCL+ line code, improving system efficiency and maintainability",
      "Developed full-stack features and resolved bugs on an internal website using JavaScript and Flask",
    ],
  },
];

export default function WorkExperienceSection() {
  return (
    <section className="mb-12">
      <SectionHeader title="Work Experience" />
      <div className="space-y-6">
        {workExperiences.map((experience, index) => (
          <WorkExperienceCard
            key={index}
            company={experience.company}
            location={experience.location}
            position={experience.position}
            duration={experience.duration}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  );
}
