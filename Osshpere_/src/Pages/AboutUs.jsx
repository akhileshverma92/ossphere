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
          About Our Project
        </motion.h1>

        <motion.p className="text-gray-300 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          This project is a <span className="font-semibold text-cyan-400">final year major project</span> developed by 
          <span className="font-semibold text-blue-400"> Computer Engineering students</span>. Our application aims to create a comprehensive platform that helps
          developers discover and engage with coding communities across India.
        </motion.p>

        <motion.p className="text-gray-300 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Our mission is to bridge the gap between students, professionals, and open-source contributors by providing a centralized hub for community engagement and event management.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-cyan-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Key Features
        </motion.h2>

        <motion.ul
          className="list-disc list-inside text-gray-300 mt-2 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <li>🔍 Search and discover various tech communities</li>
          <li>📅 Register and manage tech events</li>
          <li>👥 User authentication and profile management</li>
          <li>📱 Responsive design with modern UI/UX principles</li>
          <li>☁️ Cloud-based storage for event images and data</li>
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold text-blue-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Technology Stack
        </motion.h2>

        <motion.ul
          className="list-disc list-inside text-gray-300 mt-2 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <li>⚛️ React.js for frontend development</li>
          <li>🔄 Appwrite for backend services</li>
          <li>🎨 TailwindCSS for styling</li>
          <li>🖼️ Cloudinary for image management</li>
          <li>🔆 Framer Motion for animations</li>
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold text-cyan-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Project Timeline
        </motion.h2>

        <motion.p className="text-gray-300 text-lg mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          This project was developed over the course of the final semester and will be presented at the institute's project exhibition on April 22, 2025.
        </motion.p>

        <motion.p
          className="text-center text-cyan-400 font-semibold mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          #FinalYearProject #Engineering #TechCommunities
        </motion.p>

        {/* Team Members Section */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {["Akhilesh Verma", "Hariom", "Vidushi Gupta"].map((name, index) => (
              <motion.div
                key={index}
                className="bg-[#2a2a2a] p-4 rounded-lg shadow-lg border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg font-semibold text-cyan-300">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
