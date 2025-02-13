import { useState, useEffect } from 'react';
import { FaCode, FaTools, FaRocket, FaUserTie } from 'react-icons/fa'; // Importing icons
import profilePicture from '../assets/profilepicture.jpg';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState("Software Engineer");
  const titles = [
    { text: "Software Engineer", icon: <FaCode className="inline-block text-[#E18AAA]" /> },
    { text: "Software Developer", icon: <FaTools className="inline-block text-[#E18AAA]" /> },
    { text: "DevOps Engineer", icon: <FaRocket className="inline-block text-[#E18AAA]" /> },
    { text: "Release Engineer", icon: <FaUserTie className="inline-block text-[#E18AAA]" /> },
  ];
  const [show, setShow] = useState(true);

  useEffect(() => {
    const changeTitle = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = titles.findIndex((item) => item.text === prevTitle);
          const nextIndex = (currentIndex + 1) % titles.length;
          return titles[nextIndex].text;
        });
        setShow(true);
      }, 500);
    }, 4000);

    return () => clearInterval(changeTitle);
  }, [titles]);

  return (
    <section id = "hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 relative py-16 px-6">
      {/* Background Illustration */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-10 bg-no-repeat bg-cover bg-center" 
           style={{ backgroundImage: 'url("/illustration.png")' }}></div>

      <div className="text-center relative z-10">
        {/* Profile Picture with Animated Border */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src={profilePicture}
              alt="Parvathi"
              className="w-48 h-48 rounded-full border-4 border-[#E18AAA] shadow-lg object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        {/* Animated Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          Experienced{" "}
          <span
            className={`text-[#E18AAA] transition-all duration-1000 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            {titles.find((item) => item.text === currentTitle)?.icon} {currentTitle}
          </span>{" "}
          based in Canada
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          I'm Parvathi, a {currentTitle}, with over 2 years of experience, designing solutions that help businesses streamline operations and drive success.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6">
          <a href="#contact">
            <button className="bg-[#E18AAA] text-white px-6 py-3 rounded-md hover:bg-[#D37F92] transition-transform transform hover:scale-105 shadow-lg mr-3">
              Contact Me
            </button>
          </a>
          <a href="#projects">
            <button className="text-[#E18AAA] border border-[#E18AAA] px-6 py-3 rounded-md hover:bg-[#E18AAA] hover:text-white transition-transform transform hover:scale-105 shadow-lg">
              View Portfolio
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
