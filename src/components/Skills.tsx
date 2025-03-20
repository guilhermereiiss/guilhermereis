import { motion } from 'framer-motion';
import { Code2, Server } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Front-end',
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3'],
    },
    {
      title: 'Back-end',
      icon: <Server className="w-6 h-6 text-green-500" />,
      skills: ['C#', 'Java'],
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Habilidades</h2>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          whileInView="show"
          className="grid gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 dark:text-white">{category.title}</h3>
              </div>
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};