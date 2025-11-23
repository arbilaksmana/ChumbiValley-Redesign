import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms with refined speeds/distances
  const yStars = useTransform(scrollY, [0, 1000], [0, 400]);
  const yForest = useTransform(scrollY, [0, 1000], [0, 150]);
  const scaleForest = useTransform(scrollY, [0, 1000], [1.1, 1.25]); // Subtle zoom in effect
  const yText = useTransform(scrollY, [0, 500], [0, 250]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#050b14]">
      {/* Background Layer 1: Stars/Dust */}
      <motion.div 
        style={{ y: yStars }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-60 z-0"
      />

      {/* Background Layer 2: Forest with overlay */}
      <motion.div 
        style={{ y: yForest, scale: scaleForest }}
        className="absolute inset-0 z-0 origin-bottom"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b14]/40 to-[#050b14] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2832&auto=format&fit=crop" 
          alt="Forest" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
        />
      </motion.div>

      {/* Floating Particles/Fireflies */}
      <div className="absolute inset-0 z-5 pointer-events-none">
         {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-chumbi-gold rounded-full shadow-[0_0_10px_#fbbf24] blur-[1px]"
              initial={{ 
                x: Math.random() * 100 + 'vw', 
                y: Math.random() * 100 + 'vh',
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                y: [null, Math.random() * -100 - 50], 
                x: [null, (Math.random() - 0.5) * 50],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: 6 + Math.random() * 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 5 
              }}
            />
         ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText } as any}
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
           {/* Glowing orb behind logo */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-chumbi-teal/10 rounded-full blur-[80px]" />
           
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-cinzel font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
             CHUMBI
           </h1>
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-chumbi-teal tracking-widest drop-shadow-[0_0_30px_rgba(45,212,191,0.5)] -mt-2 md:-mt-6">
             VALLEY
           </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="max-w-xl mx-auto text-lg md:text-xl font-quicksand text-gray-300 mb-10 leading-relaxed drop-shadow-md"
        >
          Enter a mystical world. Breed, battle, and explore in an enchanting blockchain RPG.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-chumbi-teal to-chumbi-forest rounded-full font-cinzel font-bold text-lg text-white overflow-hidden shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(45,212,191,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              <Play className="fill-current" size={20} /> Play For Free
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button className="px-8 py-4 border border-chumbi-gold/50 text-chumbi-gold font-cinzel font-bold rounded-full hover:bg-chumbi-gold/10 transition-colors backdrop-blur-sm">
            Watch Trailer
          </button>
        </motion.div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        style={{ opacity: opacityText } as any}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-quicksand font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-chumbi-teal to-transparent relative overflow-hidden rounded-full opacity-50">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white blur-[2px]"
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-chumbi-dark via-chumbi-dark/80 to-transparent z-10" />
    </section>
  );
};

export default Hero;