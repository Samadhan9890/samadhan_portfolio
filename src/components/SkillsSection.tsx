import { motion } from 'framer-motion';
import { Cpu, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// same data (no change)
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
      className="min-h-screen px-4 md:pl-20 md:pr-8 py-12 pt-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <Cpu className="text-[#ff2d55]" size={24} />
            <h2 className="text-2xl md:text-4xl font-bold">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff2d55] to-transparent w-40 md:w-96" />
        </div>

        {/* ✅ GRID FIX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* SKILLS */}
          <div className="md:col-span-2 space-y-4">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-xs text-[#ff2d55]">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 bg-[#ff2d55]/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff2d55] to-[#ff00ff]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

              </div>
            ))}
          </div>

          {/* CHART */}
          <div className="border border-[#ff2d55]/30 p-4 md:p-6 bg-[#0d0d12]/50">

            <h3 className="text-xs text-gray-400 mb-4 text-center flex items-center justify-center gap-2">
              <Activity size={14} />
              SKILL PROGRESSION
            </h3>

            {/* ✅ HEIGHT FIX */}
            <div className="h-48 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <XAxis dataKey="year" stroke="#666" fontSize={10} />
                  <YAxis hide />

                  <Area
                    type="monotone"
                    dataKey="skill"
                    stroke="#ff2d55"
                    fillOpacity={0.3}
                    fill="#ff2d55"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#ff2d55]/20">
              {[
                { label: 'BACKEND', value: '85' },
                { label: 'FRONTEND', value: '78' },
                { label: 'DATABASE', value: '82' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg md:text-xl text-[#ff2d55]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-12">
          <h3 className="text-xs text-gray-500 mb-4">
            TECH STACK
          </h3>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              'Java','Spring Boot','React','C#','ASP.NET','MySQL','SQL Server',
              'HTML','CSS','Bootstrap','JavaScript','Postman','Git','GitHub'
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 text-[10px] md:text-xs border border-[#ff2d55]/30 text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
