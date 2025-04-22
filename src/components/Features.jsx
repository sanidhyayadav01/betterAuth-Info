const features = [
    {
      title: "Seamless SSO",
      description: "Authenticate across multiple apps with a single login. Save time and enhance user experience.",
    },
    {
      title: "JWT & Session Support",
      description: "Flexible token strategies for both stateless and stateful backends.",
    },
    {
      title: "Built-in Validations",
      description: "Protect your routes with preconfigured input validation and role checks.",
    },
    {
      title: "Plug & Play",
      description: "Integrates into your existing backend with just a few lines of code.",
    },
  ];
  
  export const Features = () => {
    return (
      <section id="features" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose betterAuth?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  