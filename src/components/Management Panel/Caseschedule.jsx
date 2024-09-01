import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { countandfetchCaseRoute, updatedateRoute } from '../../utlis/APIRoutes';
import AlertSuccess from '../Alerts/AlertSuccess';

function Caseschedule() {
  const [cases, setCases] = useState([]);
  const [dateValues, setDateValues] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(countandfetchCaseRoute);
        setCases(response.data.CasesList);
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e, caseId) => {
    const newDateValues = { ...dateValues, [caseId]: e.target.value };
    setDateValues(newDateValues);
  };

  const handleOnclick = async (caseId) => {
    try {
      console.log(dateValues[caseId])
      const response = await axios.put(updatedateRoute, {
        caseId: caseId,
        Case_Hearing_Date: dateValues[caseId] || '', // Use the specific date for the case
      });
      setShowSuccessAlert(true);
      console.log('Update response:', response.data);
    } catch (error) {
      console.error('Error updating date:', error);
    }
  };

  return (
    <>
    {showSuccessAlert && <AlertSuccess  msg= "Date of Hearning is Added Successfully" />} 
      <div className="content-wrapper">
        <section className="content-header"></section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="invoice p-3 mb-3">
                  <div className="row">
                    <div className="col-12 table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Qty</th>
                            <th>Case Name</th>
                            <th>Case Number</th>
                            <th>Case Status</th>
                            <th>Date Updation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cases.map((caseItem, index) => (
                            <tr key={caseItem._id}>
                              <td>{index + 1}</td>
                              <td>{caseItem.Case_Type}</td>
                              <td>{caseItem.CaseNumber}</td>
                              <td>
                                {caseItem.Case_Status === 'Status Pending' || caseItem.Case_Status === "Rejected" ? (
                                  <span className="badge text-bg-danger">{caseItem.Case_Status}</span>
                                ) : (
                                  <span className="badge text-bg-success">{caseItem.Case_Status}</span>
                                )}
                              </td>
                              <td>
                                <div className={`${(caseItem.Case_Status === 'Status Pending' || caseItem.Case_Status === "Rejected" ? 'd-none' : '')}`}>
                                  <input
                                    type="datetime-local"
                                    className="btn btn-primary w-50"
                                    id={`meeting-time-${caseItem._id}`}
                                    name="Case_Hearing_Date"
                                    onChange={(e) => handleChange(e, caseItem._id)}
                                    value={dateValues[caseItem._id] || ''}
                                  />
                                  <button
                                    className="btn btn-primary ml-1"
                                    onClick={() => {
                                      handleOnclick(caseItem._id);
                                    }}
                                  >
                                    Add Date
                                  </button>
                                </div>
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
  );
}

export default Caseschedule;
