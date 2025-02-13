const projects = [
    {
      title: "Surplus Resources Donation Platform",
      duration: "Sep 2024 - Dec 2024",
      organization: "University of Windsor • Windsor, Ontario",
      tech: ["Django", "React", "PostgreSQL", "Docker", "Tailwind CSS", "Google Maps API"],
      description: "A platform to efficiently redistribute surplus goods to nearby NGOs, with real-time item tracking and geolocation-based listings.",
      link: "https://github.com/parvathijoshi/SamaritanConnect",
    },
    {
      title: "Idea Submission Platform",
      duration: "Sep 2024 - Dec 2024",
      organization: "Rocket Innovation Studio • Windsor, Ontario",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Python", "BART", "NLP", "Figma", "Docker"],
      description: "A platform for employees to submit, manage, and categorize ideas, featuring secure login and NLP-powered idea categorization.",
      link: "https://github.com/parvathijoshi/MindPalace-IdeaHub",
    },
    {
      title: "Predictive Analysis of Employee Attrition",
      duration: "May 2024 – Aug 2024",
      organization: "University of Windsor • Windsor, Ontario",
      tech: ["Python", "Jupyter Notebook", "Tableau", "PowerBI", "Pandas", "NumPy", "Scikit-learn"],
      description: "Used ML models to predict employee turnover with 97% accuracy, visualized retention strategies with Tableau and PowerBI.",
      link: "https://github.com/parvathijoshi/EmployeeAttritionPrediction",
    },
    {
      title: "Distributed File System Using Socket Programming",
      duration: "June 2024 - Aug 2024",
      organization: "University of Windsor • Windsor, Ontario",
      tech: ["C", "Linux"],
      description: "Built a distributed file system supporting multiple client-server connections, with efficient file handling and error management.",
      link: "https://github.com/parvathijoshi/DistributedFileSystem-SocketProgramming",
    },
    {
      title: "Property Cost Analysis System",
      duration: "Jan 2024 – Apr 2024",
      organization: "University of Windsor • Windsor, Ontario",
      tech: ["Java", "Selenium", "HTML", "CSS", "JavaScript"],
      description: "Created a system to analyze property rental costs in Canada using web scraping and advanced algorithms for cost prediction.",
      link: "https://github.com/parvathijoshi/property-cost-analysis",
    },
    {
      title: "Currency Detection App for the Visually Impaired",
      duration: "Sept 2019 - Jan 2020",
      organization: "APJ Abdul Kalam Technological University • Kerala, India",
      tech: ["Java", "OCR", "Android Development"],
      description: "Developed an Android app that identifies currency denominations using OCR and provides voice-based feedback.",
      link: "#",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 px-6 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#E18AAA]">Projects</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Showcasing a selection of impactful projects that demonstrate my skills and creativity.
          </p>
  
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{project.duration} | {project.organization}</p>
  
                  <p className="mt-4 text-gray-700">{project.description}</p>
                </div>
  
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#E18AAA] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
  
                <a 
                  href={project.link} 
                  className="mt-6 inline-block text-[#E18AAA] font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  