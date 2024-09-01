import React from 'react'
import Header from '../../components/Lawyer Panel/Header'
import Sidebar from '../../components/Lawyer Panel/Sidebar'
import Registerfile from '../../components/Lawyer Panel/Registerfile'
import Footer from '../../components/Lawyer Panel/Footer'

function mainlawyer() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar /> 
    <Registerfile />
    <Footer />
    </div>
        </>
  )
}

export default mainlawyer