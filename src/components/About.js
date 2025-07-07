import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <motion.h2 
        className="text-3xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I am a developer with a focus on creating elegant and functional user interfaces using modern frontend technologies.
        I love to build projects that solve real-world problems and continuously learn new tools and best practices.
      </motion.p>
    </section>
  );
}

export default About;
