import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

// ✅ Replace with YOUR links
const socials = [
  { icon: Github, label: 'GITHUB', href: 'https://github.com/YOUR_USERNAME' },
  { icon: Linkedin, label: 'LINKEDIN', href: 'https://www.linkedin.com/in/YOUR_PROFILE' },
];

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pl-20 pr-8 py-12 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">

        {/* ✅ Header */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <Mail className="text-[#ff2d55]" size={24} />
            <h2 className="text-4xl font-orbitron font-bold tracking-[0.15em]">
              CONTACT ME
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent w-64 mx-auto" />
          <p className="mt-4 text-gray-400">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12">

          {/* ✅ Contact Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-6">
              
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[#ff2d55] outline-none"
              />

              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[#ff2d55] outline-none"
              />

              <textarea 
                rows={5}
                placeholder="Your Message"
                className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-[#ff2d55] outline-none resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 border border-[#ff2d55] text-[#ff2d55] text-sm font-semibold hover:bg-[#ff2d55] hover:text-black transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} />
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* ✅ Contact Info */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            
            {/* Email */}
            <div>
              <h3 className="text-xs text-gray-500 mb-2">EMAIL</h3>
              <a 
                href="mailto:samadhanshegde2018@gmail.com"
                className="text-lg text-[#ff2d55] hover:text-[#ff00ff]"
              >
                samadhanshegde2018@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-xs text-gray-500 mb-4">SOCIAL</h3>
              <div className="space-y-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4"
                    >
                      <Icon size={20} className="text-[#ff2d55]" />
                      <span className="text-gray-400">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-4 border border-[#00ff88]/30 bg-[#00ff88]/5"
            >
              <span className="text-sm text-[#00ff88]">
                OPEN TO OPPORTUNITIES
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* ✅ Footer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-gray-600">
            © 2026 Samadhan Shegde
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}