import { useState } from 'react';
import { 
  FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaGitAlt, FaJenkins, 
  FaAndroid, FaWindows, FaLinux, FaApple, FaDatabase, FaTools, 
  FaTerminal, FaCuttlefish, FaChartBar, FaCode 
} from "react-icons/fa";
import { 
  SiCplusplus, SiMongodb, SiMysql, SiJira, SiTableau 
} from "react-icons/si";

const allSkills = {
  all: [
    { name: "Java", icon: <FaJava className="text-orange-600 text-3xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
    { name: "C", icon: <FaCuttlefish className="text-blue-700 text-3xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <FaCss3 className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
    { name: "Bash", icon: <FaTerminal className="text-gray-600 text-3xl" /> },
    { name: "Groovy", icon: <FaCode className="text-green-500 text-3xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600 text-3xl" /> },
    { name: "Jenkins", icon: <FaJenkins className="text-red-500 text-3xl" /> },
    { name: "Android Studio", icon: <FaAndroid className="text-green-500 text-3xl" /> },
    { name: "Windows", icon: <FaWindows className="text-blue-600 text-3xl" /> },
    { name: "Linux", icon: <FaLinux className="text-black text-3xl" /> },
    { name: "MacOS", icon: <FaApple className="text-gray-600 text-3xl" /> },
    { name: "ServiceNow", icon: <FaTools className="text-green-500 text-3xl" /> },
    { name: "Power BI", icon: <FaChartBar className="text-yellow-600 text-3xl" /> },
  ],
  programmingLanguages: [
    { name: "Java", icon: <FaJava className="text-orange-600 text-3xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600 text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
    { name: "C", icon: <FaCuttlefish className="text-blue-700 text-3xl" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", icon: <FaCss3 className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
    { name: "Bash", icon: <FaTerminal className="text-gray-600 text-3xl" /> },
    { name: "Groovy", icon: <FaCode className="text-green-500 text-3xl" /> },
  ],
  databases: [
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-600 text-3xl" /> },
    { name: "Jenkins", icon: <FaJenkins className="text-red-500 text-3xl" /> },
    { name: "Android Studio", icon: <FaAndroid className="text-green-500 text-3xl" /> },
    { name: "ServiceNow", icon: <FaTools className="text-green-500 text-3xl" /> },
    { name: "Power BI", icon: <FaChartBar className="text-yellow-600 text-3xl" /> },
  ],
  operatingSystems: [
    { name: "Windows", icon: <FaWindows className="text-blue-600 text-3xl" /> },
    { name: "Linux", icon: <FaLinux className="text-black text-3xl" /> },
    { name: "MacOS", icon: <FaApple className="text-gray-600 text-3xl" /> },
  ],
  technologies: [
    { name: "ServiceNow", icon: <FaTools className="text-green-500 text-3xl" /> },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#E18AAA] mb-6">Skills</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-6">
          {['all', 'programmingLanguages', 'databases', 'tools', 'operatingSystems', 'technologies'].map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`px-6 py-2 mx-2 rounded-md font-semibold ${
                selectedCategory === category ? 'bg-[#E18AAA] text-white' : 'bg-[#F8F1F7] text-[#D37F92]'
              }`}
            >
              {category === 'all' ? 'All' : category.replace(/([A-Z])/g, ' $1').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Display Skills Based on Category */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 px-6">
          {allSkills[selectedCategory].map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg hover:scale-105 transition-all duration-300 hover:bg-[#E18AAA] hover:text-white">
              {skill.icon}
              <p className="text-lg font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
