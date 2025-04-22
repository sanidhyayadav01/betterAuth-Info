export const Footer = () => {
    return (
      <footer id="contact" className="bg-black text-gray-400 py-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">betterAuth</h3>
            <p className="text-sm">
              Built with ❤️ for developers. Fast. Secure. Scalable.
            </p>
          </div>
  
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#get-started" className="hover:text-white transition-colors">
              Docs
            </a>
            <a href="mailto:team.betterAuth@gmail.com" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="https://github.com/sanidhyayadav01/betterAuth-info" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
  
        <div className="mt-6 text-xs text-center text-gray-600">
          &copy; {new Date().getFullYear()} betterAuth. All rights reserved.
        </div>
      </footer>
    );
  };
  