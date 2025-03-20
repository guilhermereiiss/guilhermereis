import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  // Exemplo de projetos (substitua com os seus próprios projetos)
  {
    title: 'Aplicativo de Tarefas',
    description: 'Um aplicativo simples para gerenciar tarefas diárias.',
    imageUrl: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/guilhermereiiss/task-app',
  },
  {
    title: 'API de Cadastro',
    description: 'API RESTful para gerenciar cadastros de usuários.',
    imageUrl: 'https://via.placeholder.com/300x200',
    technologies: ['C#', 'ASP.NET'],
    githubUrl: 'https://github.com/guilhermereiiss/api-cadastro',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Ver no GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};