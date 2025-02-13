import resume from '../assets/resume.pdf';

const Navbar = () => {
    return (
      <nav className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-[#E18AAA] font-bold text-2xl">
            <a href="#hero">Parvathi Puthedath Joshy</a>
          </h1>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#hero"
                className="hover:text-[#D37F92] cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-[#D37F92] cursor-pointer"
              >
                Professional Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#D37F92] cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-[#D37F92] cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#D37F92] cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
  
          {/* Download CV Button */}
          <a
            href={resume} 
            download="Parvathi_Joshy_Resume.pdf" 
            className="bg-[#E18AAA] text-white px-4 py-2 rounded-md hover:bg-[#D37F92] transition-all"
          >
            Download CV
          </a>
        </div>
      </nav>
    );
};

export default Navbar;
