// DashboardPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './DashboardPage.css';
import './App.css';

const DashboardPage = () => {
  const [insights, setInsights] = useState({});

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getDashboardInsights');
        setInsights(response.data);
      } catch (error) {
        console.error('Error fetching dashboard insights:', error);
      }
    };

    fetchInsights();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Parcels: {insights.totalParcels}</p>
      <p>Total Vehicles: {insights.totalVehicles}</p>
      {/* Other dashboard insights */}
    </div>
  );
};

export default DashboardPage;
