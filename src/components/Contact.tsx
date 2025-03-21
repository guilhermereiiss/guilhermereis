
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Contato</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Interessado em trabalhar juntos? Entre em contato através de qualquer um dos canais abaixo.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:guilhermereis1000@hotmail.com"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Mail className="w-6 h-6 mr-2" />
            Email
          </a>
          <a
            href="https://github.com/guilhermereiiss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Github className="w-6 h-6 mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-reis-d3v/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};