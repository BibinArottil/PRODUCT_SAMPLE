import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/User/Home'
import Cart from '../pages/User/Cart'

export default function User() {
  return (
        <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}
