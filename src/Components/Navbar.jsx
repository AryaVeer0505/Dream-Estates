// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import './Navbar.css';
// import Logo from "../assets/—Pngtree—simple house logo design_3633814 (1).png";
// import { useState } from 'react';
// const Navbar = () => {
//   // const [showPopup, setShowPopup] = useState(false);
//   // const [isLogin, setIsLogin] = useState(true);

//   // const togglePopup = (isLogin) => {
//   //   setIsLogin(isLogin);
//   //   setShowPopup(!showPopup);
//   // };
//   return (
//     <>
//       <div className="navbar bg-black text-white rounded-b-lg flex justify-between p-5 items-center">
//         <div className="logo flex items-center">
//           <img src={Logo} alt="Dream Estates Logo" className="h-10 w-10 mr-2" />
//           <p className="text-2xl font-bold"><span className="text-green-500">Dream</span>Estates</p>
//         </div>
//         <div className="nav-links">
//           <ul className="flex gap-12">
//             <li className='text-xl font-bold'><NavLink to='/' className={({ isActive }) => isActive ? "active-link text-green-500 underline" : "hover:bg-green-500 hover:text-white p-2 rounded-lg"}>Home</NavLink></li>
//             <li className='text-xl font-bold'><NavLink to='/listing' className={({ isActive }) => isActive ? "active-link text-green-500 underline" : "hover:bg-green-500 hover:text-white p-2 rounded-lg"}>Listing</NavLink></li>
//             <li className='text-xl font-bold'><NavLink to='/about' className={({ isActive }) => isActive ? "active-link text-green-500 underline" : "hover:bg-green-500 hover:text-white p-2 rounded-lg"}>About</NavLink></li>
//             <li className='text-xl font-bold'><NavLink to='/contact' className={({ isActive }) => isActive ? "active-link text-green-500 underline" : "hover:bg-green-500 hover:text-white p-2 rounded-lg"}>Contact</NavLink></li>
//           </ul>
//         </div>
//         <div className="nav-btns">
//            <button className='signup-btn bg-green-500 px-4 py-2 rounded-lg text-lg font-bold hover:bg-gray-500 transition-all' >Sign-up</button>
//           <button className='login-btn bg-green-500 px-4 py-2 rounded-lg text-lg font-bold hover:bg-gray-500 transition-all ml-4'>Login</button>
//         </div>
//       </div>
// {/* {showPopup && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//     <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//       <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign-up'}</h2>
//       {isLogin ? (
//         <form>
//           <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
//           <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
//           <button className="w-full bg-green-500 text-white p-2 rounded  hover:bg-green-600">Login</button>
//         </form>
//       ) : (
//         <form>
//           <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
//           <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
//           <input type="password" placeholder="Confirm Password" className="w-full p-2 mb-4 border rounded" />
//           <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Sign-up</button>
//         </form>
//       )}
//       <button className="mt-4 text-gray-500 hover:text-black" onClick={() => setShowPopup(false)}>Close</button>
//     </div>
//   </div>
// )} */}
//     </>
//   );
// }

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/—Pngtree—simple house logo design_3633814 (1).png";

import '../assets/css/Navbar.css'; 

const Navbar = () => {


  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Dream Estates Logo" className="logo-img" />
          <h2><span className="logo-highlight">Dream</span>Estates</h2>
        </div>
        <div className="nav-links">
          <ul>
            <li><NavLink to='/' className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
            <li><NavLink to='/listing' className={({ isActive }) => isActive ? "active-link" : ""}>Listing</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="nav-btns">
        <NavLink to='/login'>Login</NavLink>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
