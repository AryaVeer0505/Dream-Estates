import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Listing from './Pages/Listing.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Navbar from './Components/Navbar.jsx';
import Property from './Pages/property.jsx';
import Profile from './Pages/Profile.jsx';
import Dashboard from './Pages/adminDashboard.jsx';
import {Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </>
  );
};
export default App