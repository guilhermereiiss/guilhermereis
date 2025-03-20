import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="py-20 min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Code2 className="w-16 h-16 mx-auto mb-6 text-vaporwave-neonPink" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 text-vaporwave-text font-retro">
          {"Guilherme Reis".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ delay: 0.5 }}
          className="text-xl text-vaporwave-text font-sans"
        >
          Desenvolvedor Web - Full Stack
        </motion.p>
      </motion.div>
    </header>
  );
};