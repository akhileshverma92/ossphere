import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Users, Search, Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-white">
      {/* Hero Section */}
      
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          className="text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🚀 Explore & Track <br />
          <span className="text-yellow-400">Tech Events in One Click</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-3xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover hackathons, conferences, and meetups worldwide. Stay ahead of
          the game with real-time event tracking and seamless registration.
        </motion.p>
        <motion.button
          className="mt-6 px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        >
          Find Events
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-300">🔥 Why Choose Event Tracker?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <CalendarCheck size={40} className="text-blue-400 mx-auto mb-4" />,
              title: "Upcoming Events",
              desc: "Stay ahead with the latest tech events happening globally.",
            },
            {
              icon: <Users size={40} className="text-green-400 mx-auto mb-4" />,
              title: "Community Driven",
              desc: "Engage with developers, speakers, and event organizers.",
            },
            {
              icon: <Search size={40} className="text-purple-400 mx-auto mb-4" />,
              title: "Advanced Filters",
              desc: "Find events by location, category, and date easily.",
            },
            {
              icon: <Rocket size={40} className="text-red-400 mx-auto mb-4" />,
              title: "Easy Registration",
              desc: "Sign up for events in a few clicks without any hassle.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#1e1e1e] bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 hover:shadow-blue-500/50"
              whileHover={{ scale: 1.05 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-200">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          🎟 Ready to Join an Event?
        </motion.h2>
        <motion.button
          className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full hover:shadow-lg transition transform hover:scale-105 shadow-blue-500/50"
          whileHover={{ scale: 1.1 }}
        >
          Start Exploring
        </motion.button>
      </section>

      {/* Floating Neon Effect */}
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-purple-600 rounded-full filter blur-3xl opacity-40"
        animate={{ x: [0, 20, -20, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-40"
        animate={{ x: [0, -20, 20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default Home;