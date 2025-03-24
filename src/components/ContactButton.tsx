
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

interface ContactButtonProps {
  phone1: string;
  phone2: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ phone1, phone2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          className="bg-primary text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2"
        >
          <Phone size={20} className="animate-pulse-subtle" />
          <span className="font-medium">Contactez-nous</span>
        </button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full mb-3 right-0 bg-white rounded-lg shadow-xl p-4 w-56"
            >
              <div className="text-center">
                <p className="font-medium text-gray-800 mb-2">Nos contacts:</p>
                <a 
                  href={`tel:${phone1}`} 
                  className="block text-primary hover:underline"
                >
                  {phone1}
                </a>
                <a 
                  href={`tel:${phone2}`} 
                  className="block text-primary hover:underline"
                >
                  {phone2}
                </a>
              </div>
              <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactButton;
