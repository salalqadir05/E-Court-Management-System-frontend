import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { countLawyerRoute } from '../../utlis/APIRoutes';

function Lawyerlist() {
const [Lawyerlist, setLawyerlist] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post(countLawyerRoute);
      setLawyerlist(response.data.Lawyerlist);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <>
    

<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Lawyers List</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/managementpanel">Home</Link></li>
            <li className="breadcrumb-item active">Lawyers List</li>
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
        {Lawyerlist.map((lawyer) => (
          <div key={lawyer.id} className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-header text-muted border-bottom-0">
                High Court Lawyers
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-7">
                    <h2 className="lead"><b>{lawyer.name}</b></h2>
                    <p className="text-muted text-sm w-100" style={{ whiteSpace: 'nowrap' }}><b>Email:</b> {lawyer.Email}</p>
                    {/* <p className="text-muted text-sm"><b>CNIC:</b> {lawyer.Cnic}</p> */}
                    <p className="text-muted text-sm w-100" style={{ whiteSpace: 'nowrap' }}><b>Lawyer License No:</b> {lawyer.Lawyer_License_No}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default Lawyerlist