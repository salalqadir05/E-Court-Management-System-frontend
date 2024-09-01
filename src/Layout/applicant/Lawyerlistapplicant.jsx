import React from 'react'
import Sidebar from '../../components/Applicant Panel/Sidebar'
import Footer from '../../components/Applicant Panel/Footer'
import Header from '../../components/Applicant Panel/Header'
import Lawyerlisttohire from '../../components/Applicant Panel/Lawyerlisttohire'

function Lawyerlistapplicant() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Lawyerlisttohire />
    <Footer />
    </div>
    </>
  )
}

export default Lawyerlistapplicant