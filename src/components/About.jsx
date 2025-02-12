const About = () => {
    return (
      <section id="about" className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-600">About Me</h2>
        <p className="mt-4 text-lg text-gray-700">
          I am a software developer with expertise in **React, Node.js, and DevOps**. 
          I love building web applications that are scalable, responsive, and user-friendly.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-lg">React</span>
          <span className="bg-purple-600 text-white px-4 py-2 rounded-lg">Node.js</span>
          <span className="bg-purple-600 text-white px-4 py-2 rounded-lg">Tailwind CSS</span>
          <span className="bg-purple-600 text-white px-4 py-2 rounded-lg">DevOps</span>
        </div>
      </section>
    );
  };
  
  export default About;
  