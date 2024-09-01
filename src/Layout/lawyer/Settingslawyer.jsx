import React from 'react'
import Sidebar from "../../components/Lawyer Panel/Sidebar"
import Footer from '../../components/Lawyer Panel/Footer'
import Setting from '../../components/Lawyer Panel/Setting'
import { Link, useNavigate } from 'react-router-dom'

function Settingslawyer() {
  const navigate = useNavigate();
  const handleonClick = () =>{
    localStorage.clear();
    navigate("/",{replace : true});
    // window.location.replace("/lawyerlogin");
  }
  
  return (
<>
<div className="wrapper">

<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" data-widget="pushmenu" to="/Lawyerpanel" role="button"><i className="fas fa-bars" /></Link>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <Link href="/Lawyerpanel" className="nav-link">Home</Link>
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

export default Settingslawyer