import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 sm:px-6 md:px-20 py-12 pt-16"
    >
      <div className="max-w-4xl mx-auto w-full">

        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
            <Mail className="text-[#ff2d55]" size={24} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Orbitron'] font-bold tracking-[0.15em]">
              CONTACT ME
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent w-full max-w-[20rem] mx-auto" />
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div className="bg-[#0d0d12]/50 border border-[#ff2d55]/20 rounded-3xl p-5 sm:p-6">
            <form className="space-y-4 md:space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-[#ff2d55]/30 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff2d55]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-[#ff2d55]/30 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff2d55]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full min-h-[160px] bg-transparent border border-[#ff2d55]/30 rounded-2xl px-4 py-3 text-sm text-white resize-none focus:outline-none focus:border-[#ff2d55]"
              />

              <button className="w-full py-3 border border-[#ff2d55] rounded-2xl text-[#ff2d55] hover:bg-[#ff2d55] hover:text-black transition-all duration-200">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>

          <motion.div className="space-y-8 bg-[#0d0d12]/50 border border-[#ff2d55]/20 rounded-3xl p-6 md:p-8">
            <div>
              <h3 className="text-xs text-gray-500 mb-2">EMAIL</h3>
              <a
                href="mailto:samadhanshegde2018@gmail.com"
                className="text-sm sm:text-base md:text-lg break-all text-[#ff2d55]"
              >
                samadhanshegde2018@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs text-gray-500 mb-2">PHONE</h3>
              <p className="text-sm sm:text-base text-gray-300">+91 7666071321</p>
            </div>

            <div>
              <h3 className="text-xs text-gray-500 mb-2">LOCATION</h3>
              <p className="text-sm sm:text-base text-gray-300">Pune, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
