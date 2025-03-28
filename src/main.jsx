import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Listing from './Pages/Listing.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Property from './Pages/property.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/listing' element={<Listing/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/property/:id' element={<Property/>}/>

     </Routes>
  </BrowserRouter>,
)
