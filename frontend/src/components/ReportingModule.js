import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const ReportingModule = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from backend when component mounts
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      // Make API call to fetch reports from backend
      const response = await axios.get('http://localhost:3001/api/reports');
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  return (
    <div>
      <h2>Reporting Module</h2>
      <div>
        <h3>Reports</h3>
        <ul>
          {reports.map(report => (
            <li key={report.id}>
              {report.title} - {report.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportingModule;
