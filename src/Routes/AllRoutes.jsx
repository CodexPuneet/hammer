import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from '../Pages/Homepage';
import Cart from '../Pages/Cart';


const AllRoutes = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
   </div>
  )
}

export default AllRoutes