import { motion } from 'framer-motion';
import { Terminal, Zap, ChevronRight, Shield, Crosshair } from 'lucide-react';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center pl-20 pr-8 pt-10"
    >
      <div className="max-w-6xl w-full">

        {/* Top Bar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff2d55]/50 to-transparent" />
          <span className="text-[#ff2d55] text-xs tracking-[0.4em] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            SYSTEM ONLINE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff2d55]/50 to-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="text-[#ff00ff] text-sm tracking-[0.3em] flex items-center gap-2 mb-4">
              <Crosshair size={14} />
              /// FULL STACK DEVELOPER
            </span>

            <h1 className="text-7xl font-['Orbitron'] font-bold leading-tight mb-6">
              <span className="text-white">SAMADHAN</span>
              <br />
              <span className="text-[#ff2d55]">SHEGDE</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-md mb-8">
              Aspiring Java & .NET Full Stack Developer skilled in building web applications 
              using Spring Boot, React.js, and ASP.NET MVC. Passionate about backend development 
              and clean UI design.
            </p>

            <div className="flex gap-4">
              
              {/* Download Resume */}
              <a href="/SamadhanShegde_Java_developer.pdf" download>
                <button className="px-6 py-3 border border-[#ff2d55] text-[#ff2d55] hover:bg-[#ff2d55] hover:text-black flex items-center gap-2">
                  Download <ChevronRight size={16} />
                </button>
              </a>

              {/* View Projects */}
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-[#ff2d55]/30 text-gray-400 hover:border-[#ff2d55] hover:text-[#ff2d55]"
              >
                VIEW PROJECTS
              </button>

            </div>
          </div>

          {/* RIGHT (Terminal Box) */}
          <div className="relative">
            <div className="border border-[#ff2d55]/30 p-6 bg-[#0d0d12]/50">

              <div className="flex items-center gap-2 text-[#ff2d55]/60 text-xs mb-4">
                <Terminal size={14} />
                <span>DEV PROFILE</span>
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-sm space-y-2">

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

            {/* Decorative */}
            <Zap className="absolute -top-4 -right-4 text-[#ff00ff]" size={28} />
            <Shield className="absolute -bottom-4 -right-4 text-[#ff2d55]/30" size={30} />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex justify-between text-xs text-gray-500 font-mono">
          <span>LOCATION: <span className="text-[#ff2d55]">PUNE, INDIA</span></span>
          <span>CONTACT: <span className="text-[#00ff88]">+91 7666071321</span></span>
          <span>EMAIL: <span className="text-[#ff00ff]">samadhanshegde2018@gmail.com</span></span>
        </div>

      </div>
    </motion.div>
  );
}