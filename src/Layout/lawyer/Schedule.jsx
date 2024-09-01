import React from 'react'
import Header from '../../components/Lawyer Panel/Header'
import Showdate from '../../components/Lawyer Panel/Showdate'
import Footer from '../../components/Lawyer Panel/Footer'
import Sidebar from '../../components/Lawyer Panel/Sidebar'

function Schedule() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Showdate />
    <Footer />
    </div>
    </>
  )
}

export default Schedule