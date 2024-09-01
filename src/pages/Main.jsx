import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {backgroundimage} from '../assets/backfroundmain.jpg';
// Replace AppContext with the actual context you are using

function Main() {


  return (
    <Container >
      <div className="container"       >
      <h3 className='d-flex justify-content-center text-center ml-auto'>E-Court Management System</h3>

        <div className="box">
          <Link className="btn btn-primary py-3 mt-2" to="/applicantlogin" role="button">Applicant</Link>
          <Link className="btn btn-primary py-3 mt-2" to="/lawyerlogin" role="button">Lawyer</Link>
          <Link className="btn btn-primary py-3 mt-2" to="/casemanagerlogin" role="button">Admin</Link>
          {/* <Link className="btn btn-primary py-3 mt-2" to="/" role="button">Judge</Link> */}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .container {
    background-color: #FAFAFA; /* Set your desired background color */
    box-shadow: 0 4px 8px rgba(128, 128, 128, 0.5); 
    height : 60vh;
    width : 60vw;
    margin-top:115px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    h2,h3 {
      margin: auto;
      color: blue;
    }
  
    .box {
      margin-top :5px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
    .btn {
      width :20vw;
    }
  }
  
  @media only screen and (max-width: 767px) {
.container{
  margin-top : 24vh;
    height: 50vh;
    width: 90vw ;
    h2,h3{
      margin-left: 50px;
    }
    .btn {
      width :45vw;
    }
  }
  }
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container{
    margin-top : 24vh;
      height: 50vh;
      width: 90vw ;
      h2{
        margin-left: 50px;
      }
      .btn {
        width :30vw;
      }
    }
}
`;

export default Main;
