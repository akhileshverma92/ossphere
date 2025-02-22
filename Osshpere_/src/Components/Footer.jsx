import { Calendar } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-500" />
              <span className="text-white font-medium">Event Tracker</span>
            </div>
            <p className="text-gray-400">Made with ❤️ for FOSS Hackathon</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400  hover:text-gray-600 transition-colors">
                MIT License
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400  hover:text-gray-600 transition-colors">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer