import React from 'react'
import Secondlogo from '../../assets/secondlogo.png'
import { Link } from 'react-router-dom'

function index() {
  return (
    <>
    
<aside className="main-sidebar sidebar-primary elevation-4 position-fixed">
  {/* Brand Logo */}
  <Link href="/managementpanel" className="brand-link">
  <div className="d-flex flex-column align-items-center justify-content-center">
  <img src={Secondlogo} alt="Logo" className="brand-image img-circle elevation-3 mt-2"   style={{ width: '45px', height: '80px' }} />
  <span className="brand-text font-weight-heavy fw-bold text-black mt-3">Management  Panel</span>
</div>
  </Link>
  <div className="sidebar">
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <Link to="/managementpanel" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashborad
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/managementcaselist" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Update a Cases 
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/managementcaseschedule" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
              Update Case Schedule 
            </p>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/assignacourt" className="nav-link">
            <i className="nav-icon far fa-building" />
            <p>
              Assign a Court
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/assignajudge" className="nav-link">
            <i className="nav-icon  fas fa-gavel" />
            <p>
              Assign a Judge
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/updatecomments" className="nav-link">
            <i className="nav-icon  fas fa-comments" />
            <p>
              Hearning Dates Reviews
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/employeelist" className="nav-link">
            <i className="nav-icon far fa-user" />
            <p>
              Employee List
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/lawyerlist" className="nav-link">
            <i className="nav-icon fas fa-user" />
            <p>
              Lawyers List
            </p>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/uploaddocs" className="nav-link">
            <i className="nav-icon fas fa-file" />
            <p>Upload Documents</p>
          </Link>
          </li> */}
        <li className="nav-item">
          <Link to="/documents" className="nav-link">
            <i className="nav-icon far fa-file" />
            <p>Personal Documents</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/setting" className="nav-link">
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

export default index