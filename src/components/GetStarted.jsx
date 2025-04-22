export const GetStarted = () => {
    return (
      <section id="get-started" className="py-20 px-6 bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Get Started in Seconds</h2>
  
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-left shadow-lg">
            <p className="mb-4 text-lg">Install the npm package:</p>
            <pre className="bg-black text-green-400 p-4 rounded-md overflow-x-auto mb-6">
              <code>npm install betterauth</code>
            </pre>
  
            <p className="mb-4 text-lg">Initialize betterAuth in your backend:</p>
            <pre className="bg-black text-cyan-300 p-4 rounded-md overflow-x-auto mb-6">
              <code>{`import betterAuth from 'betterauth';
  
  betterAuth({
    jwtSecret: 'your-secret',
    dbUrl: 'your-database-url',
    otp: true,
  });`}</code>
            </pre>
  
            <p className="text-gray-300">✨ You’re all set to authenticate users securely and effortlessly.</p>
          </div>
        </div>
      </section>
    );
  };
  