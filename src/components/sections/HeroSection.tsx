import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Software & Cloud Engineer
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
        I love building software.
        <br /> Cloud | DevOps | Engineering
      </p>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-center gap-6 text-gray-600">
        <div className="flex items-center space-x-2">
          <MapPin size={16} />
          <span>Provo, UT</span>
        </div>
      </div>
    </div>
  );
}
