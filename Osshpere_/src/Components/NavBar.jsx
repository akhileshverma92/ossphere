import React from 'react';
import { Link } from 'react-router-dom';
// import { auth } from '../firebase';
// import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    // const auth = getAuth();
    // const user = auth.currentUser;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-sky-600">
                    TechMeets
                </Link>

                <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`md:flex items-center space-x-8 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
                    <Link to="/events" className="block md:inline-block text-gray-600 hover:text-sky-600 transition-colors py-2 md:py-0">
                        Events
                    </Link>
                    <Link to="/eventregister" className="block md:inline-block text-gray-600 hover:text-sky-600 transition-colors py-2 md:py-0">
                        RegisterEvent
                    </Link>
                    <Link to="/CommunitiesPage" className="block md:inline-block text-gray-600 hover:text-sky-600 transition-colors py-2 md:py-0">
                        Communities
                    </Link>
                    <Link to="/about" className="block md:inline-block text-gray-600 hover:text-sky-600 transition-colors py-2 md:py-0">
                        About
                    </Link>
                </div>

                <div className="right flex items-center space-x-4">
                    <p className="hidden md:block">Hi </p>
                    <Link
                        // onClick={() => { auth.signOut() }}
                        className="bg-white text-blue-800 font-bold px-4 py-1 rounded-sm hover:bg-sky-700 transition-colors border-4 border-blue-800 shadow-[6px_6px_0px_black]"
                    >
                        LogOut
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
