import { useState, useEffect } from 'react';
import profilePicture from '../assets/profilepicture.jpg'; // Assuming it's in 'src/assets'

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState("Software Engineer");
  const titles = [
    "Software Engineer",
    "Software Developer",
    "DevOps Engineer",
    "Release Engineer",
  ];
  const [show, setShow] = useState(true); // For fade-in and fade-out

  useEffect(() => {
    const changeTitle = setInterval(() => {
      setShow(false); // Start fade-out
      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = titles.indexOf(prevTitle);
          const nextIndex = (currentIndex + 1) % titles.length;
          return titles[nextIndex];
        });
        setShow(true); // Start fade-in
      }, 500); // Wait for the fade-out to complete before changing the title
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(changeTitle); // Clear interval on component unmount
  }, [titles]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16 px-6">
      <div className="text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={profilePicture}
            alt="Parvathi"
            className="w-48 h-48 rounded-full border-4 border-[#E18AAA] shadow-lg object-cover"
          />
        </div>
        
        <h2 className="text-4xl font-bold text-gray-800">
          Experienced{" "}
          <span
            className={`text-[#E18AAA] transition-all duration-1000 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentTitle}
          </span>{" "}
          based in Canada
        </h2>
        <p className="text-gray-600 mt-4">
          I'm Parvathi, a {currentTitle}, and I've been helping businesses solve their problems with my design for 2 years.
        </p>
        
        <div className="mt-6">
          {/* Contact Me Button */}
          <a href="#contact">
            <button className="bg-[#E18AAA] text-white px-5 py-2 rounded-md hover:bg-[#D37F92] mr-2">
              Contact Me
            </button>
          </a>

          {/* View Portfolio Button */}
          <a href="#projects">
            <button className="text-[#E18AAA] border border-[#E18AAA] px-5 py-2 rounded-md hover:bg-[#E18AAA] hover:text-white">
              View Portfolio
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
