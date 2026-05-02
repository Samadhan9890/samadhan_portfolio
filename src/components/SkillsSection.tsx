import { motion } from 'framer-motion';
import { Cpu, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// ✅ Updated Skills (as per your resume)
const skills = [
  { name: 'Java & Spring Boot', level: 85, category: 'core' },
  { name: 'C# & ASP.NET MVC', level: 80, category: 'core' },
  { name: 'React.js', level: 75, category: 'core' },
  { name: 'HTML, CSS, Bootstrap', level: 78, category: 'core' },
  { name: 'MySQL / SQL Server', level: 82, category: 'core' },
  { name: 'REST API Development', level: 78, category: 'specialized' },
  { name: 'Authentication & Role-based Access', level: 76, category: 'specialized' },
  { name: 'Git & GitHub', level: 74, category: 'specialized' },
];

// ✅ Skill Progression (realistic growth)
const chartData = [
  { year: '2020', skill: 30 },
  { year: '2021', skill: 45 },
  { year: '2022', skill: 60 },
  { year: '2023', skill: 70 },
  { year: '2024', skill: 80 },
  { year: '2025', skill: 85 },
];

export default function SkillsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pl-20 pr-8 py-12 pt-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* ✅ Section Header */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <Cpu className="text-[#ff2d55]" size={24} />
            <h2 className="text-4xl font-['Orbitron',sans-serif] font-bold tracking-[0.15em]">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff2d55] via-[#ff00ff] to-transparent w-96" />
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          
          {/* ✅ Skills List */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-2 space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm tracking-[0.2em] text-gray-300 group-hover:text-[#ff2d55] transition-colors flex items-center gap-2">
                    {skill.category === 'core' && (
                      <Cpu size={12} className="text-[#ff2d55]/50" />
                    )}
                    {skill.name.toUpperCase()}
                  </span>
                  <span className="text-xs font-['Share_Tech_Mono',monospace] text-[#ff2d55]">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 bg-[#ff2d55]/10 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.8 }}
                    className="h-full"
                    style={{ 
                      background: 'linear-gradient(90deg, #ff2d55, #ff00ff)',
                      boxShadow: '0 0 20px rgba(255, 45, 85, 0.5)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ✅ Chart Section */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="border border-[#ff2d55]/30 p-6 bg-[#0d0d12]/50">
              
              <h3 className="text-xs tracking-[0.3em] text-gray-400 mb-4 text-center flex items-center justify-center gap-2">
                <Activity size={14} className="text-[#ff2d55]" />
                SKILL PROGRESSION
              </h3>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff2d55" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="#ff00ff" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>

                    <XAxis dataKey="year" stroke="#666" fontSize={10} />
                    <YAxis hide />

                    <Area 
                      type="monotone" 
                      dataKey="skill" 
                      stroke="#ff2d55" 
                      strokeWidth={2}
                      fill="url(#skillGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* ✅ Stats */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#ff2d55]/20">
                {[
                  { label: 'BACKEND', value: '85' },
                  { label: 'FRONTEND', value: '78' },
                  { label: 'DATABASE', value: '82' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg font-['Orbitron',sans-serif] text-[#ff2d55]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] tracking-widest text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✅ Tech Stack */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4 flex items-center gap-2">
            <Cpu size={12} className="text-[#ff00ff]" />
            TECH STACK
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              'Java',
              'Spring Boot',
              'React.js',
              'C#',
              'ASP.NET MVC',
              'MySQL',
              'SQL Server',
              'HTML',
              'CSS',
              'Bootstrap',
              'JavaScript',
              'Postman',
              'Git',
              'GitHub'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 border border-[#ff2d55]/30 text-xs tracking-[0.15em] text-gray-400 hover:border-[#ff2d55] hover:text-[#ff2d55] transition-all cursor-default bg-[#0d0d12]/50"
              >
                {tech.toUpperCase()}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}