import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-6 py-12">
      <motion.div 
        className="max-w-4xl mx-auto bg-[#1E1E1E]/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About This Project
        </motion.h1>

        <motion.p className="text-gray-300 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          This project is an <span className="font-semibold text-cyan-400">open-source initiative</span> developed as part of the 
          <span className="font-semibold text-blue-400"> FOSS Hack 2025</span> open-source hackathon. The goal is to create a platform that helps 
          developers discover and engage with coding communities across India.
        </motion.p>

        <motion.p className="text-gray-300 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Our mission is to bridge the gap between students, professionals, and open-source contributors by providing a centralized hub for community engagement.
        </motion.p>

        <motion.h2 
          className="text-2xl font-semibold text-cyan-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Features
        </motion.h2>

        <motion.ul 
          className="list-disc list-inside text-gray-300 mt-2 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <li>🔍 Search and discover various tech communities</li>
          <li>🛠 Filter communities based on categories</li>
          <li>💡 Open-source contribution-friendly project</li>
          <li>📱 Mobile-responsive UI with Tailwind CSS</li>
        </motion.ul>

        <motion.h2 
          className="text-2xl font-semibold text-blue-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Contribute
        </motion.h2>

        <motion.p className="text-gray-300 text-lg mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          This project is open to contributions! If you're interested, check out our GitHub repository, submit issues, and contribute to making this platform better.
        </motion.p>

        <motion.p 
          className="text-center text-cyan-400 font-semibold mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          #FOSSHack2025 #OpenSource #TechCommunities
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
