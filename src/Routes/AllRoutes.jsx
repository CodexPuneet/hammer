import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from '../Pages/Homepage';
import AboutUs from '../Pages/About';
import ContactUs from '../Pages/Contact';


const AllRoutes = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<ContactUs />} />
  </Routes>
   </div>
  )
}

export default AllRoutes