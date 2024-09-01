import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { uploadFilecasemanager, fetchFilecasemanager, downloadFilecasemanager, deleteFilecasemanager, updateFilecasemanager } from '../../utlis/APIRoutes';
import axios from 'axios';
import AlertFailed from '../Alerts/AlertFailed';

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [File, setFile] = useState();
  const [fail, setfail] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchCaseManagerDocuments = async () => {
      try {
        const headers = {
          'auth-token': localStorage.getItem('token')
        }
        const response = await axios.get(fetchFilecasemanager, { headers });
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchCaseManagerDocuments();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const fetchCaseManagerDocuments = async () => {
    try {
      const headers = {
        'auth-token': localStorage.getItem('token')
      }
      const response = await axios.get(fetchFilecasemanager, { headers });
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const handleFileDelete = async (fileId) => {
    const headers = {
      'auth-token': localStorage.getItem('token')
    }
    await axios.delete(`${deleteFilecasemanager}/${fileId}`, {
      headers: headers
    });
    fetchCaseManagerDocuments();
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', File);

    try {
      await axios.post(uploadFilecasemanager, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'auth-token': localStorage.getItem('token')
        },
      });
      alert('File uploaded successfully!');
      fetchCaseManagerDocuments();
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  const handleFileDownload = async (filename) => {
    try {
      const response = await axios.get(`${downloadFilecasemanager}/${filename}`, {
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

      await axios.put(`${updateFilecasemanager}/${fileId}`, formData, {
        headers,
      });

      alert('File updated successfully!');
      fetchCaseManagerDocuments();
    } catch (error) {
      console.error('Error updating file:', error);
      alert('Error updating file. Please try again.');
    }
  };

  return (
    <>
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
                <input type="file" className='btn btn-primary mt-2 p-1' onChange={handleFileChange} />
                <button className="btn btn-primary pt-2 mt-2  ml-1" onClick={handleFileUpload}>
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
                          <div>
                            <div className="container d-flex">
                              <button type="button" className="btn btn-outline-primary btn Circle" onClick={() => handleFileDownload(document.filename)}>
                                <i className="fas fa-download" />
                              </button>
                              <button type="button" className="btn btn-outline-danger btn Circle ml-2" onClick={() => handleFileDelete(document._id)} >
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
