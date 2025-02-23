import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { account } from "../Appwrite";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await account.get();
                setUser(userData);
            } catch (error) {
                console.error("Not logged in:", error);
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            window.location.href = "/";
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className="bg-[#121212]/50 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/home" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        OSSphere
                    </Link>

                    {user && (
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}

                    {user && (
                        <div
                            className={`md:flex items-center space-x-8 ${
                                isOpen ? "block" : "hidden"
                            } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-[#121212]/95 md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 backdrop-blur-lg`}
                        >
                            <Link
                                to="/events"
                                className="block md:inline-block text-gray-300 hover:text-blue-400 transition-colors py-2 md:py-0"
                            >
                                Events
                            </Link>
                            <Link
                                to="/eventregister"
                                className="block md:inline-block text-gray-300 hover:text-blue-400 transition-colors py-2 md:py-0"
                            >
                                RegisterEvent
                            </Link>
                            <Link
                                to="/CommunitiesPage"
                                className="block md:inline-block text-gray-300 hover:text-blue-400 transition-colors py-2 md:py-0"
                            >
                                Communities
                            </Link>
                            <Link
                                to="/about"
                                className="block md:inline-block text-gray-300 hover:text-blue-400 transition-colors py-2 md:py-0"
                            >
                                About
                            </Link>
                        </div>
                    )}

                    <div className="right flex items-center space-x-4">
                        {user ? (
                            <>
                                <p className="hidden md:block text-gray-300">Hi, {user.name}</p>
                                <button
                                    onClick={handleLogout}
                                    className="bg-transparent text-white font-bold px-4 py-1 rounded-lg 
                                    border-2 border-purple-500 hover:border-blue-500 transition-all duration-300
                                    hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] shadow-[0_0_10px_rgba(147,51,234,0.3)]"
                                >
                                    LogOut
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-6 py-2 
                                rounded-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;