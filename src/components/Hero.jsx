const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16 px-6">
      <div className="text-center flex flex-col items-center">
        <img 
          src="https://github.com/parvathijoshi/Portfolio/blob/main/src/assets/profilepicture.jpg" 
          alt="Parvathi" 
          className="w-32 h-32 rounded-full mb-6 object-cover" 
        />
        <h2 className="text-4xl font-bold text-gray-800">
          Hi, I'm <span className="text-green-500">Parvathi</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Software Engineer with 2+ years of experience in DevOps & software development. Currently pursuing a Master’s in Applied Computing at the University of Windsor.
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
