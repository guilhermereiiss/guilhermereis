
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';



const projects: Project[] = [
  {
    title: 'MatchMovie',
    description: 'Uma plataforma completa de recomendação de filmes de acordo ao seu historico de favoritismo.',
    technologies: ['React', 'API TMDB', 'TypeScript'],
    githubUrl: 'https://github.com/guilhermereiiss/MatchMovie',
    imageUrl: 'https://i.ibb.co/2H3BBJX/Screenshot-20.png'
  },
  {
    title: 'Conversor de Moedas',
    description: 'Este é um projeto simples de Conversor de Moedas construído com React. Ele permite a conversão de diferentes moedas em tempo real, utilizando a API AwesomeAPI para buscar as taxas de câmbio atualizadas.',
    technologies: ['Vite', 'TypeScript', 'React','AwesomeAPI'],
    githubUrl: 'https://github.com/guilhermereiiss/Conversor-Moedas',
    imageUrl: 'https://i.ibb.co/ZRLgcCHQ/Screenshot-19.png'
  },
  {
    title: 'Loja Dom-Football',
    description: 'Este é um projeto simples de uma loja de produtos de futebol construído com React. ( No momento so temos deploy do temporario)',
    technologies: ['Vite', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/guilhermereiiss/DOM-temp',
    imageUrl: 'https://i.ibb.co/C538Jzcf/Screenshot-21.png'
  },
  {
    title: 'BabyCenter',
    description: 'Este é um projeto simples de uma app web para pais registrarem o crescimento de seus filhos como alimentação,horas de sono e necessidades construído com React. (Com tradução para português, inglês, espanhol) ',
    technologies: ['Vite', 'TypeScript', 'React', 'MaterialUI','i18next'],
    githubUrl: 'https://github.com/guilhermereiiss/AT-REACT-WEB-2-TRIMESTE',
    imageUrl: 'https://i.ibb.co/d4xvxqgK/Screenshot-22.png'
  }
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
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
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