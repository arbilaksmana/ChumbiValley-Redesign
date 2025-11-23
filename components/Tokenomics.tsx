import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const tokenDistribution = [
  { name: 'Play to Earn', value: 43, color: '#2dd4bf' }, // Teal
  { name: 'Staking Rewards', value: 20, color: '#fbbf24' }, // Gold
  { name: 'Team & Advisors', value: 15, color: '#8b5cf6' }, // Purple
  { name: 'Private Sale', value: 12, color: '#064e3b' }, // Forest
  { name: 'Ecosystem Fund', value: 10, color: '#64748b' }, // Slate
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a] border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-white font-cinzel font-bold text-sm mb-1">{payload[0].name}</p>
        <p className="text-chumbi-teal font-quicksand font-bold text-lg">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

// Parent variant to control staggering
const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[#0f1f1a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-chumbi-gold/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chumbi-teal/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-6">
            Dual Token <span className="text-chumbi-gold">Economy</span>
          </h2>
          <p className="text-gray-400 font-quicksand max-w-2xl mx-auto text-lg leading-relaxed">
            A sustainable economy powered by two tokens, intricately designed to reward players and govern the future of the valley.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
           {/* CHMB Token */}
           <motion.div 
             initial={{ opacity: 0, y: 60 }} 
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             whileHover={{ y: -10, transition: { duration: 0.3 } }}
             className="bg-gradient-to-br from-[#0a121e] to-black border border-chumbi-gold/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
           >
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-chumbi-gold/10 rounded-full blur-[60px] group-hover:bg-chumbi-gold/20 transition-colors duration-500" />
             
             <div className="relative z-10 flex flex-col items-center text-center">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-[0_0_40px_rgba(234,179,8,0.3)] mb-8 flex items-center justify-center text-4xl"
               >
                 🪙
               </motion.div>
               <h3 className="text-4xl font-cinzel font-bold text-white mb-2 group-hover:text-chumbi-gold transition-colors">$CHMB</h3>
               <p className="text-chumbi-gold font-bold text-sm tracking-[0.2em] mb-6 opacity-80">GOVERNANCE TOKEN</p>
               
               <motion.div 
                 variants={listContainerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 className="w-full space-y-3"
               >
                 {['Deep Ecosystem Integration', 'Staking Rewards', 'Voting Rights'].map((item, i) => (
                   <motion.div 
                     key={i} 
                     variants={listItemVariants}
                     className="bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-gray-400 font-quicksand text-sm group-hover:border-chumbi-gold/30 transition-colors"
                   >
                     {item}
                   </motion.div>
                 ))}
               </motion.div>
             </div>
           </motion.div>

           {/* LSTS Token */}
           <motion.div 
             initial={{ opacity: 0, y: 60 }} 
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             whileHover={{ y: -10, transition: { duration: 0.3 } }}
             className="bg-gradient-to-br from-[#0a121e] to-black border border-chumbi-teal/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
           >
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-chumbi-teal/10 rounded-full blur-[60px] group-hover:bg-chumbi-teal/20 transition-colors duration-500" />
             
             <div className="relative z-10 flex flex-col items-center text-center">
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-300 to-teal-600 shadow-[0_0_40px_rgba(45,212,191,0.3)] mb-8 flex items-center justify-center text-4xl"
               >
                 ✨
               </motion.div>
               <h3 className="text-4xl font-cinzel font-bold text-white mb-2 group-hover:text-chumbi-teal transition-colors">$LSTS</h3>
               <p className="text-chumbi-teal font-bold text-sm tracking-[0.2em] mb-6 opacity-80">LUCKY STARS</p>
               
               <motion.div 
                 variants={listContainerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 className="w-full space-y-3"
               >
                 {['In-game Currency', 'Play-to-Earn Rewards', 'Breeding & Leveling'].map((item, i) => (
                   <motion.div 
                     key={i} 
                     variants={listItemVariants}
                     className="bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-gray-400 font-quicksand text-sm group-hover:border-chumbi-teal/30 transition-colors"
                   >
                     {item}
                   </motion.div>
                 ))}
               </motion.div>
             </div>
           </motion.div>
        </div>

        {/* Token Distribution Chart */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="max-w-5xl mx-auto bg-white/5 border border-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
        >
            <div className="text-center mb-8">
               <h3 className="text-2xl md:text-3xl font-cinzel font-bold text-white mb-2">
                 $CHMB <span className="text-chumbi-teal">Distribution</span>
               </h3>
               <p className="text-gray-400 font-quicksand text-sm">Strategic Allocation for Long-term Sustainability</p>
            </div>
            
            <div className="h-[400px] w-full relative">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <defs>
                      {tokenDistribution.map((entry, index) => (
                        <filter key={`shadow-${index}`} id={`shadow-${index}`}>
                          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor={entry.color} floodOpacity="0.4" />
                        </filter>
                      ))}
                    </defs>
                    <Pie
                      data={tokenDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={130}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                      {tokenDistribution.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color} 
                          className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36} 
                      iconType="circle"
                      iconSize={10}
                      wrapperStyle={{ paddingTop: "20px", fontFamily: "Quicksand" }}
                      formatter={(value) => <span className="text-gray-300 font-bold ml-2 text-sm">{value}</span>}
                    />
                 </PieChart>
               </ResponsiveContainer>

               {/* Center Donut Text */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none pb-12 md:pb-0">
                  <span className="block text-4xl font-cinzel font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">300M</span>
                  <span className="text-[10px] text-gray-500 font-quicksand uppercase tracking-[0.2em] font-bold">Max Supply</span>
               </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Tokenomics;