import { motion } from 'framer-motion';
import { Folder, ExternalLink, GitBranch, Box, Layers, Zap } from 'lucide-react';

// ✅ Updated Projects (REALISTIC + Resume Based)
const projects = [
  {
    id: '01',
    name: 'EMPLOYEE_MANAGE_SYS',
    description:
      'Developed a full-stack Employee Management System using Spring Boot, React.js, and MySQL with role-based authentication. Admin can manage employees and approve/reject leave requests, while employees can apply for leave and track status in real-time.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST API'],
    status: 'COMPLETED',
    metric: 'Role-based system'
  },
  {
    id: '02',
    name: 'HOSPITAL_MANAGE_SYS',
    description:
      'Built a web-based Hospital Management System using ASP.NET MVC and SQL Server. Implemented patient registration, appointment scheduling, and role-based dashboards for Admin and Doctor.',
    tags: ['C#', 'ASP.NET MVC', 'SQL Server', 'HTML', 'CSS'],
    status: 'COMPLETED',
    metric: 'MVC Architecture'
  },
  {
    id: '03',
    name: 'AUTHENTICATION_SYSTEM',
    description:
      'Implemented secure login and registration system using JWT authentication with role-based access control. Ensured secure API communication and protected routes.',
    tags: ['Spring Boot', 'JWT', 'REST API', 'Security'],
    status: 'IMPLEMENTED',
    metric: 'Secure login system'
  },
  {
    id: '04',
    name: 'PORTFOLIO_WEBSITE',
    description:
      'Designed and developed a personal portfolio using React.js and Tailwind CSS showcasing projects, skills, and contact details with modern UI and animations.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
    status: 'LIVE',
    metric: 'Responsive UI'
  },
];

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pl-20 pr-8 py-12 pt-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* ✅ Header */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <Folder className="text-[#ff2d55]" size={24} />
            <h2 className="text-4xl font-['Orbitron',sans-serif] font-bold tracking-[0.15em]">
              PROJECTS
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff2d55] via-[#ff00ff] to-transparent w-96" />
        </motion.div>

        {/* ✅ Project Cards */}
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="group relative"
            >
              <div className="absolute inset-0 border border-[#ff2d55]/20 group-hover:border-[#ff2d55]/60 transition-colors duration-300 bg-[#0d0d12]/30" />

              <div className="relative p-6">

                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-['Orbitron'] text-[#ff2d55]/50 font-bold">
                      {project.id}
                    </span>
                    <div className="h-8 w-px bg-[#ff2d55]/30" />
                    <h3 className="text-xl font-['Orbitron'] tracking-[0.1em] group-hover:text-[#ff2d55]">
                      {project.name}
                    </h3>
                  </div>

                  <span className="px-3 py-1 text-[10px] border border-[#ff00ff]/50 text-[#ff00ff]">
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] bg-[#ff2d55]/5 border border-[#ff2d55]/20 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-[#ff2d55]/20">
                  <span className="text-xs text-gray-500">
                    METRIC: <span className="text-[#ff2d55]">{project.metric}</span>
                  </span>

                  <div className="flex gap-3">
                    <button className="p-2 border border-[#ff2d55]/30 hover:border-[#ff2d55] hover:text-[#ff2d55]">
                      <GitBranch size={16} />
                    </button>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-[#ff2d55]/30 hover:border-[#ff2d55] hover:text-[#ff2d55]"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Stats (REALISTIC for fresher) */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-between items-center px-8 py-6 border border-[#ff2d55]/20 bg-[#0d0d12]/30"
        >
          {[
            { label: 'PROJECTS', value: '4', icon: Folder },
            { label: 'TECH_STACKS', value: '10+', icon: Layers },
            { label: 'TOOLS_USED', value: '8+', icon: Box },
            { label: 'LEARNING', value: 'ACTIVE', icon: Zap },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center flex flex-col items-center">
                <Icon size={20} className="text-[#ff2d55]/50 mb-2" />
                <div className="text-3xl font-['Orbitron'] text-[#ff2d55]">
                  {stat.value}
                </div>
                <div className="text-[10px] text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </motion.div>
  );
}