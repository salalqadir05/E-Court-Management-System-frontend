import React from 'react'
import Sidebar from '../../components/Applicant Panel/Sidebar'
import Footer from '../../components/Applicant Panel/Footer'
import Setting from '../../components/Applicant Panel/Setting'
import { Link, useNavigate } from 'react-router-dom'
function Updatedetails() {
  const navigate = useNavigate();
  const handleonClick = () =>{
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
    <div className="wrapper">
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" data-widget="pushmenu" to="/managementpanel" role="button"><i className="fas fa-bars" /></Link>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <Link href="/applicantpanel" className="nav-link">Home</Link>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <button className="btn btn-primary" onClick={handleonClick}>Log Out</button>
  </ul>
</nav>
    <Sidebar />
    <Setting />
    <Footer />
    </div>
    </>
  )
}

export default Updatedetails