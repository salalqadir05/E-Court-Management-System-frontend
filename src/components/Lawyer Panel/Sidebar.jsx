import React from 'react'
import Secondlogo from "../../assets/secondlogo.png"
import { Link } from 'react-router-dom'
function sidebar() {
  return (
    <>
      <aside className="main-sidebar sidebar-primary elevation-4 position-fixed">
  <Link to="/lawyerpanel" className="brand-link">
  <div className="d-flex flex-column align-items-center justify-content-center">
  <img src={Secondlogo} alt="Logo" className="brand-image img-circle elevation-3 mt-2"  style={{ width: '45px', height: '80px' }} />
  <span className="brand-text font-weight-heavy fw-bold mt-3 text-black">Lawyer  Panel</span>
</div>
  </Link>
  <div className="sidebar">
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <Link to="/lawyerpanel" className="nav-link">
            <i className="nav-icon fas fa-file" />
            <p>Register a Case</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lawyercasenumber" className="nav-link">
            <i className="nav-icon fas fa-clipboard" />
            <p>Case Numbers</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lawyercasetrack" className="nav-link">
            <i className="nav-icon fas fa-search" />
            <p>Case Tracking</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/articles" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>Case Study</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/writearticles" className="nav-link">
            <i className="nav-icon fas fa-pencil-alt" />
            <p>Write Case Study</p>
          </Link>
        </li>
      

        <li className="nav-item">
          <Link to="/scheduledates" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
              Show Cases Schedule 
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lawyerlistinlawyer" className="nav-link">
            <i className="nav-icon fas fa-user" />
            <p>
              Lawyers List
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lawyerdocuments" className="nav-link">
            <i className="nav-icon fas fa-briefcase" />
            <p>Documents</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lawyersettings" className="nav-link">
            <i className="nav-icon fas fa-cog" />
            <p>Setting</p>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
      </aside>

    
    </>
  )
}

export default sidebar