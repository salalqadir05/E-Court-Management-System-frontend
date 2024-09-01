import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { countLawyerRoute,SendMailRoute } from '../../utlis/APIRoutes';

function Lawyerlisttohire() {
    const [Lawyerlist, setLawyerlist] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [mail,setmail] =useState({
      to : "",
      subject : "",
      message : "",
    })
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      // Check if a file is selected

      if (file) {
        setSelectedFile(file);
        console.log('File Name:', file.name);
        console.log('File Location:', URL.createObjectURL(file));
      } else {
        // Handle the case where the user cancels file selection
        setSelectedFile(null);
      }
    };
    console.log(

      selectedFile

    )
 
    // console.log(mail)
    const  handleSubmit = async() =>{
      const response = await axios.post(SendMailRoute,{
        email : mail.to,
        subject : mail.subject,
        message : mail.message,
        filename : selectedFile.name,
    
        path :  URL.createObjectURL(selectedFile)
      })
      console.log("message delivered",response)
    // window.location.reload();

    }
    const handleChange = (e) => {
      setmail({ ...mail, [e.target.name]: e.target.value === '' ? null : e.target.value });

    }
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
          <div key={lawyer._id} className="col-12 col-sm-6 col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-header text-muted mx-auto border-bottom-0">
                High Court Lawyers
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-7">
                    <h3 className="lead w-100"  style={{ whiteSpace: 'nowrap' }}><b>{lawyer.name}</b></h3>
                    <p className="text-muted text-sm w-100" style={{ whiteSpace: 'nowrap' }}><b>Email:</b> {lawyer.Email}</p>
                    {/* <p className="text-muted text-sm"><b>CNIC:</b> {lawyer.Cnic}</p> */}
                    <p className="text-muted text-sm w-100" style={{ whiteSpace: 'nowrap' }}><b>Lawyer License:</b> {lawyer.Lawyer_License_No}</p>
                  </div>
                </div>
              </div>
              <div className="container d-flex justify-content-end mb-4">
        
        
        
        
        {/*      <button className=" btn btn-primary mr-1"> Hire<span style={{ fontSize: '1.2em', marginLeft: '5px' ,fontWeight : '10px' }}>&#x2192;</span></button>
           */}     {/* <button className="btn btn-success ml-1">Hire<span style={{ fontSize: '1.2em', marginLeft: '5px' ,fontWeight : '10px' }}>&#x2192;</span></button> */}
                  <div>
                  <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Send Mail<span style={{ fontSize: '1.2em', marginLeft: '5px' ,fontWeight : '10px' }}>&#x2192;</span></button>
                  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form >
                            <div className="form-group">
                              <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                              <input type="text" className="form-control" name='to' id="recipient-name" onChange={(e)=>{handleChange(e)}}  value={lawyer.Email} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="message-text" className="col-form-label">Subject:</label>
                              <input className="form-control" id="message-text" name='subject'  onChange={(e)=>{handleChange(e)}} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="message-text" className="col-form-label">Attachments:</label>
                              <input type='file' className="form-control" id="message-file" name='subject'  onChange={(e)=>{handleFileChange (e)}} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="message-text" className="col-form-label">Message:</label>
                              <textarea className="form-control" id="message-text" name='message'  onChange={(e)=>{handleChange(e)}} />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" onClick={()=>{handleSubmit()}}>Send Mail</button>
                        </div>
                      </div>
                    </div>
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

export default Lawyerlisttohire