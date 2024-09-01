import React from 'react'
import Sidebar from "../../components/Management Panel/Index"
import Header from '../../components/Management Panel/Header'
import Footer from '../../components/Management Panel/Footer'
import CaseList from '../../components/Management Panel/CaseList'
function Casemanagercaselidtpage() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <CaseList />
    <Footer />
    </div>
    </>
  )
}

export default Casemanagercaselidtpage