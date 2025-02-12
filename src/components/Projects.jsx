const projects = [
    {
      title: "Surplus Resources Donation Platform",
      duration: "Sep 2024 - Dec 2024",
      organization: "University of Windsor • Windsor, Ontario",
      tech: ["Django", "React", "PostgreSQL", "Docker", "Tailwind CSS", "Google Maps API"],
      description: [
        "Created a platform for efficient redistribution of surplus goods, including food and clothing to nearby NGOs.",
        "Integrated geolocation feature using PostGIS to filter donation listings based on proximity and relevance.",
        "Designed real-time item tracking features to facilitate communication and logistics between donors and NGOs.",
        "Built APIs for creating, browsing, and reserving donations, ensuring smooth transactions and accessibility."
      ],
      link: "https://github.com/parvathijoshi/SamaritanConnect",
    },
    {
      title: "Idea Submission Platform",
      duration: "Sep 2024 - Dec 2024",
      organization: "Rocket Innovation Studio • Windsor, Ontario",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Python", "BART", "NLP", "Figma", "Docker"],
      description: [
        "Developed an innovative platform for employees to submit, categorize, and manage ideas, integrating secure login with Node.js and React.",
        "Designed an idea submission page with search, deletion, and tagging powered by BART NLP models, along with an approvals and drafts system using PostgreSQL.",
        "Containerized the application using Docker and implemented microservices for scalability."
      ],
      link: "https://github.com/parvathijoshi/MindPalace-IdeaHub",
    },
    {
      title: "Distributed File System Using Socket Programming",
      duration: "June 2024 - Aug 2024",
      organization: "University of Windsor • Windsor, Ontario",
      tech: ["C", "Linux"],
      description: [
        "Designed and implemented a distributed file system to handle file storage and retrieval across multiple servers.",
        "Managed a system architecture that allowed up to 10 simultaneous client-server connections with efficient resource handling and error management.",
        "Developed functionalities for uploading, downloading, deleting, and archiving files, improving system usability and performance."
      ],
      link: "https://github.com/parvathijoshi/DistributedFileSystem-SocketProgramming",
    }
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#E18AAA]">Projects</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A selection of projects that showcase my development expertise and problem-solving abilities.
          </p>
  
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.duration} | {project.organization}</p>
                
                <ul className="mt-4 text-gray-600 text-left space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#E18AAA] mr-2">✔</span> {point}
                    </li>
                  ))}
                </ul>
  
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#E18AAA] text-white px-3 py-1 rounded-full text-sm">
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
  