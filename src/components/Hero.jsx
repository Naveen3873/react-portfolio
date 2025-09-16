import { motion } from 'framer-motion'
import profile from '../assets/profile.jpeg'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto px-6 py-16">
      {/* Profile Image on Mobile First */}
      <motion.div
        className="flex justify-center md:justify-end order-1 md:order-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 md:w-64 md:h-64 object-cover 
                    shadow-lg border-4 border-gray-200 dark:border-gray-700
                    transition-all"
        />
      </motion.div>

      {/* Text Content Below on Mobile */}
      <motion.div
        className="order-2 md:order-1"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I’m Naveen</h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          {/* I build fast, accessible, and beautiful web experiences using modern web technologies. */}
          I design and build web experiences that are fast, accessible, and a joy to use.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/naveen-k-84a804238/"
            className="inline-block px-6 py-3
                      bg-black text-white 
                      dark:bg-white dark:text-black
                      border border-slate-200 
                      rounded-lg shadow-md
                      hover:scale-105 transition-transform"
            target="_blank"
          >
            View LinkedIn
          </a>

          <a
            href="https://github.com/Naveen3873"
            className="inline-block px-6 py-3 
                      border border-slate-200 
                      text-black dark:text-white
                      rounded-lg shadow-md
                      hover:scale-105 transition-transform"
            target="_blank"
          >
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}