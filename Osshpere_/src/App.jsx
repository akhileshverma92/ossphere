import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { account } from './Appwrite'; // Import Appwrite SDK
import Home from './Pages/Home';
import EventListing from './Pages/EventListing';
import EventRegister from './Pages/EventRegister';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CommunitiesPage from './Pages/CommunitiesPage';
import AboutUs from './Pages/AboutUs';
import LoginPage from './Pages/LoginPage';

// Protected Route Component
const ProtectedRoute = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await account.get(); // Fetch user details
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) return <div>Loading...</div>; // Show loading while checking auth
    return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <div className="main">
            <Router>
               <NavBar />
              <div className="main pt-16 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a">
              <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<LoginPage />} />

                    {/* Protected Routes */}
                    <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
                    <Route path="/events" element={<ProtectedRoute element={<EventListing />} />} />
                    <Route path="/eventregister" element={<ProtectedRoute element={<EventRegister />} />} />
                    <Route path="/CommunitiesPage" element={<ProtectedRoute element={<CommunitiesPage />} />} />
                    <Route path="/about" element={<ProtectedRoute element={<AboutUs />} />} />

                    {/* Redirect "/" to "/login" by default */}
                    <Route path="/" element={<Navigate to="/home" />} />
                </Routes>
              </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
