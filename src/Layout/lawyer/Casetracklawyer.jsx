import React from 'react'
import Header from '../../components/Lawyer Panel/Header'
import Sidebar from '../../components/Lawyer Panel/Sidebar'
import Casetracking from '../../components/Lawyer Panel/Casetracking'
import Footer from '../../components/Lawyer Panel/Footer'

function Casetracklawyer() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Casetracking />
    <Footer />
    </div>
    
    </>
  )
}

export default Casetracklawyer