import React from 'react'
import Sidebar from '../../components/Applicant Panel/Sidebar'
import Footer from '../../components/Applicant Panel/Footer'
import Header from '../../components/Applicant Panel/Header'
import CaseTracking from '../../components/Applicant Panel/CaseTracking'
function Casetrackbyapplicant() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <CaseTracking />
    <Footer />
    </div>
    </>
  )
}

export default Casetrackbyapplicant