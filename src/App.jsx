import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'betterAuth | Authentication Made Simple';
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
