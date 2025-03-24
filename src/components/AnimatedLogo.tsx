
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const letters = "WNSTG".split("");

  return (
    <div className="flex items-center space-x-1">
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          className="text-xl font-bold"
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedLogo;
