import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lawyercasestatusRoute } from '../../utlis/APIRoutes';
import axios from "axios";

function Casetracking() {
  const [value, setvalue] = useState(  {
    CaseNumber : ""
  })
  const [CaseStatus, setCaseStatus] = useState( {
    Status :"",
    Comments : ""
  } )
  const [check, setcheck] = useState(false)
  const toastOptions = {
    position: "bottom-left",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
}
const handlevalidation = ()=>{
if( value.CaseNumber === "")
{
  toast.error("Case Number is required.", toastOptions);
}


} 
const handleSubmit= async(event)=>{
  event.preventDefault();
  if(handlevalidation())
  {
    // console.log("hello from calling",value)
  }

  const {CaseNumber} = value
  if(handlevalidation)
  {
    const response = await axios.post(lawyercasestatusRoute,{
        CaseNumber
    })
    setCaseStatus({
      Status :response.data.StatusofCase,
      Comments :response.data.comments})
    // console.log(CaseStatus) 
  }
  setcheck(true)
}
  return (
    <>
{!check &&
<div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Case Tracking</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/lawyerpanel">Home</Link></li>
            <li className="breadcrumb-item active">Case Tracking</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  <section className="content ml-5 mr-5">
    <div className="container-fluid">
      <div className="row ml-5 mr-5">
        <div className="col">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Case Tracking</h3>
            </div>
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Case Tracking</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" name='CaseNumber' placeholder="Enter Case Number" onChange={(e)=>{handleChange(e)}} />
                </div>

              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>


          {/* /.card */}
        </div>

      </div>
    </div>
  </section>
</div>}
{check &&<div className="content-wrapper">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Case Tracking</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/lawyerpanel">Home</Link></li>
            <li className="breadcrumb-item active">Case Tracking</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  <section className="content ml-5 mr-5">
    <div className="container-fluid">
      <div className="row ml-5 mr-5">
        <div className="col">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Case Tracking</h3>
            </div>
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className='ml-2'>Case Status</label>
                  <div className="container">
                    <h4>{CaseStatus.Status}</h4>
                      <p><b>Comments : </b>{CaseStatus.Comments}</p>

                  </div>
                </div>

              </div>

            </form>
          </div>


        </div>

      </div>
    </div>
  </section>
</div>}
<ToastContainer />

    </>
  )
}

export default Casetracking