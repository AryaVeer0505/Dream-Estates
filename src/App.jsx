import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Listing from './Pages/Listing'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router'
const router=createBrowserRouter([
  {
    path:'/',
    element:<>
      <Navbar/>
      <Home/>
    </>
  },
  {
    path:'/listing',
    element:<>
      <Navbar/>
      <Listing/>
    </>
  },
  {
    path:'/about',
    element:<>
      <Navbar/>
      <About/>
    </>
  },
  {
    path:'/contact',
    element:<>
      <Navbar/>
      <Contact/>
    </>
  },
  {
    path:'/login',
    element:<>
      <Navbar/>
      <Login/>
    </>
  },
])
const App = () => {
  return (<>
    <RouterProvider router={router}/>
    </>
  )
}

export default App