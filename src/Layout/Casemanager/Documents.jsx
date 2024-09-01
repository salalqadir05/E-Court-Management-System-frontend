import React from 'react'
import Sidebar from "../../components/Management Panel/Index"
import Header from '../../components/Management Panel/Header'
import Footer from '../../components/Management Panel/Footer'
import Document1 from '../../components/Management Panel/Documents'
function Documents() {
  return (
    <>
    <div className="wrapper">

    <Header />
    <Sidebar />
    <Document1 />
    <Footer />
    </div>
    </>
  )
}

export default Documents