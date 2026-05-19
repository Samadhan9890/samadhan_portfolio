import { motion } from 'framer-motion';
import { Terminal, Zap, ChevronRight, Shield, Crosshair } from 'lucide-react';

interface HeroSectionProps {
  onViewProjects: () => void;
}

export default function HeroSection({ onViewProjects }: HeroSectionProps) {
  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:pl-20 md:pr-8 pt-24 lg:pt-20"
    >
      <div className="max-w-6xl w-full">

        <div className="flex items-center gap-2 sm:gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff2d55]/50 to-transparent" />
          <span className="text-[#ff2d55] text-[10px] sm:text-xs tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            SYSTEM ONLINE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff2d55]/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="max-w-xl">
            <span className="text-[#ff00ff] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] flex items-center gap-2 mb-4">
              <Crosshair size={14} />
              /// FULL STACK DEVELOPER
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Orbitron'] font-bold leading-tight mb-6">
              <span className="text-white">SAMADHAN</span>
              <br />
              <span className="text-[#ff2d55]">SHEGDE</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Aspiring Java & .NET Full Stack Developer skilled in building web applications 
              using Spring Boot, React.js, and ASP.NET MVC. Passionate about backend development 
              and clean UI design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/SamadhanShegde_Java_developer.pdf" download className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 border border-[#ff2d55] text-[#ff2d55] hover:bg-[#ff2d55] hover:text-black transition-all duration-200 flex items-center justify-center gap-2">
                  Download <ChevronRight size={16} />
                </button>
              </a>

              <button
                onClick={onViewProjects}
                className="w-full sm:w-auto px-6 py-3 border border-[#ff2d55]/30 text-gray-400 hover:border-[#ff2d55] hover:text-[#ff2d55] transition-all duration-200"
              >
                VIEW PROJECTS
              </button>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="border border-[#ff2d55]/30 p-4 sm:p-6 bg-[#0d0d12]/50 overflow-hidden rounded-3xl">
              <div className="flex items-center gap-2 text-[#ff2d55]/60 text-xs mb-4">
                <Terminal size={14} />
                <span>DEV PROFILE</span>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2">
                <div className="flex gap-2">
                  <span className="text-[#ff00ff]">$</span>
                  <span>analyze.capabilities()</span>
                </div>

                <div className="pl-4 text-gray-400">→ Java & Spring Boot</div>
                <div className="pl-4 text-gray-400">→ ASP.NET MVC</div>
                <div className="pl-4 text-gray-400">→ React.js</div>
                <div className="pl-4 text-gray-400">→ REST APIs</div>
                <div className="pl-4 text-gray-400">→ MySQL / SQL Server</div>
                <div className="pl-4 text-gray-400">→ Authentication Systems</div>

                <div className="flex gap-2 mt-4">
                  <span className="text-[#ff00ff]">$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            <Zap className="hidden sm:block absolute -top-4 -right-4 text-[#ff00ff]" size={24} />
            <Shield className="hidden sm:block absolute -bottom-4 -right-4 text-[#ff2d55]/30" size={26} />
          </div>

        </div>

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between text-[10px] sm:text-xs text-gray-500 font-mono text-center sm:text-left break-all">
          <span>LOCATION: <span className="text-[#ff2d55]">PUNE, INDIA</span></span>
          <span>CONTACT: <span className="text-[#00ff88]">+91 7666071321</span></span>
          <span>EMAIL: <span className="text-[#ff00ff]">samadhanshegde2018@gmail.com</span></span>
        </div>

      </div>
    </motion.div>
  );
}
