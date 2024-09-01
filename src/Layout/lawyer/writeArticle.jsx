import React from 'react'
import Header from '../../components/Lawyer Panel/Header'
import Sidebar from '../../components/Lawyer Panel/Sidebar'
import Writearticle from '../../components/Lawyer Panel/Writearticle'
import Footer from '../../components/Lawyer Panel/Footer'

function writeArticle() {
  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <Writearticle />
    <Footer />
    </div>
    </>
  )
}

export default writeArticle