import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../instance/axios";
import ProductCard from "../../components/Admin/ProductCard";

export default function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      axios.get("/admin/productss").then((res) => {
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center fixed justify-between w-full h-16 px-5 md:px-12 bg-slate-300">
        <div>
          <h1 className="font-semibold text-3xl">Products</h1>
        </div>
        <div>
          <button
            onClick={() => navigate("/admin/add-product")}
            className="py-1 px-6 bg-slate-600 text-white hover:text-black font-bold hover:bg-white rounded shadow-xl"
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-5 justify-between mt-16">
        <ProductCard data={products} />
      </div>
    </div>
  );
}
