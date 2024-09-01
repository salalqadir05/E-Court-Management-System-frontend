import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { countandfetchCaseRoute } from '../../utlis/APIRoutes';
import axios from 'axios';
import AlertSuccess from '../Alerts/AlertSuccess';
import AlertFailed from '../Alerts/AlertFailed';

function Uploaddocs() {
  const [CasesList, setCasesList] = useState([])
  const [alertSuccess, setalert] = useState(false)
  const [alertFailed, setalertFailed] = useState(false)
  const [File, setFile] = useState();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };  
  const handleFileUpload = async () => {
  const formData = new FormData();
  formData.append('file', File);

  // try {
  //   await axios.post(uploadFilecasemanager, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       'auth-token': localStorage.getItem('token')
  //     },
  //   });
  //   alert('File uploaded successfully!');
  //   fetchCaseManagerDocuments();
  // } catch (error) {
  //   console.error('Error uploading file:', error);
  //   alert('Error uploading file. Please try again.');
  // }
};


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
    {alertSuccess &&  <AlertSuccess msg="Comment of case is Add" /> }

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
                          {caseItem.Case_Status !== 'Rejected' && (
                            <div className="d-flex flex-direction-row">
          
                          <div className='ml-1'>
                          <div className="float-right">
                <input type="file" className='btn btn-primary p-1' onChange={handleFileChange}  />
                <button className="btn btn-primary pt-2 mt-2 " onClick={handleFileUpload}>
                  Upload
                </button>
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

export default Uploaddocs