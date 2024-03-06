// ParcelTrackingApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for API calls
//import './ParcelTrackingApp.css'
import './App.css';

const ParcelTrackingApp = () => {
  const [parcelLocation, setParcelLocation] = useState({});

  useEffect(() => {
    const trackParcel = async () => {
      try {
        // Fetch parcel location from API
        const response = await axios.get('http://localhost:3001/api/trackParcelLocation');
        setParcelLocation(response.data);
      } catch (error) {
        console.error('Error tracking parcel location:', error);
      }
    };

    trackParcel();
  }, []);

  return (
    <div>
      <h2>Parcel Tracking</h2>
      <p>Current Location: {parcelLocation.currentLocation}</p>
      <p>Estimated Arrival Time: {parcelLocation.estimatedArrivalTime}</p>
      {/* Other tracking information */}
    </div>
  );
};

export default ParcelTrackingApp;
