import { motion } from 'framer-motion';
import { Cpu, Code, Folder, User, Mail } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { id: 'hero', label: 'MISSION', icon: Cpu },
  { id: 'skills', label: 'SYSTEMS', icon: Code },
  { id: 'projects', label: 'OPERATIONS', icon: Folder },
  { id: 'about', label: 'PROFILE', icon: User },
  { id: 'contact', label: 'COMMS', icon: Mail },
];

export default function Navigation({ activeSection, setActiveSection }) {
  return (
    <motion.nav
      className="fixed left-0 top-0 h-full w-20 z-50 hidden md:flex flex-col justify-center"
    >
      <div className="absolute inset-y-0 left-0 w-full bg-[#0d0d12]/80 border-r border-[#ff2d55]/10" />

      <div className="space-y-3 relative z-10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={clsx(
                "w-14 h-14 mx-auto flex items-center justify-center border",
                isActive ? "border-[#ff2d55] bg-[#ff2d55]/10" : "border-[#ff2d55]/30"
              )}
            >
              <Icon size={20} className="text-[#ff2d55]" />
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
