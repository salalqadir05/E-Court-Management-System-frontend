import React from 'react'
import Sidebar from "../../components/Management Panel/Index"
import Header from '../../components/Management Panel/Header'
import Footer from '../../components/Management Panel/Footer'
import Lawyerlist1 from '../../components/Management Panel/Lawyerlist'
function Lawyerlist() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Lawyerlist1 />
    <Footer />
    </div>
    </>
  )
}

export default Lawyerlist