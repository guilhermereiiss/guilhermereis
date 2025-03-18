import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="py-20 min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Code2 className="w-16 h-16 mx-auto mb-6 text-blue-500" />
        <h1 className="text-4xl font-bold mb-4 dark:text-white">
          Guilherme Reis
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Desenvolvedor Web - Full Stack
        </p>
      </motion.div>
    </header>
  );
};