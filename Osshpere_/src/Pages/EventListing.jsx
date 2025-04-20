import React, { useState, useEffect } from "react";
import { Client, Databases, Query, Account } from "appwrite";
import { motion } from "framer-motion";
import { toast } from "react-fox-toast";

// Initialize Appwrite
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const EventListing = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Get current user and fetch events when component mounts
    const initializeData = async () => {
      try {
        // Try to get current user
        const user = await account.get();
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
        // User is not logged in or session expired
        setCurrentUser(null);
      }

      // Fetch events regardless of login status
      await fetchEvents();
    };

    initializeData();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.orderDesc("date")]
      );
      setEvents(response.documents);
     
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
     
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        eventId
      );
      // Update the events list after deletion
      toast.warning('Event deleted successfully', {
        position: 'bottom-right'
      });
      setEvents(events.filter(event => event.$id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event. Please try again.");
    }
  };

  // Function to add event to calendar
  const addToCalendar = (event) => {
    try {
      // Format date for calendar (assuming event.date is in ISO format)
      const eventDate = new Date(event.date);
      // Set end date to 1 hour after start by default
      const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);
      
      // Format dates for Google Calendar URL
      const startDateFormatted = eventDate.toISOString().replace(/-|:|\.\d+/g, '');
      const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '');
      
      // Create Google Calendar URL
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDateFormatted}/${endDateFormatted}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.address || '')}&sprop=website:`;
      
      // Open calendar link in new tab
      window.open(googleCalendarUrl, '_blank');
      
      toast.success('Event added to calendar', {
        position: 'bottom-right'
      });
    } catch (error) {
      console.error("Error adding to calendar:", error);
      toast.error('Failed to add event to calendar', {
        position: 'bottom-right'
      });
    }
  };

  // Function to handle "More Info" button click
  const handleMoreInfo = (event) => {
    // If event has a website URL, open it in a new tab
    if (event.website) {
      window.open(event.website, '_blank');
    } else {
      // If no website URL is provided, show a toast notification
      toast.info('No additional information available for this event', {
        position: 'bottom-right'
      });
    }
  };

  // Check if current user is the creator of an event
  const isEventCreator = (event) => {
    if (!currentUser) return false;

    // Check different possible ways the user ID might be stored
    if (event.userId && event.userId === currentUser.$id) return true;

    // If event has creator's email and it matches current user's email

    return false;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8 relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          🎉 Upcoming Events
        </motion.h1>

        {events.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-400"
          >
            No events found. Be the first to register an event!
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.$id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {event.image && (
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {event.mode.toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">👤 Organized by {event.name}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400">
                      📅 {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    {event.address && (
                      <p className="text-sm text-gray-400 mt-2">
                        📍 {event.address}
                      </p>
                    )}
                  </div>

                  <p className="text-gray-400 mb-4">
                    {event.description.length > 100
                      ? `${event.description.substring(0, 100)}...`
                      : event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {/* More Info button */}
                    <button 
                      onClick={() => handleMoreInfo(event)}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      More Info
                    </button>
                    
                    {/* Add to Calendar button */}
                    <button 
                      onClick={() => addToCalendar(event)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Add to Calendar
                    </button>
                  </div>

                  {/* Delete button - only shown if the current user is the creator */}
                  {isEventCreator(event) && (
                    <div className="mt-2">
                      <button
                        onClick={() => handleDeleteEvent(event.$id)}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventListing;