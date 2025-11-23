import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Sword, Sprout, Home, Search, Map } from 'lucide-react';

const features = [
  {
    icon: <Sprout size={32} className="text-white" />,
    title: "Breed & Collect",
    desc: "Breed unique Chumbi with rare body parts and abilities.",
    color: "from-emerald-400 to-emerald-600",
    shadow: "shadow-emerald-500/30",
    border: "group-hover:border-emerald-500/50",
    bgIcon: "bg-emerald-500"
  },
  {
    icon: <Sword size={32} className="text-white" />,
    title: "Battle",
    desc: "Train your Chumbi and battle against Cursed Chumbi and other players.",
    color: "from-rose-400 to-rose-600",
    shadow: "shadow-rose-500/30",
    border: "group-hover:border-rose-500/50",
    bgIcon: "bg-rose-500"
  },
  {
    icon: <Home size={32} className="text-white" />,
    title: "Farming",
    desc: "Build your home, farm crops, and craft valuable NFT items.",
    color: "from-amber-400 to-amber-600",
    shadow: "shadow-amber-500/30",
    border: "group-hover:border-amber-500/50",
    bgIcon: "bg-amber-500"
  },
  {
    icon: <Search size={32} className="text-white" />,
    title: "Explore",
    desc: "Send your Chumbi on expeditions to find rare NFT artifacts.",
    color: "from-sky-400 to-sky-600",
    shadow: "shadow-sky-500/30",
    border: "group-hover:border-sky-500/50",
    bgIcon: "bg-sky-500"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

const Gameplay: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"]
  });

  const yMap = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="gameplay" className="py-32 bg-[#080c16] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a2c4e] via-[#080c16] to-[#050b14] pointer-events-none opacity-60" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24 relative">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block relative"
          >
             <h2 className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-2 tracking-wide relative z-10">
               GAMEPLAY <span className="text-transparent bg-clip-text bg-gradient-to-br from-chumbi-purple to-purple-400">FEATURES</span>
             </h2>
             {/* Decorative Underline specific to FEATURES */}
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "40%" }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="h-1.5 bg-gradient-to-r from-chumbi-purple to-transparent absolute -bottom-2 right-0 rounded-full" 
             />
          </motion.div>
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
              whileHover={{ y: -12, scale: 1.02 }}
              className={`
                relative p-8 rounded-[2.5rem] flex flex-col items-start text-left group
                bg-gradient-to-b from-gray-800/40 to-gray-900/60 backdrop-blur-md
                border border-white/5 ${feature.border} transition-all duration-500
                shadow-xl hover:shadow-2xl overflow-hidden
              `}
            >
               {/* Inner Glow Effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-all duration-500`} />
              
              {/* Icon Container */}
              <div className={`
                w-18 h-18 p-5 rounded-2xl mb-8 relative z-10
                ${feature.bgIcon} ${feature.shadow} shadow-lg
                group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out
              `}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-cinzel font-bold text-white mb-4 uppercase tracking-wider relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 font-quicksand text-sm leading-7 relative z-10 font-medium group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>

              {/* Bottom Line Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Map Preview */}
        <motion.div 
           ref={mapRef}
           initial={{ opacity: 0, scale: 0.95, y: 50 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mt-32 relative rounded-[3rem] overflow-hidden border border-chumbi-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] h-[450px] md:h-[600px] group isolate"
        >
           {/* Parallax Map Image */}
           <div className="absolute inset-0 overflow-hidden">
             <motion.div style={{ y: yMap, scale: 1.15 }} className="w-full h-[120%]">
               <img 
                 src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2578&auto=format&fit=crop" 
                 alt="Chumbi Valley Map" 
                 className="w-full h-full object-cover filter brightness-75 contrast-125 saturate-110"
               />
             </motion.div>
           </div>

           {/* Premium Gradient Overlays */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#080c16] via-[#080c16]/50 to-transparent opacity-90" />
           <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-purple-600/10 to-blue-600/10 mix-blend-soft-light" />
           
           <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
             <div className="max-w-2xl">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-4"
                >
                    <div className="w-10 h-10 rounded-full bg-chumbi-gold flex items-center justify-center shadow-[0_0_15px_#fbbf24]">
                      <Map className="text-chumbi-dark fill-current" size={20} />
                    </div>
                    <span className="text-chumbi-gold uppercase tracking-[0.3em] font-bold text-xs font-quicksand">Exploration</span>
                </motion.div>
                 
                 <h3 className="text-4xl md:text-6xl font-cinzel font-black text-white mb-6 leading-tight drop-shadow-xl">
                    A World of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Infinite Mystery</span>
                 </h3>
                 <p className="text-gray-300 text-lg md:text-xl font-quicksand leading-relaxed max-w-xl">
                   Traverse the diverse biomes of the valley. From the whispering ancient forests to the crystal canyons, adventure awaits at every turn.
                 </p>
             </div>
             
             <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-cinzel font-bold hover:bg-white hover:text-chumbi-dark transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                View World Map
             </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gameplay;