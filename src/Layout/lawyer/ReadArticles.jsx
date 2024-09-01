import React from 'react'
import Header from '../../components/Lawyer Panel/Header'
import Sidebar from '../../components/Lawyer Panel/Sidebar'
import Articles from '../../components/Lawyer Panel/Articles'
import Footer from '../../components/Lawyer Panel/Footer'
function ReadArticles() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Articles />
    <Footer />
    </div>
    </>
  )
}

export default ReadArticles