const Footer = () => {
    return (
      <footer className="bg-green-600 text-white text-center py-6">
        <p className="text-lg font-medium">© 2025 [Your Name]. All Rights Reserved.</p>
        <div className="mt-3 flex justify-center gap-6">
          <a 
            href="https://github.com/yourgithub" 
            className="hover:text-green-300 transition duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/yourlinkedin" 
            className="hover:text-green-300 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  