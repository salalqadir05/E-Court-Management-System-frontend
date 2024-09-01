import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { countandfetchCaseRoute,AddcaseStatus } from '../../utlis/APIRoutes';
import axios from 'axios';
import AlertSuccess from '../Alerts/AlertSuccess';
import AlertFailed from '../Alerts/AlertFailed';



function CaseList() {
const [CasesList, setCasesList] = useState([])
const [alertSuccess, setalert] = useState(false)
const [alertFailed, setalertFailed] = useState(false)

useEffect(() => {
  const fetchdata = async () => {
    try {
      const response = await axios.post(countandfetchCaseRoute);
      setCasesList(response.data.CasesList);
        } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchdata();
}, []);
const   handleAccept = async(caseid)=>{
  const Approve = "Approved"
  try {
    await axios.put(AddcaseStatus, {
      caseId: caseid,
      CaseStatus: Approve
    });
    setalert(true)
    console.log("PUT request successful");
    
  } catch (error) {
    console.error("Error in PUT request:", error);
  }
  }



const   handleReject = async(caseid)=>{
const Rejection = "Rejected";
try {
  await axios.put(AddcaseStatus, {
    caseId: caseid,
    CaseStatus: Rejection
  });
  setalertFailed(true)
  console.log("PUT request successful");
} catch (error) {
  console.error("Error in PUT request:", error);
}
}


  return (
    <>

<div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Cases List</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <Link to="/managementpanel">Home</Link>
            </li>
            <li className="breadcrumb-item active">Cases List</li>
          </ol>
        </div>
      </div>
    </div>
    </section>
{alertSuccess &&  <AlertSuccess msg="Case is Approved Succesfully" /> }

{alertFailed && <AlertFailed />}
<section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="invoice p-3 mb-3">
            <div className="row">
             
              <div  className="col-12 table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Qty</th>
                      <th>Case Name</th>
                      <th>Case Number</th>
                      <th>Lawyer Name</th>
                      <th>Case Status</th>
                      <th>Case Updation</th>

                    </tr>
                  </thead>
                  <tbody>
                  {CasesList.map( (caseItem,index)=>(
                  
                  <tr key={index} >
                      <td>{index + 1}</td>
                      <td>{caseItem.Case_Type}</td>
                      <td>{caseItem.CaseNumber}</td>
                      <td>{caseItem.Lawyer_Name}</td>
                      <td> {caseItem.Case_Status === "Status Pending" || caseItem.Case_Status=== 'Rejected' ? (
                                  <span className="badge text-bg-danger">{caseItem.Case_Status}</span>
                                ) : (
                                  <span className="badge text-bg-success">{caseItem.Case_Status}</span>
                                )}</td>

                      <td>
                      {caseItem.Case_Status !== 'Approved' && caseItem.Case_Status !== 'Rejected' && (
                         <div className="d-flex flex-direction-row">
      
                      <div className='ml-1 mt-1'>
  <button
    type="button"
    className="btn btn-success"
    data-bs-toggle={`modal`}
    data-bs-target={`#approveModal-${caseItem._id}`}
  >
    Approve
  </button>

  <div className="modal fade" id={`approveModal-${caseItem._id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Case Details </h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="card" style={{ width: '28rem' }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Case Type: {caseItem.Case_Type}</li>
              <li className="list-group-item">Case Number: {caseItem.CaseNumber}</li>
              <li className="list-group-item">Case Details: {caseItem.Case_Details}</li>
              <li className="list-group-item">Case Lawyer Name: {caseItem.Lawyer_Name}</li>
              <li className="list-group-item">Case Lawyer License Number: {caseItem.Lawyer_License_Number}</li>
            </ul>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>{handleAccept(caseItem._id)}}>Approve</button>
        </div>
      </div>
    </div>
  </div>
                      </div>
                      <div className='ml-1 mt-1'>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle={`modal`}
                        data-bs-target={`#rejectModal-${caseItem._id}`}
                      >
                        Reject
                      </button>

                      <div className="modal fade" id={`rejectModal-${caseItem._id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Case Details </h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div className="card" style={{ width: '28rem' }}>
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item">Case Type: {caseItem.Case_Type}</li>
                                  <li className="list-group-item">Case Number: {caseItem.CaseNumber}</li>
                                  <li className="list-group-item">Case Details: {caseItem.Case_Details}</li>
                                  <li className="list-group-item">Case Lawyer Name: {caseItem.Lawyer_Name}</li>
                                  <li className="list-group-item">Case Lawyer License Number: {caseItem.Lawyer_License_Number}</li>
                                </ul>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{handleReject(caseItem._id)}}>Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>

                        
                        </div>
                      )}
                      </td>
                    </tr>
              ))}
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default CaseList