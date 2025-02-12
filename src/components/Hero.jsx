import profilePicture from '../assets/profilepicture.jpg'; // Assuming it's in 'src/assets'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16 px-6">
      <div className="text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={profilePicture}
            alt="Parvathi"
            className="w-48 h-48 rounded-full border-4 border-[#E18AAA] shadow-lg object-cover" // Changed border color to #E18AAA
          />
        </div>
        
        <h2 className="text-4xl font-bold text-gray-800">
          Experienced <span className="text-[#E18AAA]">Software Engineer</span> based in Canada
        </h2>
        <p className="text-gray-600 mt-4">
          I'm Parvathi, a Software Engineer, I've been helping businesses solve their problems with my design for 2 years.
        </p>
        
        <div className="mt-6">
          <button className="bg-[#E18AAA] text-white px-5 py-2 rounded-md hover:bg-[#D37F92] mr-2">
            Contact Me
          </button>
          <button className="text-[#E18AAA] border border-[#E18AAA] px-5 py-2 rounded-md hover:bg-[#E18AAA] hover:text-white">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
