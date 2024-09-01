import React from 'react'
import Sidebar from "../../components/Management Panel/Index"
import Header from '../../components/Management Panel/Header'
import Footer from '../../components/Management Panel/Footer'
import Emploeelist from '../../components/Management Panel/Employeelist'
function Employeelist() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Emploeelist />
    <Footer />
    </div>
    </>
  )
}

export default Employeelist