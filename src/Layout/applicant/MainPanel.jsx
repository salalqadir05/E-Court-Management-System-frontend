import React from 'react'
import Sidebar from '../../components/Applicant Panel/Sidebar'
import RegisterApplicantCase from '../../components/Applicant Panel/RegisterApplicantCase'
import Footer from '../../components/Applicant Panel/Footer'
import Header from '../../components/Applicant Panel/Header'
function MainPanel() {
  return (
    <>
    <div className="wrapper">
    <Sidebar />
    <Header />
    <RegisterApplicantCase />
    <Footer />
    </div>
    </>
  )
}

export default MainPanel