import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Folder, User, Mail, ChevronRight, PanelLeftOpen, ArrowRight, ChevronLeft, X } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { id: 'hero', label: 'MISSION', icon: Cpu },
  { id: 'skills', label: 'SYSTEMS', icon: Code },
  { id: 'projects', label: 'OPERATIONS', icon: Folder },
  { id: 'about', label: 'PROFILE', icon: User },
  { id: 'contact', label: 'COMMS', icon: Mail },
];

export default function Navigation({ activeSection, setActiveSection }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const initialBodyOverflow = useRef<string>(document.body.style.overflow || '');

  const handleClick = (id: string) => {
    setActiveSection(id);
    setIsMobileOpen(false);
  };

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = initialBodyOverflow.current;
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.aside
        className="hidden md:flex fixed left-0 top-0 h-full w-20 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="absolute inset-y-0 left-0 w-full bg-[#0d0d12]/95 border-r border-[#ff2d55]/20 shadow-[4px_0_40px_rgba(255,45,85,0.15)] backdrop-blur-sm" />

        <div className="relative z-10 flex h-full flex-col items-center justify-between py-6">
          <button
            className="flex h-14 w-14 items-center justify-center rounded-3xl border border-[#ff2d55]/20 bg-[#0c0c11]/70 text-[#ff2d55] shadow-[0_0_20px_rgba(255,45,85,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#ff2d55]/10"
            aria-label="Open desktop navigation"
          >
            <PanelLeftOpen size={24} />
          </button>

          <div className="space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={clsx(
                    'w-14 h-14 mx-auto flex items-center justify-center rounded-3xl border transition-all duration-200',
                    isActive
                      ? 'border-[#ff2d55] bg-[#ff2d55]/15 shadow-[0_0_24px_rgba(255,45,85,0.35)]'
                      : 'border-[#ff2d55]/30 hover:border-[#ff2d55] hover:bg-[#ff2d55]/10'
                  )}
                >
                  <Icon size={20} className="text-[#ff2d55]" />
                </button>
              );
            })}
          </div>

          <div className="text-[10px] uppercase tracking-[0.35em] text-[#ff2d55] font-['Orbitron']">
            SYS
          </div>
        </div>
      </motion.aside>

      <header className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-3xl border border-[#ff2d55]/20 bg-[#0d0d12]/95 px-4 py-3 shadow-[0_0_30px_rgba(255,45,85,0.2)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-expanded={isMobileOpen}
              aria-label="Open sidebar navigation"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ff2d55]/20 bg-[#0f0f13]/90 text-[#ff2d55] transition-all duration-200 hover:bg-[#ff2d55]/10"
            >
              <ChevronRight size={22} />
            </button>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#ff2d55] font-['Orbitron']">Navigation</p>
              <p className="text-xs text-gray-400">Tap to open sidebar</p>
            </div>
          </div>

          <div className="text-[10px] uppercase tracking-[0.35em] text-[#ff2d55] font-['Orbitron']">
            CYBER UI
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.aside
              className="absolute left-0 top-0 bottom-0 w-[82vw] max-w-sm bg-[#0d0d12]/95 border-r border-[#ff2d55]/20 shadow-[10px_0_50px_rgba(255,45,85,0.35)] backdrop-blur-sm"
              initial={{ x: '-105%' }}
              animate={{ x: 0 }}
              exit={{ x: '-105%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#ff2d55]/20">
                <div className="flex items-center gap-3">
                  <PanelLeftOpen size={18} className="text-[#ff2d55]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#ff2d55] font-['Orbitron']">
                      Navigation
                    </p>
                    <p className="text-xs text-gray-400">Tap an item or close to return</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close sidebar"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff2d55]/20 text-[#ff2d55] transition-all duration-200 hover:bg-[#ff2d55]/10"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Dismiss sidebar"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff2d55]/20 text-[#ff2d55] transition-all duration-200 hover:bg-[#ff2d55]/10"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <nav className="px-4 py-5 space-y-3 overflow-y-auto h-[calc(100vh-92px)]">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleClick(item.id)}
                      className={clsx(
                        'w-full flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm transition-all duration-200',
                        isActive
                          ? 'border-[#ff2d55] bg-[#ff2d55]/10 text-[#ff2d55] shadow-[0_0_18px_rgba(255,45,85,0.22)]'
                          : 'border-[#ff2d55]/20 text-gray-300 hover:border-[#ff2d55] hover:bg-[#ff2d55]/10 hover:text-[#ff2d55]'
                      )}
                    >
                      <Icon size={20} />
                      <div>
                        <p className="uppercase tracking-[0.2em]">{item.label}</p>
                        <p className="text-xs text-gray-400">Tap to view section</p>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
