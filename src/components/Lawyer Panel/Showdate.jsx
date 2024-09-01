import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchlawyercasesRoute } from '../../utlis/APIRoutes';


function Showdate() {
  const [value, setvalue] = useState()
  useEffect(() => {
    const fetchdata = async ()=>{
  try {
    const headers = {
      'auth-token': localStorage.getItem('token')
    }
    // console.log(headers)
     const response = await axios.get(fetchlawyercasesRoute,{headers});
     setvalue(response.data.cases)
    //  console.log(response)
  
  }
  catch (error) {
  console.log(error)  
  }
    }
    console.log(value)
  
        fetchdata()
  }, [])

  return (
    <>

<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Hearning Date</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/managementpanel">Home</Link></li>
            <li className="breadcrumb-item active">Hearning Dates</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
  {/* Default box */}
  <div className="card card-solid">
    <div className="card-body">
      <div className="row">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Case Number</th>
      <th scope="col">Court Details</th>
      <th scope="col">Date and Time</th>
    </tr>
  </thead>
  <tbody>
    {value && value.map((val)=>(
    <tr>
      <td>{val.CaseNumber}</td>
      <td>{val.Court_details === 'Court Details are not updated yet' ? <span class="badge text-bg-danger">{val.Court_details}</span> : <span class="badge text-bg-success">{val.Court_details}</span>
        }</td>
      <td>{val.Case_Hearing_Date === null ? <span class="badge text-bg-danger">{`Not Assigned yet`}</span> : <span class="badge text-bg-success">{
         new Date(val.Case_Hearing_Date).toLocaleString('en-US', { timeZone: 'Asia/Karachi' })
      }</span>}</td>
    </tr>
    ))
    }

  </tbody>
</table>
      </div>
    </div>
    {/* /.card-footer */}
  </div>
  {/* /.card */}
</section>

  {/* /.content */}
</div>

    </>
  )
}


export default Showdate