import React from 'react'
// import {useNavigate} from "react-router-dom"
// import axios from '../../instance/axios'
import Header from '../../components/Admin/Header'
import ViewProductCard from '../../components/Admin/ViewProductCard'
import ViewOrdersCard from '../../components/Admin/ViewOrdersCard'

export default function Home() {
  // const navigate = useNavigate()
    // axios.get("/").then((res)=>{
    //     alert(res.data)
    // })
  return (
    <>
    <Header />
    <ViewProductCard />
    <ViewOrdersCard />
    </>
  )
}
