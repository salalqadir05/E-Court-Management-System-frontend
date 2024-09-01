import React from 'react'
import Sidebar from '../../components/Management Panel/Index'
import Header from '../../components/Management Panel/Header'
import Assignjudge from '../../components/Management Panel/Assignjudge'
import Footer from '../../components/Management Panel/Footer'
 
function AssignAjudge() {
  return (
    <>
    <div className="wrapper">
    <Sidebar />
    <Header />
    <Assignjudge />
    <Footer />
    </div>
    </>
  )
}

export default AssignAjudge