import { Calendar } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-400" />
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-medium">
              Event Tracker
            </span>
          </div>

          <p className="text-gray-400 font-medium">
            Made with{" "}
            <span className="text-red-500 animate-pulse">❤️</span>
            {" "}for FOSS Hackathon
          </p>

          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              MIT License
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer