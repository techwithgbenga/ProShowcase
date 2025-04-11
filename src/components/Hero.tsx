import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional, and user-friendly digital experiences. 
            Passionate about solving complex problems through elegant solutions.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com"
               className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}