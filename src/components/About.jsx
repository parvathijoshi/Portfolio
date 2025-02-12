const About = () => {
    return (
      <section id="about" className="py-16 px-6 text-center bg-[#FAF3F0]">
        {/* Gradient Heading */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#D16BA5] to-[#86A8E7] text-transparent bg-clip-text">
          About Me
        </h2>
  
        {/* Description */}
        <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
          Hi, I'm <span className="font-semibold text-[#D16BA5]">Parvathi Puthedath Joshy</span>, a Software Engineer with over two years of experience in DevOps and software development. 
          Currently pursuing my Master's in Applied Computing at the University of Windsor, I specialize in <span className="font-semibold text-[#86A8E7]">CI/CD pipeline optimization, automation, and problem-solving</span>.
        </p>
  
        <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
          I’ve worked with technologies like <span className="font-semibold text-[#D16BA5]">Jenkins, Docker, and UrbanCode Deploy</span>, and my experience spans from <span className="font-semibold text-[#86A8E7]">cloud deployments</span> to on-premises systems. My work at IBM earned me the <span className="font-semibold text-[#F39595]">Client and Success Partner Award</span> for Q3 2024.
        </p>
  
        <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
          I’m passionate about building scalable, user-friendly solutions and always eager to connect with others in the tech community. Let’s discuss technology, DevOps, or software development!
        </p>
  
        {/* Skills */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="bg-[#D16BA5] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#B04A85] transition-all">
            React
          </span>
          <span className="bg-[#86A8E7] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#6B90D1] transition-all">
            Node.js
          </span>
          <span className="bg-[#F39595] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#D97878] transition-all">
            Tailwind CSS
          </span>
          <span className="bg-[#C1A1D3] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#A783BB] transition-all">
            DevOps
          </span>
        </div>
      </section>
    );
  };
  
  export default About;
  