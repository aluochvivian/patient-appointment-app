import React from 'react';
import patientsData from '../data/patients.json';
import PatientProfile from './PatientProfile';
import PatientAppointments from './PatientAppointments';
import CalendarComponent from './CalendarComponent';

const App = () => {
  const loggedInPatient = patientsData[0];

  return (
    <div>
      <h1>Patient Appointment App</h1>
      <PatientProfile patient={loggedInPatient} />
      <PatientAppointments patientId={loggedInPatient.id} />
      <CalendarComponent />
      </div>
  );
};

export default App;
