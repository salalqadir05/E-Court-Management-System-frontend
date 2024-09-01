import React from 'react'
import Sidebar from '../../components/Lawyer Panel/Sidebar'
import Header from '../../components/Lawyer Panel/Header'
import Footer from '../../components/Lawyer Panel/Footer'
import Showcasenumber from '../../components/Lawyer Panel/Showcasenumber'


function CaseNumberShow() {
  return (
    <>
    <div className="wrapper">
    <Sidebar />
    <Header />
    <Showcasenumber />
    <Footer />
    </div>
    </>
  )
}

export default CaseNumberShow