import React, { useState } from "react";

const EventRegister = () => {
  const [eventData, setEventData] = useState({
    name: "",
    title: "",
    description: "",
    date: "",
    mode: "",
    address: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [step, setStep] = useState(1);

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

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", eventData);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-3xl bg-gray-800 bg-opacity-90 shadow-2xl rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            🚀 Register Your Event
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  />
                </div>
              </>
            )}

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
              </>
            )}

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
                      className="w-full h-30  object-contain rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </>
            )}

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
                  className="px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-all"
                >
                  Next ➡
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-all"
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

export default EventRegister;