import { motion } from 'framer-motion';
import { Folder, ExternalLink, GitBranch, Box, Layers, Zap } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: 'EMPLOYEE_MANAGE_SYS',
    description:
      'Developed a full-stack Employee Management System using Spring Boot, React.js, and MySQL with role-based authentication.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    status: 'COMPLETED',
    metric: 'Role-based system'
  },
  {
    id: '02',
    name: 'HOSPITAL_MANAGE_SYS',
    description:
      'Built a web-based Hospital Management System using ASP.NET MVC and SQL Server.',
    tags: ['C#', 'ASP.NET MVC', 'SQL Server'],
    status: 'COMPLETED',
    metric: 'MVC Architecture'
  },
  {
    id: '03',
    name: 'AUTH_SYSTEM',
    description:
      'Implemented secure login system using JWT authentication and role-based access.',
    tags: ['Spring Boot', 'JWT'],
    status: 'DONE',
    metric: 'Security'
  },
  {
    id: '04',
    name: 'PORTFOLIO',
    description:
      'Built personal portfolio using React.js and Tailwind CSS.',
    tags: ['React', 'Tailwind'],
    status: 'LIVE',
    metric: 'Responsive UI'
  },
];

export default function ProjectsSection() {
  return (
    <motion.div
      id="projects"
      className="min-h-screen px-4 sm:px-6 md:px-20 py-12 pt-16"
    >
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <Folder className="text-[#ff2d55]" size={24} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              PROJECTS
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff2d55] to-transparent w-full max-w-[18rem]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-0 border border-[#ff2d55]/20 p-5 sm:p-6 bg-[#0d0d12]/30 rounded-3xl"
            >
              <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                <h3 className="text-lg md:text-xl text-[#ff2d55] break-words">
                  {project.name}
                </h3>

                <span className="text-[10px] uppercase border border-[#ff2d55]/20 px-2 py-1 rounded-full text-[#ff2d55]">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed break-words">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-xs border border-[#ff2d55]/20 rounded-full px-2 py-1 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs">
                <span className="text-[#ff2d55]">{project.metric}</span>
                <div className="flex gap-2 text-[#ff2d55]">
                  <GitBranch size={16} />
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center border border-[#ff2d55]/20 p-6 rounded-3xl">
          {[
            { label: 'PROJECTS', value: '4', icon: Folder },
            { label: 'STACKS', value: '10+', icon: Layers },
            { label: 'TOOLS', value: '8+', icon: Box },
            { label: 'LEARNING', value: 'ACTIVE', icon: Zap },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="min-w-0">
                <Icon className="mx-auto mb-2 text-[#ff2d55]" size={18} />
                <div className="text-xl md:text-2xl text-[#ff2d55]">
                  {stat.value}
                </div>
                <div className="text-[10px] text-gray-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}
