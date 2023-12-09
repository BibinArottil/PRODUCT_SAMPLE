import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Admin/Home";
import AddProduct from "../pages/Admin/AddProduct";
import ProductList from "../pages/Admin/ProductList";

export default function NewAdmin() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route exact path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
}
