import React from 'react'
import Sidebar from "../../components/Management Panel/Index"
import Header from '../../components/Management Panel/Header'
import Dashborad from '../../components/Management Panel/Dashborad'
import Footer from '../../components/Management Panel/Footer'
function CaseManagerLayout() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Dashborad />
    <Footer />
    </div>
    </>
  )
}

export default CaseManagerLayout