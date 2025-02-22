import React from 'react'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import EventListing from './Pages/EventListing'
import EventRegister from './Pages/EventRegister'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import CommunitiesPage from './Pages/CommunitiesPage'
import AboutUs from './Pages/AboutUs'
import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/MagicLogin'
import MagicLogin from './Pages/MagicLogin'
function App() {
  return (
   <div className="main">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MagicLogin />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/events" element={<EventListing />} />
        <Route path="/eventregister" element={<EventRegister />} />
        <Route path="/CommunitiesPage" element={<CommunitiesPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </Router>
   </div>
  )
}

export default App