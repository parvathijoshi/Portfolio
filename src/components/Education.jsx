import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#E18AAA] flex justify-center items-center gap-3">
          <FaGraduationCap /> Education
        </h2>

        <div className="space-y-8">
          {/* Master's Degree */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#E18AAA] transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#E18AAA]">
              Master of Applied Computing
            </h3>
            <p className="text-gray-600">
              <span className="font-medium">University of Windsor</span> • Windsor, Ontario  
            </p>
            <p className="text-gray-500">January 2024 - Present | GPA: 8.86</p>
            <p className="text-gray-700 mt-2">
              • Available for a 4 or 8-month internship starting from January 2025.
            </p>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#E18AAA] transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#E18AAA]">
              Bachelor of Technology (Honours), Computer Science and Engineering
            </h3>
            <p className="text-gray-600">
              <span className="font-medium">APJ Abdul Kalam Technological University</span> • Ernakulam, Kerala  
            </p>
            <p className="text-gray-500">July 2017 - June 2021 | GPA: 8.43</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
