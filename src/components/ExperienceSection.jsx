import rbcLogo from "../assets/rbc.jpg";
import ibmLogo from "../assets/ibm.jpg";

const experiences = [
  {
    title: "DevOps Developer Co-op",
    organization: "RBC • Toronto, Ontario",
    duration: "January 2025 – Present",
    tech: [
      "GitHub Actions",
      "Slackbot",
      "CI/CD",
      "Jenkins",
      "Docker",
      "Kubernetes"
    ],
    description: [
      "Optimizing and troubleshooting CI/CD pipelines with GitHub Actions.",
      "Resolving deployment issues and improving automation with Slackbot notifications.",
      "Supporting continuous workflow improvements for faster deployments."
    ],
    logo: rbcLogo,
  },
  {
    title: "Infrastructure Specialist",
    organization: "IBM India Pvt Ltd • Bangalore, India",
    duration: "May 2024 – August 2024",
    tech: [
      "UrbanCode Deploy",
      "Jenkins",
      "GitHub",
      "JFrog Artifactory",
      "Helm",
      "Docker",
      "ServiceNow"
    ],
    description: [
      "Streamlined CI/CD processes with Jenkins, Helm, and Docker.",
      "Automated deployment pipelines with Groovy and PowerShell.",
      "Led knowledge transfer sessions and earned recognition for excellence."
    ],
    logo: ibmLogo,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#E18AAA]">Professional Experience</h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          A snapshot of my journey in DevOps and Infrastructure roles with impactful contributions.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <img src={experience.logo} alt={`${experience.organization} logo`} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                  <p className="text-sm text-gray-500">{experience.organization}</p>
                  <p className="text-sm text-gray-500">{experience.duration}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {experience.description.map((point, i) => (
                  <div key={i} className="flex items-start text-gray-700 text-base">
                    <span className="text-[#E18AAA] mr-2">✔</span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {experience.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#E18AAA] text-white px-4 py-2 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
