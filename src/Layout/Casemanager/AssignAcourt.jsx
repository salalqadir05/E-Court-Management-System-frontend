import React from 'react'
import Sidebar from '../../components/Management Panel/Index'
import Header from '../../components/Management Panel/Header'
import Assigncourt from '../../components/Management Panel/Assigncourt'
import Footer from '../../components/Management Panel/Footer'
 
function AssignAcourt() {
  return (
    <>
    <div className="wrapper">
    <Sidebar />
    <Header />
    <Assigncourt />
    <Footer />
    </div>
    </>
  )
}

export default AssignAcourt