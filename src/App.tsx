import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <ThemeToggle />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Hero />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;