export const Navbar = () => {
    return (
      <nav className="sticky top-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400 tracking-wider">betterAuth</h1>
          <ul className="flex gap-6 text-sm sm:text-base text-white font-medium">
            <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
            <li><a href="#get-started" className="hover:text-cyan-400 transition-colors">Get Started</a></li>
            <li><a href="#docs" className="hover:text-cyan-400 transition-colors">Docs</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  