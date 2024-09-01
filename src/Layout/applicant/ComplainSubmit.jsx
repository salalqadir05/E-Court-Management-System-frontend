import React from 'react'
import Sidebar from '../../components/Applicant Panel/Sidebar'
import Footer from '../../components/Applicant Panel/Footer'
import Header from '../../components/Applicant Panel/Header'
import Complain from '../../components/Applicant Panel/Complain'

function ComplainSubmit() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Complain />
    <Footer />
    </div>
    </>
  )
}

export default ComplainSubmit