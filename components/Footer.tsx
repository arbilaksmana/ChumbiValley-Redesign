import React from 'react';
import { Twitter, Github, MessageCircle, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050b14] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <a href="#" className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-chumbi-teal rounded-full flex items-center justify-center">
                  <span className="text-sm">🌱</span>
               </div>
               <span className="text-xl font-cinzel font-bold text-white">CHUMBI</span>
            </a>
            <p className="text-gray-500 font-quicksand text-sm">
              An enchanting RPG Play-to-Earn blockchain game built on Polygon.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold font-cinzel mb-4">Game</h4>
            <ul className="space-y-2 text-gray-500 font-quicksand text-sm">
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Play Now</a></li>
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Breeding</a></li>
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-cinzel mb-4">Community</h4>
            <ul className="space-y-2 text-gray-500 font-quicksand text-sm">
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-chumbi-teal transition-colors">Medium</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-cinzel mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-chumbi-teal hover:text-chumbi-dark transition-all">
                <Twitter size={18} />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-chumbi-purple hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-600 text-xs font-quicksand">
            © {new Date().getFullYear()} Chumbi Valley. All rights reserved. This is a clone for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;