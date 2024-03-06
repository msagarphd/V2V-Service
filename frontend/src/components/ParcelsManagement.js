// ParcelsManagementPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
//import './ParcelsManagementPage.css';

const ParcelsManagementPage = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/getParcels');
        setParcels(response.data);
      } catch (error) {
        console.error('Error fetching parcels:', error);
      }
    };

    fetchParcels();
  }, []);

  return (
    <div className="parcels-management">
      <h2>Parcels Management</h2>
      <ul>
        {parcels.map((parcel) => (
          <li key={parcel.parcelId}>
            Parcel ID: {parcel.parcelId}, Destination: {parcel.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParcelsManagementPage;
