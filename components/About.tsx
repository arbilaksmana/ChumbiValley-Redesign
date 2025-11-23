import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Refined Parallax Values based on scrollYProgress
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); 
  const imgY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [5, -5]); // Gentle rotation while scrolling

  // Text Animation Variants
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const imageEntranceVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} id="about" className="py-32 relative overflow-hidden bg-[#0a101d]">
      {/* Dynamic Background Elements */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-1/2 h-[120%] -mt-[10%] bg-gradient-to-l from-chumbi-forest/10 to-transparent pointer-events-none z-0 blur-3xl rounded-full" 
      />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-chumbi-purple/10 to-transparent blur-3xl pointer-events-none" />

      {/* Mystical Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Magic Dust */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-chumbi-teal/30 blur-[1px]"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: 0,
              opacity: 0
            }}
            animate={{
              y: [null, `${Math.random() * -100}%`], // Float upwards
              x: [null, `${(Math.random() - 0.5) * 50}%`], // Drift sideways
              scale: [0, Math.random() + 0.5, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
            } as any}
          />
        ))}

        {/* Slow Moving Aura Blobs */}
        {[...Array(3)].map((_, i) => (
           <motion.div
             key={`aura-${i}`}
             className="absolute rounded-full opacity-5 blur-[80px]"
             style={{
               background: i === 0 ? '#fbbf24' : i === 1 ? '#2dd4bf' : '#8b5cf6', // Gold, Teal, Purple
               width: '30vw',
               height: '30vw',
               top: `${(i * 30)}%`,
               left: `${(i * 20)}%`,
             } as any}
             animate={{
               x: [0, 100, 0],
               y: [0, 50, 0],
               scale: [1, 1.2, 1],
             }}
             transition={{
               duration: 20 + i * 5,
               repeat: Infinity,
               repeatType: "reverse",
               ease: "easeInOut"
             }}
           />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={textItemVariants} className="flex items-center gap-4 mb-6">
               <div className="h-0.5 w-12 bg-chumbi-gold shadow-[0_0_10px_#fbbf24]" />
               <span className="text-chumbi-gold font-bold uppercase tracking-[0.2em] text-sm font-quicksand">Lore & World</span>
            </motion.div>
            
            <motion.h2 variants={textItemVariants} className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-8 leading-tight">
              A World of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-chumbi-teal to-blue-400 inline-block">Pure Wonder</span>
            </motion.h2>
            
            <motion.p variants={textItemVariants} className="text-gray-400 font-quicksand text-lg mb-6 leading-relaxed">
              Chumbi Valley is an enchanting RPG Play-to-Earn blockchain game built on BSC & Polygon. 
              Chumbi are adorable NFT creatures that inhabit a lush, mysterious forest valley. 
              All items and creatures are blockchain-based tokens and NFTs.
            </motion.p>
            
            <motion.div variants={textItemVariants}>
                <p className="text-gray-400 font-quicksand text-lg mb-10 leading-relaxed border-l-2 border-chumbi-teal/30 pl-6">
                Visuals and gameplay are completely original and inspired by classics like Pokémon and Studio Ghibli films.
                </p>
            </motion.div>

            <motion.div variants={textItemVariants}>
                <button className="flex items-center gap-3 text-chumbi-teal font-bold hover:text-white transition-colors group text-lg">
                Read the Whitepaper 
                <span className="bg-chumbi-teal/10 p-2 rounded-full group-hover:bg-chumbi-teal group-hover:text-chumbi-dark transition-all">
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
                </button>
            </motion.div>
          </motion.div>

          {/* Visual Content - Floating Cards/Images with Parallax */}
          <motion.div
             style={{ y: imgY }}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={imageEntranceVariants}
             className="relative h-[600px] flex items-center justify-center perspective-1000"
          >
             {/* Decorative Animated Rings */}
             <div className="absolute inset-0 border border-chumbi-teal/10 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute inset-12 border border-dashed border-chumbi-gold/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-chumbi-teal/5 rounded-full blur-2xl animate-pulse" />

             {/* Central Image with rotation and glow */}
             <motion.div 
               style={{ rotate: imgRotate }}
               className="relative z-10"
             >
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                    <div className="absolute inset-0 bg-chumbi-teal/20 blur-2xl rounded-[3rem] transform scale-90 translate-y-4" />
                    <img 
                    src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Chumbi Creature" 
                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[3rem] border border-white/10 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-8 -left-8 bg-chumbi-dark/80 backdrop-blur-md border border-chumbi-gold/30 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
                    <span className="text-sm font-bold font-cinzel text-chumbi-gold tracking-wide">Live on Polygon</span>
                    </div>
                </motion.div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;