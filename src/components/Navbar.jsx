const Navbar = () => {
    return (
      <nav className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-[#E18AAA] font-bold text-2xl">Parvathi Puthedath Joshy</h1>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-[#D37F92] cursor-pointer">About</li>
            <li className="hover:text-[#D37F92] cursor-pointer">Skills</li>
            <li className="hover:text-[#D37F92] cursor-pointer">Portfolio</li>
            <li className="hover:text-[#D37F92] cursor-pointer">Testimonial</li>
          </ul>
          <button className="bg-[#E18AAA] text-white px-4 py-2 rounded-md hover:bg-[#D37F92]">
            Download CV
          </button>
        </div>
      </nav>
    );
};

export default Navbar;
