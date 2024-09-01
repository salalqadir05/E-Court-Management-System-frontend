import React from 'react'
import Sidebar from '../../components/Management Panel/Index'
import Header from '../../components/Management Panel/Header'
import Updatereview from '../../components/Management Panel/Updatereviews'
import Footer from '../../components/Management Panel/Footer'
 
 function Reviews() {
   return (
     <>
    <div className="wrapper">
    <Sidebar />
    <Header />
    <Updatereview />
    <Footer />
    </div>
     </>
   )
 }
 
 export default Reviews