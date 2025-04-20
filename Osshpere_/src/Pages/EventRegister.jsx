import React, { useState, useEffect } from "react";
import { Client, Databases, ID, Account } from "appwrite";
import { toast } from "react-fox-toast";

// Initialize Appwrite
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);

// Constants
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// Cloudinary configuration
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const EventRegister = () => {
  const [eventData, setEventData] = useState({
    name: "",
    title: "",
    description: "",
    date: "",
    mode: "",
    address: "",
    image: "",
    website: "", // Added website URL field
  });

  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [step, setStep] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);

  // Get current user when component mounts
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = await account.get();
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching current user:", error);
        alert("You must be logged in to register an event.");
        // Redirect to login if user is not authenticated
        window.location.href = "/login";
      }
    };

    getCurrentUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview immediately
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      
      if (data.secure_url) {
        setEventData(prev => ({
          ...prev,
          image: data.secure_url
        }));
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!eventData.name || !eventData.title || !eventData.description || !eventData.date || !eventData.mode) {
      alert('Please fill in all required fields');
      return;
    }

    if (!currentUser) {
      alert('You must be logged in to register an event');
      window.location.href = "/login";
      return;
    }

    setLoading(true);

    try {
      // Create event document with Cloudinary image URL and logged-in user's ID
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          name: eventData.name,
          title: eventData.title,
          description: eventData.description,
          date: eventData.date,
          mode: eventData.mode,
          address: eventData.address,
          image: eventData.image,
          website: eventData.website, // Save website URL
          createdAt: new Date().toISOString(),
          userId: currentUser.$id, // Store the actual logged-in user's ID
          // Optional: store email for additional verification
        }
      );

      // Reset form
      setEventData({
        name: "",
        title: "",
        description: "",
        date: "",
        mode: "",
        address: "",
        image: "",
        website: "", // Reset website URL
      });
      setPreviewUrl("");
      setStep(1);
      toast.success('Event registered successfully!', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.error('Error registering event:', error);
      alert('Failed to register event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show loading state if user data is still being fetched
  if (!currentUser) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-3xl bg-gray-800 bg-opacity-90 shadow-2xl rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            🚀 Register Your Event
          </h2>

          <form onSubmit={handleSubmit} className="">
            {/* Step 1 */}
            {step === 1 && (
              <>
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Organizer Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={eventData.name}
                    onChange={handleChange}
                    placeholder="Enter organizer name"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Event Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    value={eventData.title}
                    onChange={handleChange}
                    placeholder="Enter event title"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Event Description
                  </label>
                  <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    placeholder="Enter event description"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                    required
                  />
                </div>
              </>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <>
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Event Mode
                  </label>
                  <select
                    name="mode"
                    value={eventData.mode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select event mode</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Event Address
                  </label>
                  <input
                    name="address"
                    type="text"
                    value={eventData.address}
                    onChange={handleChange}
                    placeholder="Enter event address"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Website URL Field */}
                <div className="space-y-4 mt-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Event Website URL
                  </label>
                  <input
                    name="website"
                    type="url"
                    value={eventData.website}
                    onChange={handleChange}
                    placeholder="https://yourevent.com"
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-400">
                    Add a link where attendees can find more information about your event
                  </p>
                </div>
              </>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <>
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Event Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={eventData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-300">
                    Event Image
                  </label>
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {(previewUrl || eventData.image) && (
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <img
                      src={previewUrl || eventData.image}
                      alt="Event preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 bg-gray-600 rounded-lg text-white hover:bg-gray-700 transition-all"
                >
                  ⬅ Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-all ml-auto"
                >
                  Next ➡
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-all ml-auto"
                >
                  {loading ? "Registering..." : "🚀 Register Event"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegister;