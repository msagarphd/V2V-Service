//ParcelMonitoringDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './ParcelMonitoringDashboard.css';
import './App.css';

const ParcelMonitoringDashboard = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getParcelStatus');
        setParcels(response.data);
      } catch (error) {
        console.error('Error fetching parcel status:', error);
      }
    };

    fetchParcels();
  }, []);

  return (
    <div className="parcel-dashboard">
      <h2>Parcel Monitoring Dashboard</h2>
      <ul>
        {parcels.map((parcel) => (
          <li key={parcel.parcelId}>
            Parcel ID: {parcel.parcelId}, Status: {parcel.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParcelMonitoringDashboard;
