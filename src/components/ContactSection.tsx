<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
  className="min-h-screen px-4 sm:px-6 md:pl-20 md:pr-8 py-12 flex items-center"
>
  <div className="max-w-4xl mx-auto w-full">

    {/* Header */}
    <motion.div 
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="mb-12 text-center"
    >
      <div className="flex items-center justify-center gap-4 mb-2">
        <Mail className="text-[#ff2d55]" size={24} />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold tracking-[0.15em]">
          CONTACT ME
        </h2>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent w-64 mx-auto" />
      <p className="mt-4 text-gray-400">
        Feel free to reach out for opportunities or collaboration.
      </p>
    </motion.div>

    {/* GRID FIX */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

      {/* Form */}
      <motion.div>
        <form className="space-y-4 md:space-y-6">
          <input 
            type="text" 
            placeholder="Your Name"
            className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm text-white"
          />

          <input 
            type="email" 
            placeholder="Your Email"
            className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm text-white"
          />

          <textarea 
            rows={5}
            placeholder="Your Message"
            className="w-full bg-transparent border border-[#ff2d55]/30 px-4 py-3 text-sm text-white resize-none"
          />

          <button className="w-full py-3 border border-[#ff2d55] text-[#ff2d55]">
            SEND MESSAGE
          </button>
        </form>
      </motion.div>

      {/* Info */}
      <motion.div className="space-y-8">

        <div>
          <h3 className="text-xs text-gray-500 mb-2">EMAIL</h3>
          <a 
            href="mailto:samadhanshegde2018@gmail.com"
            className="text-sm sm:text-base md:text-lg break-all text-[#ff2d55]"
          >
            samadhanshegde2018@gmail.com
          </a>
        </div>

      </motion.div>
    </div>

  </div>
</motion.div>
