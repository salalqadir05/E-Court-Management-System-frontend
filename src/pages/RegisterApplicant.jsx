import React, { useState } from 'react';
import sidebar from "../assets/sideimage.jpeg";
import secondlogo from '../assets/secondlogo.png'
import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utlis/APIRoutes';
function RegisterApplicant() {
  const navigate = useNavigate();
  const [Status, setStatus] = useState(false)
  const [credentials ,setCredentials] = useState({
    Firstname : "",
    Lastname : "",
    Email : "",
    Cnic : "",
    Password : "",
    ConfirmPassword : ""
  });
  const toastOptions = {
    position: "bottom-left",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
const handleSubmit= async(event) =>{
  event.preventDefault();
  if (handlevalidation())
  {
    const {Firstname,Lastname,Email,Cnic,Password} = credentials; 
    const {data} =  await axios.post(registerRoute,{
Firstname,
Lastname,
Email,
Cnic,
Password
    });
    console.log(data.applicant);
    if (data.status === false) {
      toast.error(data.msg, toastOptions);
    }
    if (data.status === true) {
      localStorage.setItem(
        "E-Court-Management-System",
        JSON.stringify(data.applicant)
      );
      setStatus(true)
      navigate("/applicantlogin");
    }
  

  
  }
} 

const handlevalidation = ()=>{
  const {Firstname,Lastname,Email,Cnic,Password,ConfirmPassword} = credentials;
  if(Firstname.length < 3 )
  {
    toast.error("First Name length minimum 3 ",toastOptions);
  return false;
  }
  if( Lastname.length < 3)
  {
    toast.error("Last Name length minimum 3 ",toastOptions);
   return false;
  }
  if(Email ===  "")
  {
    toast.error("Email is required",toastOptions);
  return false;
  }
  if(Cnic.length !== 13)
  {
    toast.error("Cnic length must be 13",toastOptions);
  return false;
  }
  if(Password !== ConfirmPassword)
  {
    toast.error("Password Does not match",toastOptions);
return false;
  }
  return true ;
}


  return (
<>
<Container>
      <div className="row-div">
        <div className='col1'>
          <img src={sidebar} alt="image" />
        </div>
        <div className='col2'>
          <img src={secondlogo} alt="logo" />
          <h2 className='mt-1'>Welcome To E-Court</h2>
          <h4 className='mt-2 mb-4'>Applicant PANEL</h4>
   
        <form  className="form" onSubmit={(event) => handleSubmit(event)}>
        <div className="row">
          <div className="col form__div">
            <input type="text" className="form-control form__input" name='Firstname' onChange={(e) => handleChange(e)} />
            <label htmlFor="First_Name" className="form__label">First_Name</label>

          </div>
          <div className="col form__div">
            <input type="text" className="form-control form__input" name='Lastname' onChange={(e) => handleChange(e)} />
            <label htmlFor="Last_Name" className="form__label">Last_Name</label>

          </div>
        </div>
        <div className="row">
          <div className="col form__div">
            <input type="email" className="form-control form__input" name='Email' onChange={(e) => handleChange(e)} />
            <label htmlFor="Email" className="form__label">Email</label>

          </div>
          <div className="col form__div">
            <input type="text" className="form-control form__input" name='Cnic' onChange={(e) => handleChange(e)}  autoComplete="Cnic"  />
            <label htmlFor="Cnic" className="form__label">Cnic</label>

          </div>
        </div>
        <div className="row">
          <div className="col form__div">
            <input type="password" className="form-control form__input" id='prow2' name='Password' onChange={(e) => handleChange(e)} autoComplete="new-password" />
            <label htmlFor="Password" className="form__label">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="col form__div">
            <input type="password" className="form-control  form__input" id="prow1" name='ConfirmPassword' onChange={(e) => handleChange(e)} autoComplete="new-password" />
            <label htmlFor="ConfirmPassword" className="form__label">Confirm_Password</label>
          </div>
        </div>
        <span className='d-flex justify-content-end mr-5 pr-5 mb-3 setinmob'>
            Already have an account ? <Link to="/applicantlogin">Login.</Link>
          </span>
        <button className="btn">Register</button>
        
    
        
      </form>
    
    </div>

      </div>


    </Container>
    < ToastContainer /> 
    </>
  )
}
const Container = styled.div`
.row-div{
  width : 100vw;
  height :100vh;
  display :flex;
  flex-direction : row
}

.col1 {
width : 52vw;
  height : 100vh;
}
.col1 img{
width : 52vw;
height : 100vh;
}
.col2 {
width : 48vw;
height : 100vh
}
.col2 h2,h4{
 text-align: center;
  color: blue;
}
.col2 img{
  width :17%;
  height :17%;
  display :flex;
  justify-content : centre ;
  align-item :centre;
  margin : auto;
  margin-top : 5px;
}
#prow1{
  width : 510px;
}
#prow2{
  width : 510px;

}
.form__div {
  display: flex;
  position: relative;
  margin-bottom: 1rem;
}
span{
  margin-right:20px;
  color : gray;
}
.form__input {
  width: 17vw;
  height: 95%;
  font-size: var(--normal-font-size);
  border: 2px solid blue;
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  background: none;
  margin: 0;
}

.form__label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 .25rem;
  background-color: #fff;
  color: var(--input-color);
  font-size: var(--normal-font-size);
  transition: .3s;
  margin-left : 8px;
}

.form__input:focus + .form__label {
  top: -.5rem;
  left: .8rem;
  color: blue;
  font-size: var(--small-font-size);
  font-weight: 400;
  z-index: 10;
}

.form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
  top: -.5rem;
  left: .8rem;
  z-index: 10;
  font-size: var(--small-font-size);
  font-weight: 400;
}
.row{
  margin :auto 50px;
}
.form__input:focus {
  border: 2px solid blue;
}
.form button,
button:hover {
  color: white;
  background-color: blue;
  margin-top: 30px;
  margin-left: 180px;
  width: 10vw;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-buttom :5px;
}

.form button:hover {
  background-color: darkblue; /* Change the color on hover if needed */
}
@media only screen and (max-width: 767px) {
  .col1 {
    
    display:none;
  }
  .row-div {
  
    display: flex;
    justify-content : centre ;
    align-item : centre;
  
  }
  h2,h4{
    margin-top:15px;
    margin-buttom : 5px;
  }
  .col2{
    width: 100vw;
      height: 100vh
  }
  .col2 form input {

    width: 70vw;
  }
#prow1,#prow2
{
  width: 70vw;

}

.col2 span{
  width : 70vw;
  margin-left : 17vw;
}
  .col2 img {
    margin-top:25px;
    height: 20vh;
    width: 45vw;
  }
  .col2 form button{
    width: 34vw;
    margin-left: 132px;
    margin-top: 24px;
    
  
  }
  
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .col1 {
    
      display:none;
    }
    .row-div {
    
      display: flex;
      justify-content : centre ;
      align-item : centre;
    
    }
    
    h2,h4{
      margin-top:15px;
      margin-buttom : 5px;
    }
    .col2{
      width: 100vw;
        height: 100vh
    }

    .col2 form input {
      width: 100vw;
    }
    #prow1,#prow2
{
  width: 100vw;


}
    .col2 img {
      margin-top:25px;
      height: 22vh;
      width: 28vw;
    }
    .col2 form button{
      width: 34vw;
      margin-left: 264px;
      margin-top: 24px;
      
    
    }
  }

`;




export default RegisterApplicant