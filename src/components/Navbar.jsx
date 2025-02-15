import resume from '../assets/resume.pdf';
import favicon from '../assets/p.png'; // Import favicon image

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 font-[Inter]">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo with Favicon */}
        <div className="flex items-center space-x-3">
          <img src={favicon} alt="Logo" className="w-8 h-8" /> 
          <h1 className="text-[#E18AAA] font-extrabold text-2xl tracking-wide">
            <a href="#hero">Parvathi Puthedath Joshy</a>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-[#D37F92] transition-all">About</a>
          </li>
          <li>
            <a href="#education" className="hover:text-[#D37F92] transition-all">Education</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-[#D37F92] transition-all">Professional Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#D37F92] transition-all">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#D37F92] transition-all">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#D37F92] transition-all">Contact</a>
          </li>
        </ul>

        {/* Download CV Button */}
        <a
          href={resume}
          download="Parvathi_Joshy_Resume.pdf"
          className="bg-[#E18AAA] text-white px-5 py-2 rounded-md hover:bg-[#D37F92] transition-transform transform hover:scale-105 shadow-lg"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
