import React from 'react';
import appointmentsData from '../data/appointment.json';

const PatientAppointments = ({ patientId }) => {
  const patientAppointments = appointmentsData.filter(
    (appointment) => appointment.patientId === patientId
  );

  return (
    <div className="patient-appointments-container">
      <h2>Your Appointments</h2>
      <ul className="patient-appointments-list">
        {patientAppointments.map((appointment) => (
          <li className="patient-appointment-item" key={appointment.id}>
            <span className="patient-appointment-details">
              Date: {appointment.date}, Time: {appointment.time}
              <br />
              Description: {appointment.description}
            </span>
            <br />
            <span className={`patient-appointment-attended ${appointment.attended ? 'attended' : 'not-attended'}`}>
              Attended: {appointment.attended ? 'Yes' : 'No'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientAppointments;
