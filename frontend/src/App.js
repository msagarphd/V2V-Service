import React from 'react';

import './App.css';
import ParcelRegisteringForm from './components/ParcelRegisteringForm';
import ParcelMonitoringDashboard from './components/ParcelMonitoringDashboard';
import ParcelsManagement from './components/ParcelsManagement';
import TransportationPlanningApplication from './components/TransportationPlanningApplication';
import DashboardApplication from './components/DashboardApplication';
import ConsumerParcelTrackingModule from './components/ConsumerParcelTrackingModule';
import ParcelLocationDataCaptureModule from './components/ParcelLocationDataCaptureModule';
import ReportingModule from './components/ReportingModule';
import SSO_Module from './components/SSO_Module';
import AdminModule from './components/AdminModule';

function App() {
  return (
    <div className="App">
      <h1>V2V Couriers</h1>
      <ParcelRegisteringForm />
      <ParcelMonitoringDashboard />
      <ParcelsManagement />
      <TransportationPlanningApplication />
      <DashboardApplication />
      <ConsumerParcelTrackingModule />
      <ParcelLocationDataCaptureModule />
      <ReportingModule />
      <SSO_Module />
      <AdminModule />
    </div>
  );
}

export default App;
