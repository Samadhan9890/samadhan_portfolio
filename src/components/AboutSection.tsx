import { motion } from 'framer-motion';
import { User, Cpu, Zap, MessageSquare, Award, Calendar, MapPin } from 'lucide-react';

// ✅ Updated Timeline (as per your resume)
const timeline = [
  { year: '2025', event: 'B.E. Computer Science — Completed' },
  { year: '2024', event: 'Java Full Stack Training — HefShine, Pune' },
  { year: '2023', event: 'Built Full Stack Projects (Spring Boot + React)' },
  { year: '2021', event: 'Diploma in Computer Engineering — Completed' },
];

// ✅ Updated Values (realistic)
const values = [
  { 
    icon: Cpu, 
    title: 'BACKEND DEVELOPMENT', 
    description: 'Building secure and scalable backend applications using Java, Spring Boot, and REST APIs.' 
  },
  { 
    icon: Zap, 
    title: 'FULL STACK DEVELOPMENT', 
    description: 'Developing complete web applications using React, HTML, CSS, and modern frameworks.' 
  },
  { 
    icon: MessageSquare, 
    title: 'CONTINUOUS LEARNING', 
    description: 'Actively improving skills by building projects and learning new technologies.' 
  },
];

export default function AboutSection() {
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
            <User className="text-[#ff2d55]" size={24} />
            <h2 className="text-4xl font-['Orbitron'] font-bold tracking-[0.15em]">
              ABOUT ME
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-[#ff2d55] via-[#ff00ff] to-transparent w-96" />
        </motion.div>

        <div className="grid grid-cols-3 gap-8">

          {/* ✅ Main Bio */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-2"
          >
            <div className="border border-[#ff2d55]/30 p-8 mb-8 bg-[#0d0d12]/50">

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am an <span className="text-[#ff2d55]">Aspiring Java & .NET Full Stack Developer</span> 
                  with hands-on experience in building web applications using 
                  <span className="text-[#ff00ff]"> Spring Boot, React.js, and ASP.NET MVC</span>.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  I have developed projects like Employee Management System and Hospital Management System, 
                  focusing on backend development, REST APIs, and database integration.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  I am passionate about learning new technologies and building real-world applications 
                  to improve my development skills.
                </p>
              </div>

              {/* Location */}
              <div className="flex gap-6 mt-6 pt-6 border-t border-[#ff2d55]/20">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin size={14} className="text-[#ff00ff]" />
                  <span>Pune, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} className="text-[#ff00ff]" />
                  <span>Fresher | Open to Work</span>
                </div>
              </div>

              {/* ✅ Stats (realistic) */}
              <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#ff2d55]/20">
                {[
                  { value: '0-1', label: 'YEARS EXP' },
                  { value: '4+', label: 'PROJECTS' },
                  { value: '10+', label: 'TECH SKILLS' },
                  { value: '2', label: 'CERTIFICATIONS' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-['Orbitron'] text-[#ff2d55]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Timeline */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-[#ff2d55]" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative py-4"
                >
                  <div className="absolute -left-[33px] top-5 w-3 h-3 bg-[#ff2d55]" />
                  <div className="flex gap-4">
                    <span className="text-lg font-['Orbitron'] text-[#ff2d55]">
                      {item.year}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {item.event}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ✅ Values */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xs text-gray-500 mb-4 flex items-center gap-2">
              <Cpu size={12} className="text-[#ff00ff]" />
              CORE SKILLS
            </h3>

            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 border border-[#ff2d55]/20 bg-[#0d0d12]/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={20} className="text-[#ff2d55]" />
                    <span className="text-sm text-[#ff2d55] font-semibold">
                      {value.title}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Availability */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 p-4 border border-[#00ff88]/30 bg-[#00ff88]/5"
            >
              <span className="text-sm text-[#00ff88]">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}