import { motion } from 'framer-motion';

const timelineEvents = [
  { date: '2022', title: 'Início dos Estudos', description: 'Comecei a aprender HTML, CSS e JavaScript.' },
  { date: '2023', title: 'Primeiro Projeto React', description: 'Criei um aplicativo de tarefas com React.' },
  { date: '2024', title: 'Busca por Estágio', description: 'Aprimorei habilidades em TypeScript e back-end.' },
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20">
      <motion.div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Minha Jornada</h2>
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              <div className="flex-shrink-0 w-24 text-right mr-4">
                <span className="text-gray-500 dark:text-gray-400">{event.date}</span>
              </div>
              <div className="flex-grow bg-white dark:bg-gray-700 rounded-lg p-4 shadow">
                <h3 className="text-lg font-semibold dark:text-white">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};