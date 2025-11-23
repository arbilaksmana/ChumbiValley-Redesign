import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Sword, Sprout, Home, Search, Map } from 'lucide-react';

const features = [
  {
    icon: <Sprout size={28} />,
    title: "Breed & Collect",
    desc: "Breed unique Chumbi with rare body parts and abilities.",
    color: "from-emerald-400 to-green-600",
    shadow: "shadow-[0_0_30px_rgba(52,211,153,0.3)]"
  },
  {
    icon: <Sword size={28} />,
    title: "Battle",
    desc: "Train your Chumbi and battle against Cursed Chumbi and other players.",
    color: "from-rose-400 to-red-600",
    shadow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]"
  },
  {
    icon: <Home size={28} />,
    title: "Farming",
    desc: "Build your home, farm crops, and craft valuable NFT items.",
    color: "from-amber-400 to-orange-600",
    shadow: "shadow-[0_0_30px_rgba(251,191,36,0.3)]"
  },
  {
    icon: <Search size={28} />,
    title: "Explore",
    desc: "Send your Chumbi on expeditions to find rare NFT artifacts.",
    color: "from-sky-400 to-blue-600",
    shadow: "shadow-[0_0_30px_rgba(56,189,248,0.3)]"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 40, damping: 10 }
  }
};

const Gameplay: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"]
  });

  // Parallax for map background
  const yMap = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="gameplay" className="py-32 bg-[#080c16] relative overflow-hidden">
      {/* Subtle textured background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b14] to-[#0a101d] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-2 tracking-wide"
          >
            GAMEPLAY <span className="text-chumbi-purple">FEATURES</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-chumbi-purple mx-auto rounded-full shadow-[0_0_10px_#8b5cf6]" 
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[#131b2c] border border-white/5 p-8 rounded-[2rem] relative overflow-hidden group hover:border-white/10 transition-all duration-300 flex flex-col items-start text-left h-full shadow-lg hover:shadow-2xl"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 ${feature.shadow} group-hover:scale-105 transition-transform duration-300 relative z-10`}>
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-cinzel font-bold text-white mb-3 uppercase tracking-wider relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 font-quicksand text-sm leading-relaxed relative z-10">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Map Preview */}
        <motion.div 
           ref={mapRef}
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-24 relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-[400px] md:h-[500px] group isolate transform-gpu bg-black"
        >
           {/* Background Image with parallax */}
           <div className="absolute inset-0 overflow-hidden">
             <motion.div style={{ y: yMap, scale: 1.25 }} className="w-full h-[120%]">
               <img 
                 src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2578&auto=format&fit=crop" 
                 alt="Chumbi Valley Map" 
                 className="w-full h-full object-cover"
               />
             </motion.div>
           </div>

           {/* Overlay Gradients */}
           <div className="absolute inset-0 bg-gradient-to-t from-chumbi-dark via-transparent to-transparent opacity-80 pointer-events-none" />
           <div className="absolute inset-0 bg-gradient-to-r from-chumbi-dark/80 via-transparent to-transparent opacity-60 pointer-events-none" />
           
           <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 relative z-10">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-chumbi-gold/20 flex items-center justify-center backdrop-blur-md border border-chumbi-gold/30">
                  <Map className="text-chumbi-gold" size={20} />
                </div>
                <span className="text-chumbi-gold uppercase tracking-[0.2em] font-bold text-xs">Exploration</span>
             </div>
             
             <h3 className="text-3xl md:text-5xl font-cinzel font-bold text-white mb-4">Diverse Biomes await</h3>
             <p className="text-gray-300 max-w-xl font-quicksand text-lg leading-relaxed drop-shadow-md">
               Discover forests, deserts, caves, and ancient ruins. Each region contains unique Chumbi and rare resources waiting to be claimed.
             </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gameplay;