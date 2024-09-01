// components/LawyerCases.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LawyerCases = ({ lawyerId }) => {
  const [lawyerCases, setLawyerCases] = useState([]);

  useEffect(() => {
    const fetchLawyerCases = async () => {
      try {
        const response = await axios.post(`/api/cases/lawyer/${lawyerId}`);
        setLawyerCases(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLawyerCases();
  }, [lawyerId]);

  return (
    <div>
      <h2>Lawyer Cases</h2>
      <ul>
        {lawyerCases.map((caseItem) => (
          <li key={caseItem._id}>
            {/* Display case details, adjust as needed */}
            <p>Case ID: {caseItem._id}</p>
            <p>Details: {caseItem.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerCases;
