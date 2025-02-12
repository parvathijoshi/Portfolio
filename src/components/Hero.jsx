const Hero = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white py-16 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            I have <span className="text-green-500">Creative Design</span> Experience
          </h2>
          <p className="text-gray-600 mt-4">
            I'm Parvathi, a Software Engineer, I've been helping businesses solve their problems with my design for 2 years.
          </p>
          <div className="mt-6">
            <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-700 mr-2">Contact Me</button>
            <button className="text-green-500 border border-green-500 px-5 py-2 rounded-md hover:bg-green-500 hover:text-white">View Portfolio</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  