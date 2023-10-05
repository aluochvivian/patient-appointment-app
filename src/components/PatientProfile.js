import React from 'react';
const PatientProfile = ({ patient }) => {
  return (
    <div className="patient-profile-container">
      <h2>Your Profile</h2>
      <div className="patient-details">
        <p className="patient-name">Name: {patient.name}</p>
        <p className="patient-email">Email: {patient.email}</p>
      </div>
    </div>
  );
};

export default PatientProfile;
