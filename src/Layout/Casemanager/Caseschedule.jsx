import React from 'react'
import Sidebar from "../../components/Management Panel/Index"
import Header from '../../components/Management Panel/Header'
import Footer from '../../components/Management Panel/Footer'
import Caseschedule1 from '../../components/Management Panel/Caseschedule'
function Caseschedule() {
  return (
    <>
    <div className="wrapper">
    <Header /> 
    <Sidebar />
     <Caseschedule1 /> 
     <Footer />
     </div>
    </>
  )
}

export default Caseschedule