import axios from 'axios';
import React, { useState } from 'react'
import { AddComplainRoute } from '../../utlis/APIRoutes';

function Complain() {
    const [complain, setcomplain] = useState(
     {  description : "",
    }
    )
const handleChange = (e)=>{
    setcomplain({ ...complain, [e.target.name]: e.target.value });

}
const handleSubmit = async(event) =>{
    event.preventDefault();
    const headers = {
      'auth-token': localStorage.getItem('token')
    };
    const {description} = complain
    const response = await axios.post(AddComplainRoute,{
        description
    },{headers})
    console.log(response.data)
}
    return (
    <>
    <div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Register A Complain</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Complain</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content ">
    <div className="card card-primary ml-5 mr-5">
      <div className="card-header">
        <h3 className="card-title">Complain</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <form onSubmit={(event)=>{handleSubmit(event)}}>
              <div className="form-group">
                <label>Complain For Any Issue</label>
                <textarea className="form-control" name='description' rows={4} placeholder="Write Complain Here" defaultValue={""}  onChange={(e)=>{handleChange(e)}}/>
              </div>
          
          <div className="">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>
    
    
    </>
  )
}

export default Complain