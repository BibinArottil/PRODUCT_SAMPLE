import React from "react";

export default function ProductCard({data}) {
  return (
    <>
    {data?.map((value, index)=>{
        return(
    <div key={index} className="flex w-11/12 items-center justify-start md:w-3/12 bg-gray-200 rounded-md shadow-md h-32 my-4 mx-auto">
      <img
        className="w-2/6 h-24 mx-4 object-cover"
        src={value.image}
        alt="Product"
      />
      <div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">{value.name}</h1>
          <p className="font-bold">{`₹ ${value.price}`}</p>
        </div>
      </div>
    </div>
        )
    })}
    </>
  );
}
