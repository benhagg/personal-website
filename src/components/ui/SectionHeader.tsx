interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
      {title}
    </h3>
  );
}
