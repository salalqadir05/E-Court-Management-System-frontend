import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {updateLawyerRoute} from "../../utlis/APIRoutes"
import axios from 'axios'
function Setting() {
  const storedDataString = localStorage.getItem("E-Court-Management-System");
  // const checklawyerdata =  localStorage.getItem("E-Court-Management-System");
  const storedData = JSON.parse(storedDataString);
  console.log(storedData)
const [personal, setpersonal] = useState({
  uName :storedData.name,
  uCnic : storedData.Cnic,
  uEmail : storedData.Email,
  ulawyerlicense : storedData.Lawyer_License_No,

})
const handlechange= (e)=>{
  setpersonal({ ...personal, [e.target.name]: e.target.value });

} 
const handleSubmit= async(event)=>{
  event.preventDefault();
  const response = await axios.put(`${updateLawyerRoute}${storedData._id}`,{
    name  : personal.uName,
    Cnic : personal.uCnic,
    Email : personal.uEmail,
    Lawyer_License_No : personal.ulawyerlicense
  }) 
  console.log("update data :",response.data)
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
            <li className="breadcrumb-item"><Link to="/lawyerpanel">Home</Link></li>
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
                  <label htmlFor="exampleInputName1">Name</label>
                  <input type="text" name="uName" className="form-control"    id="exampleInputname1" value={personal.uName}  onChange={(e)=>{handlechange(e)}}  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputCnic1">Cnic</label>
                  <input type="text" name="uCnic" className="form-control"    id="exampleInputCnic1" value={personal.uCnic} onChange={(e)=>{handlechange(e)}}   />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" value={personal.uEmail}  onChange={(e)=>{handlechange(e)}}    />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputLawyerLicense1">Lawyer License No </label>
                  <input type="text" name="ulawyerlicense" className="form-control"    id="exampleInputLawyerLicense1" value={personal.ulawyerlicense} onChange={(e)=>{handlechange(e)}}  />
                </div>
         
                <button className="btn btn-primary mb-4">Update </button>
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