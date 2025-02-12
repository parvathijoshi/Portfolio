const About = () => {
    return (
      <section id="about" className="py-16 px-6 text-center bg-[#FAF3F0]">
        {/* Gradient Heading */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#D16BA5] to-[#86A8E7] text-transparent bg-clip-text">
          About Me
        </h2>
  
        {/* Description */}
        <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
          I am a passionate <span className="font-semibold text-[#D16BA5]">Software Developer</span> specializing in 
          <span className="font-semibold text-[#86A8E7]"> React, Node.js, and DevOps</span>. 
          I love creating scalable, elegant, and user-friendly web applications.
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
  