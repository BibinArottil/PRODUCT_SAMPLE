import React from 'react'
import {useNavigate} from "react-router-dom"

export default function ViewProductCard() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate("/admin/products")} className='flex w-5/6 items-center justify-start bg-slate-100 rounded-md shadow-md h-20 my-5 mx-auto'>
        <h1 className='font-bold text-2xl px-8 text-violet-400'>View products</h1>
    </div>
  )
}
