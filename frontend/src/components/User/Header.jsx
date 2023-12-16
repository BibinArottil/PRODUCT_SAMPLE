import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header({onSearch}) {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const handleSearch = (event) => {
        setSearch(event.target.value);
        onSearch(search)
    };

  return (
    <div className='flex fixed items-center justify-between md:justify-between w-full h-16 px-2 md:px-12 bg-slate-300'>
        <h1 className='font-semibold text-xs md:text-3xl'>Product List</h1>
        <input type="text" onChange={handleSearch} className='w-3/6 rounded md:w-2/6 md:py-1 outline-none cursor-pointer' placeholder='Search'/>
        <button onClick={()=>navigate("/cart")} className='text-xs border border-gray-700 rounded px-4 py-2 shadow-md'>Cart</button>
    </div>
  )
}
