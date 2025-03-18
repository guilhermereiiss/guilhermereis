
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import MyPicture from "../assets/Screenshot_15.png"

import curriculoPDF from "../assets/CURRICULO-GUILHERME-REIS .pdf"

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-xl flex-shrink-0"
          >
            <img
              src={MyPicture }
              alt="Foto de Perfil"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold mb-8 dark:text-white">Sobre Mim</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Desenvolvedor com 1 ano de estudo buscando a primeira oportunidade de estágio.
            Gosto de aplicar os conhecimentos adquiridos na faculdade em situações reais de
            trabalho e estou sempre em busca de oportunidades para aprender e crescer
            profissionalmente. Iniciei meus estudos na área de back-end com Java e C# e sinto
            que estou evoluindo muito bem. Espero poder continuar aprendendo e contribuir
            para o crescimento da sua empresa.
            </p>
            <a
              href={curriculoPDF}
              download
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg
                hover:bg-blue-600 transition-colors duration-200 mb-8"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Baixar Currículo
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};