import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Integração com um serviço como Formspree pode ser adicionada aqui
    setStatus('Enviado com sucesso!');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mt-8"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
          rows={4}
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Enviar
      </button>
      {status && <p className="mt-4 text-green-500">{status}</p>}
    </motion.form>
  );
};