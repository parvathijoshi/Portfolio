const Footer = () => {
    return (
      <footer className="bg-[#E18AAA] text-white text-center py-6">
        <p className="text-lg font-medium">© 2025 PPJ All Rights Reserved.</p>
        <div className="mt-3 flex justify-center gap-6">
          <a 
            href="https://github.com/parvathijoshi" 
            className="hover:text-[#D37F92] transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/parvathi-p-j" 
            className="hover:text-[#D37F92] transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    );
};

export default Footer;
