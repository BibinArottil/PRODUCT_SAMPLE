import React from 'react'

export default function ProductCard({data}) {
  return (
    <>
    {data?.map((value, index)=>{
        return(
    <div key={index} className='flex flex-col w-full h-[450px] md:w-1/4 md:h-[500px] rounded-md shadow-lg border border-gray-300 my-3 mx-1'>
        <div className='flex mx-auto mt-2 w-11/12 h-72 md:w-5/6 md:h-80'>
            <img className='object-contain' src={value.image} alt="Product" />
        </div>
        <div className='flex flex-col items-center mt-4'>
            <h1 className='text-3xl font-semibold'>{value.name}</h1>
            <p className='font-semibold mt-1 text-lg'>{`₹${value.price}`}</p>
            <button className='py-2 px-3 border mt-1 border-green-300 rounded hover:text-white hover:bg-green-500'>Add to cart</button>
        </div>
    </div>
        )
    })}
    </>
  )
}
