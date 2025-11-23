import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gameplay from './components/Gameplay';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import Oracle from './components/Oracle';

const App: React.FC = () => {
  // Simple check to warn about API key if missing (dev only)
  useEffect(() => {
    if (!process.env.API_KEY) {
      console.warn("Gemini API Key is missing. The Oracle chat feature will not function correctly.");
    }
  }, []);

  return (
    <div className="bg-chumbi-dark min-h-screen text-white selection:bg-chumbi-teal selection:text-chumbi-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gameplay />
      <Tokenomics />
      <Footer />
      <Oracle />
    </div>
  );
};

export default App;