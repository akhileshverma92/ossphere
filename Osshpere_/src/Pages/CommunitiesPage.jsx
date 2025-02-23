import React, { useState } from "react";
import { Search, Filter } from 'lucide-react';
import { motion } from "framer-motion";

const communities = [
  { name: "FOSS United", category: "Open Source", link: "https://fossunited.org/", img: "/foss.png", color: "blue" },
  { name: "GDSC India", category: "Student Community", link: "https://developers.google.com/community/gdsc", img: "/gdsc.png", color: "green" },
  { name: "Microsoft Learn Student Ambassadors", category: "Student Community", link: "https://studentambassadors.microsoft.com/", img: "/microsoft.png", color: "yellow" },
  { name: "Mozilla India", category: "Open Source", link: "https://mozillaindia.org/", img: "/mozzila.png", color: "red" },
  { name: "CodeChef Chapters", category: "Competitive Programming", link: "https://www.codechef.com/", img: "codechef.png", color: "purple" },
  { name: "GitHub Campus Experts India", category: "Open Source", link: "https://education.github.com/experts", img: "/github.png", color: "indigo" },
  { name: "Devfolio Community", category: "Hackathons", link: "https://devfolio.co/", img: "https://via.placeholder.com/100", color: "pink" },
  { name: "IndiaHacks by HackerEarth", category: "Hackathons", link: "https://www.hackerearth.com/", img: "https://via.placeholder.com/100", color: "teal" },
  { name: "PES Open Source Community (PESOS)", category: "Open Source", link: "https://pesos.tech/", img: "https://via.placeholder.com/100", color: "gray" },
  { name: "T-Hub", category: "Startup & Incubation", link: "https://t-hub.co/", img: "https://via.placeholder.com/100", color: "orange" },
];

const categories = ["All", "Open Source", "Student Community", "Competitive Programming", "Hackathons", "Startup & Incubation"];

const CommunitiesPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCommunities = communities.filter((community) => {
    return (
      (filter === "All" || community.category === filter) &&
      community.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h1 
          className="text-4xl font-extrabold text-center mb-8 text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Tech Communities in India
        </motion.h1>

        {/* Search and Filter Section */}
        <div className="mb-8 flex space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search communities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none w-full pl-4 pr-10 py-3 rounded-xl border-2 border-gray-600 bg-gray-800 text-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Communities Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {filteredCommunities.length > 0 ? (
            filteredCommunities.map((community) => (
              <motion.a
                key={community.name}
                href={community.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-800 border-4 border-${community.color}-500 rounded-xl p-6 flex items-center space-x-4 shadow-lg hover:scale-105 transition-transform duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={community.img} 
                  alt={community.name} 
                  className={`w-20 h-20 rounded-full object-cover border-4 border-${community.color}-200`} 
                />
                <div>
                  <h2 className={`text-xl font-bold text-${community.color}-400`}>{community.name}</h2>
                  <p className={`text-sm text-gray-400`}>{community.category}</p>
                </div>
              </motion.a>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500">
              No communities found matching your search.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CommunitiesPage;
