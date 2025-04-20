import React from "react";
import { account } from "../Appwrite";

const LoginPage = () => {
  const loginWithGoogle = async () => {
    try {
      await account.createOAuth2Session("google", "https://ossphere.vercel.app/home");
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to Our App
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please sign in to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <button
            onClick={loginWithGoogle}
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
          
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;