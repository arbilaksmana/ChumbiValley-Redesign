import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Sparkles, X, Minimize2 } from 'lucide-react';
import { askTheOracle } from '../services/geminiService';

interface Message {
  id: string;
  sender: 'user' | 'oracle';
  text: string;
}

const Oracle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'oracle', text: "Greetings, traveler. I am the Oracle of the Valley. What wisdom do you seek about our world?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const answer = await askTheOracle(userMsg.text);
    
    setMessages(prev => [...prev, {
      id: (Date.now() + 1).toString(),
      sender: 'oracle',
      text: answer
    }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 h-[500px] bg-chumbi-dark/95 backdrop-blur-xl border border-chumbi-teal/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-chumbi-teal/20 to-chumbi-purple/20 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chumbi-gold to-orange-500 flex items-center justify-center">
                  <Sparkles size={16} className="text-white animate-spin-slow" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-white text-sm">The Oracle</h3>
                  <p className="text-xs text-chumbi-teal font-quicksand">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={toggleOpen} className="text-gray-400 hover:text-white transition-colors">
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-quicksand text-sm">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-chumbi-teal text-chumbi-dark rounded-tr-none font-bold'
                        : 'bg-white/10 text-gray-100 rounded-tl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-2 h-2 bg-chumbi-gold rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-chumbi-gold rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-chumbi-gold rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-black/20 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask the Oracle..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-chumbi-teal font-quicksand text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-chumbi-teal text-chumbi-dark rounded-xl hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleOpen}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-gray-700 text-gray-300' : 'bg-gradient-to-br from-chumbi-gold to-yellow-600 text-white animate-pulse'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default Oracle;