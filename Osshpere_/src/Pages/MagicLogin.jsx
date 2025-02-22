import React, { useState } from "react";
import { Client, Account } from "appwrite";
import { useNavigate } from "react-router-dom";

// Initialize Appwrite Client
const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject("67b96f9b003d254361e1"); // Replace with your Appwrite Project ID

const account = new Account(client);

const MagicLogin = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleMagicLinkLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await account.updateMagicURLSession("unique()", email, "http://localhost:3000/auth-callback");
      setMessage("Magic link sent! Check your email.");
    } catch (err) {
      setError(err.message || "Something went wrong, try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Magic Link Login</h1>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleMagicLinkLogin} className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="block w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Magic Link
        </button>
      </form>
    </div>
  );
};

export default MagicLogin;
