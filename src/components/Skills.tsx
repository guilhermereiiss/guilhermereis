import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Atom, LayoutDashboard, FileCode, Feather, Terminal, Database as DBIcon, X } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Front-end',
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: 'React', icon: <Atom className="w-5 h-5 text-blue-500" />, level: 60, description: 'Biblioteca para criação de interfaces.' },
        { name: 'TypeScript', icon: <FileCode className="w-5 h-5 text-blue-600" />, level: 60, description: 'Superset do JavaScript.' },
        { name: 'JavaScript', icon: <FileCode className="w-5 h-5 text-blue-600" />, level: 60, description: 'Linguagem de programação interpretada que permite criar páginas web dinâmicas e interativas.' },
        { name: 'Next.js', icon: <LayoutDashboard className="w-5 h-5 text-gray-500" />, level: 60, description: 'Framework para aplicações React.' },
        { name: 'TailwindCSS', icon: <Feather className="w-5 h-5 text-teal-500" />, level: 50, description: 'Framework de estilização CSS.' }
      ]
    },
    {
      title: 'Back-end',
      icon: <Server className="w-6 h-6 text-green-500" />,
      skills: [
        { name: 'C#', icon: <Terminal className="w-5 h-5 text-purple-500" />, level: 30, description: 'Linguagem de programação da Microsoft.' },
        { name: 'Java', icon: <Terminal className="w-5 h-5 text-red-500" />, level: 30, description: 'Linguagem robusta para aplicações back-end.' }
      ]
    }
  ];

  const getLevelDescription = (level: number) => {
    if (level >= 80) return 'Avançado';
    if (level >= 60) return 'Intermediário';
    return 'Iniciante';
  };

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Habilidades</h2>
        <div className="grid gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 dark:text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3 text-center
                      text-gray-800 dark:text-gray-200 hover:transform hover:scale-105
                      transition-transform duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setSelectedSkill(skill)}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedSkill && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-md w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => setSelectedSkill(null)} className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center mb-4">
              {selectedSkill.icon}
              <h3 className="text-xl font-semibold ml-2 dark:text-white">{selectedSkill.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedSkill.description}</p>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-300">Nível: {getLevelDescription(selectedSkill.level)}</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 h-4 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: `${selectedSkill.level}%` }}></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
