import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Listing from './Pages/Listing.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Property from './Pages/Property.jsx';
import Profile from './Pages/Profile.jsx';
import AddProperty from './Pages/AddProperty.jsx';
import AdminDashboard from './AdminPannel/AdminDashboard.jsx';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/addProperty" element={<AddProperty />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/register/:role" element={<Register />} />
      </Routes>

      
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
