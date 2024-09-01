import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {updatedetailscasemanagerRoute,fetchadmin} from "../../utlis/APIRoutes"
import axios from 'axios'
function Setting() {
  const storedDataString = localStorage.getItem("E-Court-Management-System");
  const storedData = JSON.parse(storedDataString);
const [personal, setpersonal] = useState({
  uName :storedData.name,
  uTitle : storedData.Title,
  uEmail : storedData.Email,
  uDesignation : storedData.Designation,
  uPassword : storedData.Password

})
const handlechange= (e)=>{
  setpersonal({ ...personal, [e.target.name]: e.target.value });

}
const handleSubmit  = async(event)=>{
  event.preventDefault();

console.log(storedData.id)
  const response = await axios.put(`${updatedetailscasemanagerRoute}${storedData._id}`,{
    name  : personal.uName,
    Title : personal.uTitle,
    Email : personal.uEmail,
    Designation : personal.uDesignation
  }) 
  // console.log(response.data)
}
  return (
    <>
<div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Setting</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/managementpanel">Home</Link></li>
            <li className="breadcrumb-item active">Setting</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  <section className="content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        {/* left column */}
        <div className="col-md-6">
          {/* general form elements */}
          <div className="card card-primary w-100">
            <div className="card-header">
              <h3 className="card-title ">Edit Profile Details</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={(event)=>{handleSubmit(event)}}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="text" name="uName" className="form-control"    id="exampleInputName1" value={personal.uName} onChange={(e)=>handlechange(e)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input type="text" name="uTitle" className="form-control"    id="exampleInputTitle1" value={personal.uTitle}  onChange={(e)=>handlechange(e)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" name='uEmail' className="form-control" id="exampleInputEmail1" value={personal.uEmail}  onChange={(e)=>handlechange(e)}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputDesignation1">Designation </label>
                  <input type="text" name="uDesignation" className="form-control"    id="exampleInputDesignation1" value={personal.uDesignation} onChange={(e)=>handlechange(e)} />
                </div>
 
                <button className="btn btn-primary mb-4" >Update </button>
              </div>
            </form></div>
        </div>
      </div>
    </div></section>
</div>

    </>
  )
  }

export default Setting