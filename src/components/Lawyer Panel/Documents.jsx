import React, { useEffect, useState,useRef  } from 'react';
import { Link } from 'react-router-dom';
import { uploadFile, downloadFile,fetchFile,deleteFile,updateFile } from '../../utlis/APIRoutes';
import axios from 'axios';
import AlertFailed from '../Alerts/Failalert'
function Documents() {
  const [documents, setDocuments] = useState([]);
  const [File, setFile] = useState();
  const [fail, setfail] = useState(false);
 
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const headers = {
          'auth-token': localStorage.getItem('token')
        }
        const response = await axios.get(fetchFile,{headers});
        setDocuments(response.data);  
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
  
    fetchDocuments();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const fetchDocuments = async () => {
    try {
      const headers = {
        'auth-token': localStorage.getItem('token')
      }
      const response = await axios.get(fetchFile,{headers});
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };
const handleFiledelete = async(fileid)=>{
  // console.log(fileid)
  const apicall = `${deleteFile}/${fileid}`
  // console.log(apicall)

  const headers = {
    'auth-token': localStorage.getItem('token')
  }
  // console.log(headers)
  const response = await axios.delete(`${deleteFile}/${fileid}`,{
    headers : headers
  })
  setfail(true)
  console.log("file deleted",response.data)
}
  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', File);

    try {
      await axios.post(uploadFile, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token' : localStorage.getItem('token')
        },
      });
      alert('File uploaded successfully!');
      fetchDocuments();
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  const handleFileDownload = async (filename) => {
    try {
      const response = await axios.get(`${downloadFile}/${filename}`, {
        responseType: 'blob',
      });
    
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Error downloading file. Please try again.');
    }
  };
  const handleFileUpdate = async (event, fileId) => {
    try {
      const updatedFile = event.target.files[0];

      if (!updatedFile) {
        return; // If the user cancels, do nothing
      }

      const formData = new FormData();
      formData.append('file', updatedFile);

      const headers = {
        'auth-token': localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      };

      const response = await axios.put(`${updateFile}/${fileId}`, formData, {
        headers,
      });

      alert('File updated successfully!');
      fetchDocuments();
    } catch (error) {
      console.error('Error updating file:', error);
      alert('Error updating file. Please try again.');
    }
  };

  
  
  return (
    <>
    {/* {alert && <AlertFailed item="File" msg="is Deleted" />} */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Documents</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/managementpanel">Home</Link></li>
                  <li className="breadcrumb-item active">Documents</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Documents</h3>
              <div className="float-right">
                <input type="file" className=' mt-2 btn btn-primary' onChange={handleFileChange} />
                <button className="btn btn-primary p-2 mt-2 ml-1" onClick={handleFileUpload}>
                  Upload
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: '5%' }}>Qty</th>
                    <th style={{ width: '80%' }}>Document Name</th>
                    <th style={{ width: '8%' }} className="text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {documents &&
                    documents.map((document, index) => (
                      <tr key={index + 1}>
                        <td><b>{index + 1}</b></td>
                        <td>
                          <p className='mt-1'>
                            <b>
                            {document.filename}

                            </b>
                          </p>
                        </td>
                        <td className="project-actions text-right">
                          {/* <button className="btn btn-primary btn-sm" onClick={() => handleFileDownload(document.filename)}>
                            <i className="fas fa-download"></i> Download
                          </button> */}
                                  <div>
                                    <div className="container d-flex">
                                  <button type="button" className="btn btn-outline-primary btn Circle" onClick={() => handleFileDownload(document.filename)} >
                                  <i className=" fas
                                   fa-download" />
                                  </button>
                                  <button type="button" className="btn btn-outline-danger btn Circle ml-2" onClick={() => handleFiledelete(document._id)} >
                                  <i className=" fas fa-trash" />
                                  </button>
   
                                  </div>
                    </div>


                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Documents;
