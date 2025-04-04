import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImg from '../assets/home.png';
import Apartment1 from '../assets/Apartment1.jpg';
import Villa1 from '../assets/villa1.jpg';
import Familyhouse1 from '../assets/familyhouse1.jpg';

const Home = () => {
  return (
    <div className="w-full font-sans">


      <div className="relative h-[85vh] flex flex-col md:flex-row items-center justify-center px-10 bg-gray-100 text-black text-left gap-5">
     
        <div className="absolute inset-0 bg-white bg-opacity-20 z-0"></div>

      
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide capitalize">Find Your Dream Home</h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">Explore our exclusive listings and discover the perfect property for you and your family.</p>
          <NavLink to="/listing" className="inline-block mt-5 bg-green-500 text-white px-6 py-3 text-lg font-semibold rounded-lg transition hover:bg-green-600 shadow-md transform hover:scale-105">
            View Listings
          </NavLink>
        </div>


        <div className="relative z-10 flex justify-center">
          <img src={homeImg} alt="Home" className="w-full max-w-xl md:max-w-2xl" />
        </div>
      </div>

      
      <div className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    
          {[ 
            { img: Villa1, title: "Luxury Villa", location: "Los Angeles, CA", price: "$2,500,000" },
            { img: Apartment1, title: "Modern Apartment", location: "New York, NY", price: "$850,000" },
            { img: Familyhouse1, title: "Cozy Family Home", location: "Miami, FL", price: "$650,000" }
          ].map((property, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
              <img src={property.img} alt={property.title} className="w-full h-60 object-cover rounded-t-lg" />
              <div className="p-5 flex flex-col items-center">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-green-500 font-bold text-lg">{property.price}</p>
                <NavLink to="/listing" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition hover:bg-green-600">
                  View Details
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      <div className="w-full text-center py-12 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-3 text-lg">Have questions? Contact us to find the perfect home for you.</p>
        <NavLink to="/contact" className="mt-5 inline-block bg-green-500 text-white px-6 py-3 text-lg font-semibold rounded-lg transition hover:bg-green-600 transform hover:scale-105">
          Contact Us
        </NavLink>
      </div>

    </div>
  );
};

export default Home;