// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
//import './AdminDashboard.css';

const AdminDashboard = () => {
  const [configurations, setConfigurations] = useState({});

  useEffect(() => {
    const fetchConfigurations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getConfigurations');
        setConfigurations(response.data);
      } catch (error) {
        console.error('Error fetching configurations:', error);
      }
    };

    fetchConfigurations();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Application Version: {configurations.appVersion}</p>
      <p>Number of Users: {configurations.numUsers}</p>
      {/* Other admin dashboard information */}
    </div>
  );
};

export default AdminDashboard;
