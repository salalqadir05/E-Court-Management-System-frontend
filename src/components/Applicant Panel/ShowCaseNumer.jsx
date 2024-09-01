import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { fetchApplicantcasesRoute } from '../../utlis/APIRoutes';
function ShowCaseNumer() {
    const [value, setvalue] = useState()
    useEffect(() => {
      const fetchdata = async ()=>{
    try {
      const headers = {
        'auth-token': localStorage.getItem('token')
      }
      // console.log(headers)
       const response = await axios.get(fetchApplicantcasesRoute,{headers});
       setvalue(response.data.cases)
      //  console.log(response)
    
    }
    catch (error) {
    console.log(error)  
    }
      }
    
          fetchdata()
    }, [value])
    const handleCopyClick = (caseNumber) => {
    
      navigator.clipboard.writeText(caseNumber)
        .then(() => {
          console.log('Case number copied to clipboard:', caseNumber);
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
    
        });
    };
    return (
    <>
    <div className="content-wrapper">
<section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Case Tracking Number</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Case Tracking Number</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
    <div className="container-fluid">
      <div className=" ml-5 mr-5 mt-5">
        {/* left column */}
        <div className="">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Case Tracking</h3>
            </div>
            <form>
              <div className="card-body">
              <div className="table-responsive">

              <table className="table">

  <thead>
  
    <tr>
      <th scope="col">Serial No</th>
      <th scope="col">Case Type</th>
      <th scope="col">Case Number</th>
      <th scope="col">Copy Case Number </th>

    </tr>
  </thead>
  <tbody>
  {value && Array.isArray(value) && value.map((val, index) => (
          <tr key={val?.id || index}>
            <th scope="row">{index + 1}</th>
            <td>{val?.Case_Type}</td>
            <td>{val?.CaseNumber}</td>
            <td className='d-flex justify-content-center align-items-center' style={{height : '50px'}}>
              <i
                className="nav-icon fas fa-clipboard"
                onClick={() => handleCopyClick(val?.CaseNumber)}
                style={{ cursor: 'pointer' }}
              ></i>
            </td>
          </tr>
        ))}

  </tbody>
            </table>

              </div>
              </div>
              <div className="card-footer">
                <Link to='/applicantcasetrack' type="button" className="btn btn-primary"> Case Tracking &rarr;</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>

    
    </>
  )
}

export default ShowCaseNumer