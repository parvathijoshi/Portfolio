const Navbar = () => {
    return (
      <nav className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-green-600 font-bold text-2xl">Parvathi Puthedath Joshy</h1>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-green-500 cursor-pointer">About</li>
            <li className="hover:text-green-500 cursor-pointer">Skills</li>
            <li className="hover:text-green-500 cursor-pointer">Portfolio</li>
            <li className="hover:text-green-500 cursor-pointer">Testimonial</li>
          </ul>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Download CV
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  