import React, { useState, useEffect } from "react";
import { Calendar, MapPin, User, Monitor, Navigation, Globe } from "lucide-react";

const sampleEvents = [
  {
    id: 1,
    organizer: "Tech Community",
    title: "React Conference 2025",
    description: "A conference discussing the latest in React.js.",
    date: "2025-04-10",
    mode: "Online",
    location: "Virtual",
    image: "https://source.unsplash.com/400x300/?conference"
  },
  {
    id: 2,
    organizer: "AI Innovators",
    title: "AI & Machine Learning Summit",
    description: "Exploring AI trends and technologies.",
    date: "2025-06-15",
    mode: "Offline",
    location: "San Francisco, CA",
    image: "https://res.cloudinary.com/dfzadc1zw/image/upload/v1739370031/Screenshot_2024-10-22_221534_lqrfco.png"
  },
  {
    id: 3,
    organizer: "Cloud Experts",
    title: "Cloud Computing Bootcamp",
    description: "Learn about the future of cloud computing.",
    date: "2025-08-20",
    mode: "Hybrid",
    location: "New York, NY & Online",
    image: "https://res.cloudinary.com/dfzadc1zw/image/upload/v1739370882/n_kfxcs6.png"
  }
];

function getModeIcon(mode) {
  switch (mode.toLowerCase()) {
    case "online":
      return <Monitor className="w-5 h-5 mr-2 text-cyan-400" />;
    case "offline":
      return <Navigation className="w-5 h-5 mr-2 text-blue-400" />;
    case "hybrid":
      return <Globe className="w-5 h-5 mr-2 text-purple-400" />;
    default:
      return <Globe className="w-5 h-5 mr-2 text-gray-400" />;
  }
}

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(sampleEvents);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#121212] py-12 px-6 text-white flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center mb-12">
          🎉 Upcoming Events
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="relative rounded-xl p-6 bg-[#1E1E1E] border border-gray-800 transition-all duration-300 hover:shadow-xl hover:border-gray-700">
              {/* Event Mode Badge */}
              <div className="absolute top-4 left-4   bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {event.mode}
              </div>

              {/* Event Image */}
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover rounded-lg mb-4 mt-6 shadow-md" />

              {/* Event Details */}
              <h2 className="text-2xl font-bold text-gray-100 mb-2">{event.title}</h2>
              <p className="text-gray-400 mb-4">{event.description}</p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-green-300" />
                  <span>Organizer: {event.organizer}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-400" />
                  <span>Location: {event.location}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-4">
                <button className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md">
                  Update
                </button>
                <button className="w-1/2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No events found.</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default EventList;
