// TransportationPlanningPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for API calls
//import './TransportPlanningPage.css'
import './App.css';

const TransportationPlanningPage = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        // Fetch transportation routes from API
        const response = await axios.get('http://localhost:3001/api/getRoutes');
        setRoutes(response.data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div>
      <h2>Transportation Planning</h2>
      <ul>
        {routes.map((route) => (
          <li key={route.routeId}>
            Route ID: {route.routeId}, Destination: {route.destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportationPlanningPage;
