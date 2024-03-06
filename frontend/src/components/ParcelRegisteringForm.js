//ParcelRegisteringForm.js
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API calls
import './App.css';
//import './ParclRegisteringForm.css'

const ParcelRegisteringForm = () => {
  const [parcelData, setParcelData] = useState({
    parcelId: '',
    recipientName: '',
    // other parcel details
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParcelData({ ...parcelData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to register parcel
      const response = await axios.post('http://localhost:3001/api/registerParcel', parcelData);
      console.log('Parcel registered:', response.data);
      // Reset form after successful registration
      setParcelData({
        parcelId: '',
        recipientName: '',
        // Reset other parcel details as needed
      });
    } catch (error) {
      console.error('Error registering parcel:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="parcelId"
        value={parcelData.parcelId}
        onChange={handleInputChange}
        placeholder="Parcel ID"
      />
      <input
        type="text"
        name="recipientName"
        value={parcelData.recipientName}
        onChange={handleInputChange}
        placeholder="Recipient Name"
      />
      {/* other input fields */}
      <button type="submit">Register Parcel</button>
    </form>
  );
};

export default ParcelRegisteringForm;
