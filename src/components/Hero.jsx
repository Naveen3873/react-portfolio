import { motion } from 'framer-motion';
// import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I’m Naveen</h1>
        <p className="text-lg mb-6">
          I build fast, accessible, and beautiful web experiences using modern web technologies.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-brand text-white rounded-lg hover:scale-105 transition-transform"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border border-slate-200 rounded-lg hover:scale-105 transition-transform"
          >
            Contact me
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* <img src={profile} alt="Profile" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"/> */}
      </motion.div>
    </section>
  );
}