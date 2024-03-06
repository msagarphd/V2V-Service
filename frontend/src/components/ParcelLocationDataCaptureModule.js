import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const ParcelLocationDataCaptureModule = () => {
  const [parcelLocations, setParcelLocations] = useState([]);

  useEffect(() => {
    // Fetch parcel locations from backend when component mounts
    fetchParcelLocations();
  }, []);

  const fetchParcelLocations = async () => {
    try {
      // Make API call to fetch parcel locations from backend
      const response = await axios.get('http://localhost:3001/api/parcelLocations');
      setParcelLocations(response.data);
    } catch (error) {
      console.error('Error fetching parcel locations:', error);
    }
  };

  return (
    <div>
      <h2>Parcel Location Data Capture Module</h2>
      <div>
        <h3>Parcel Locations</h3>
        <ul>
          {parcelLocations.map((location, index) => (
            <li key={index}>
              Parcel ID: {location.parcelId}, Location: {location.location}, Timestamp: {location.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParcelLocationDataCaptureModule;
