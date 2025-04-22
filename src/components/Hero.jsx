export const Hero = () => {
    return (
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 opacity-30 animate-pulse blur-2xl rounded-xl"></div>
  
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 text-white drop-shadow-md">
            One Auth to Rule Them All
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            betterAuth offers seamless, secure, and scalable authentication for modern applications.
          </p>
          <a
            href="#get-started"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  };
  