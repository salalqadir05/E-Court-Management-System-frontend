import React from 'react'
import Secondlogo from "../../assets/secondlogo.png"
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <>
      <aside className="main-sidebar sidebar-primary elevation-4 position-fixed" >
  <Link to="/applicantpanel" className="brand-link">
  <div className="d-flex flex-column align-items-center justify-content-center">
  <img src={Secondlogo} alt="Logo"  className="brand-image img-circle elevation-3 mt-2"  style={{ width: '45px', height: '80px' }} />
  <span className="brand-text font-weight-heavy fw-bold text-black mt-3" >Applicant Panel</span>
</div>

  </Link>
  <div className="sidebar">
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item ">
          <Link to="/applicantpanel" className="nav-link">
            <i className="nav-icon fas fa-file   "  />
            <p className='  '>Register a Case</p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/fetchcasebyapplicant" className="nav-link">
            <i className="nav-icon fas fa-clipboard   " />
            <p className='  '>Case Number</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/applicantcasetrack" className="nav-link">
            <i className="nav-icon fas fa-search   " />
            <p className='  '>Case Tracking</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/applicantcaseschedule" className="nav-link">
            <i className="nav-icon far fa-calendar-alt   " />
            <p className='  '>
              Show Cases Schedule 
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lawyerlistinapplicant" className="nav-link">
            <i className="nav-icon fas fa-user   " />
            <p className='  '>
              Lawyers List
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/updateapplicant" className="nav-link">
            <i className="nav-icon fas fa-cog   " />
            <p className='  '>Setting</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/complain" className="nav-link">
            <i className="nav-icon fas fa-comments   " />
            <p className='  '>Complain</p>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
      </aside>

    
    </>
  )
}

export default Sidebar