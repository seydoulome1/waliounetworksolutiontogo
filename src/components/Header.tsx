
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

interface HeaderProps {
  date: string;
}

const Header: React.FC<HeaderProps> = ({ date }) => {
  return (
    <motion.header 
      className="py-8 mb-12 border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <AnimatedLogo />
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Proposition de Création <br className="hidden sm:block" />
              <span className="text-primary">de Site Web Professionnel</span>
            </motion.h1>
          </div>
          <motion.div 
            className="text-right text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-medium">{date}</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 bg-secondary/50 backdrop-blur rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-lg font-medium mb-2">Objet :</h2>
          <p className="text-muted-foreground">
            Offre exclusive de création de site web moderne et performant pour ELVEC TOGO, 
            optimisée pour améliorer la visibilité, la crédibilité et les performances 
            commerciales de votre entreprise.
          </p>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
