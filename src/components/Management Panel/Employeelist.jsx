import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchalldetailscasemanagerRoute } from '../../utlis/APIRoutes';

function Employeelist() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(fetchalldetailscasemanagerRoute);
        setEmployeeList(response.data.Employeelist);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
// console.log(employeeList)
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Employees List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/managementpanel">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Employees List</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
            {employeeList && employeeList.length > 0 ? (
  employeeList.map((employee) => 
  (
                <div
                  key={employee._id} // replace 'id' with the actual unique identifier for each employee
                  className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column"
                >
                  <div className="card bg-light d-flex flex-fill">
                    <div className="card-header text-muted border-bottom-0">
                      <h5>{employee.name}</h5>
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="lead">
                            <b>{employee.Title}</b>
                          </h2>
                          
                            <p className="text-muted text-sm">
                              <b>Employee Email: </b> {employee.Email}
                            </p>
                            <p className="text-muted text-sm">
                              <b>Employee Designation: </b>
                              {employee.Designation}
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
  )) : (
    <p>No employees found</p> )}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Employeelist;
