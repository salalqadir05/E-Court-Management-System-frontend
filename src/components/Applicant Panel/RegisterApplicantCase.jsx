import React,{useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { registerCasebyApplicantRoute } from '../../utlis/APIRoutes';
import { useNavigate } from 'react-router-dom';
import AlertSuccess from '../Alerts/AlertSuccess';
// import AlertFailed from '../Alerts/AlertFailed';
import SuccessLogin from '../../pages/Alerts/SuccessLogin';
import Showcasenumber from '../Lawyer Panel/Showcasenumber'
function RegisterApplicantCase() {
 const [alert, setalert] = useState(false)
const [Instruction, setInstruction] = useState(
    {
        status : false ,
        stype : "d-none"
    }
)
  const toastOptions = {
    position: "bottom-left",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [checkpriority, setcheckpriority] = useState()
const [ caseDetails, setcaseDetails] = useState({
  Case_Details : "",
  Case_Type : ""
  ,Lawyer_Lisence_Number: "",
  Lawyer_Name: "",
  Case_Files : ""

})
const handleChange = (e) => {
  setcaseDetails({ ...caseDetails, [e.target.name]: e.target.value === '' ? null : e.target.value });

}
const validations = () =>{
  let isvalid = true
  if(caseDetails.Case_Details  === "")
  {
    toast.error("Case Details is required", toastOptions);
    isvalid = false;
  }
  if(caseDetails.Case_Type === "")
  {
    toast.error("Case  is required", toastOptions);
    isvalid = false
  }
  return isvalid;
  // if(CaseDetails.Lawyer_Lisence_Number.length() > 6)
  // {
  //   toast.error("Lawyer License Number length is 6", toastOptions);

  // }
}
const handleSubmit = async (event) => {
  event.preventDefault();

  if (validations()) {
    const { Case_Details, Case_Type, Case_Files, Lawyer_Lisence_Number, Lawyer_Name } = caseDetails;
    const headers = {
      'auth-token': localStorage.getItem('token')
    };
    // console.log(headers)
    try {
      const response = await axios.post(registerCasebyApplicantRoute, {
        Case_Details,
        Case_Type,
        Case_Files,
        Lawyer_Lisence_Number,
        Lawyer_Name,
        checkpriority
      },
      { headers });

      if (response.data.status === false) {
        toast.error(response.data.error, toastOptions);
      } else {
        localStorage.setItem("E-Court-Management-System", JSON.stringify(response.data.case1));
        setalert(true);
      }
    } catch (error) {
      console.error('Error submitting case:', error);
      toast.error('Error submitting case', toastOptions);
    }
  }
};

const [show, setshow] = useState(
    {
        divtype : "d-none",
        status : false
    }
    );

const selectLawyer = ()=>{
    if(show.status ===  true )
    {    setshow({
        divtype : "d-none",
        status : false
    })

    }   
    if(show.status ===  false )
    {    setshow({
        divtype : "",
        status : true
    })
}
}
const handlepriority= () =>{
    if(Instruction.status ===  true )
    {    setInstruction({
        stype : "d-none",
        status : false
    })

    }   
    if(Instruction.status ===  false )
    {    setInstruction({
        stype : "",
        status : true
    })
    setcheckpriority("on")
    }

}
  return (
    <>
    <SuccessLogin />
{alert && 
<AlertSuccess msg="Case Submitted Successfully" />}
<div >
<div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Register A Case</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Register a Case</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  <section className="content">

    <div className="container-fluid">
      <div className="row justify-content-center">
{alert && <Showcasenumber status="hello" />}
    
        {/* left column */}
        {alert === false && <div className='col-md-6'>

          {/* general form elements */}
          <div className="card card-primary w-100">
            <div className="card-header">
              <h3 className="card-title ">Register A Case</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form className="card-body"  onSubmit={(event) => handleSubmit(event)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Write a Details of Case </label>
                <textarea row={6} className="form-control" placeholder="Enter the Whole Scenario" name='Case_Details' onChange={(e) => handleChange(e)} />
              </div>
              <div className="form-group dropdown">
                        <label>Select Case Type</label>
                         <select className="form-control" name='Case_Type' onChange={(e) => handleChange(e)}>
                          <option>Civil Case</option>
                          <option>Criminal Case</option>
                          <option>Family Law Case</option>
                          <option>Constitutional Case</option>
                          <option>Commercial and Business Case</option>
                          <option>Labor and Employment Case</option>
                          <option>Administrative Law Case</option>
                          <option>Human Rights Case</option>
                        <option>Environmental Case</option>
                        <option>Islamic Law (Sharia) Case</option>
                        <option>Property Case</option>


                        </select>
             </div>
              <div className="custom-control custom-switch mt-1">
                <input type="checkbox" className="custom-control-input" id="customSwitch" role="slide"  onClick={selectLawyer} />
                <label className="custom-control-label" htmlFor="customSwitch">If you are hired a lawyer already ! Enter Lawyer Details </label>
              </div>
              <div className={`${show.divtype}`} >
              <div className="form-group mt-1">
                <label htmlFor="exampleInputEmail1">Enter Lawyer Lisence </label>
                <input type="text" name="Lawyer_Lisence_Number" className="form-control" placeholder='Enter Lawyer License Numbeer' onChange={(e) => handleChange(e)} id="exampleInputEmail1" />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="exampleInputEmail1">Enter Lawyer Name </label>
                <input type="text" name="Lawyer_Name" placeholder= 'Enter the Lawyer Name' className="form-control" onChange={(e) => handleChange(e)} id="exampleInputEmail1" />
              </div>
              </div>
              <div className="form-group mt-3">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"name='Case_Files' onChange={(e) => handleChange(e)}  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                </div>
              </div>
              {/* <div className="custom-control custom-switch mt-1">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" role="slide"   /> */}
                {/* <label className="custom-control-label" htmlFor="customSwitch1" onClick={handlepriority}>Apply a priority </label> */}
              {/* </div> */}
              {/* <div className={`ml-3 mt-4  ${Instruction.stype}`}>
                <p><b>If Case is under act of CPC-302 than priority will apply</b></p>
                  <p><b>If Case is under act of CPC-376/CPC-373 than priority will apply</b></p>
                </div> */}
              <button className="btn btn-primary mt-4">Submit </button>
            </form> 
          </div>
        </div>}
      </div>
    </div>
  </section>
</div>
</div>
< ToastContainer />

    </>
  )
}

export default RegisterApplicantCase