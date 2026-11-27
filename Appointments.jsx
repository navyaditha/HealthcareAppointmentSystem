import React, { useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const bookAppointment = () => {
    if (patient && doctor && date) {
      setAppointments([...appointments, { patient, doctor, date }]);
      alert("Appointment booked successfully!");
      setPatient("");
      setDoctor("");
      setDate("");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <h2>Appointment Management</h2>

      <input
        placeholder="Patient Name"
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
      />

      <input
        placeholder="Doctor Name"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={bookAppointment}>Book Appointment</button>

      <h3>Appointments List</h3>

      {appointments.map((item, index) => (
        <p key={index}>
          {item.patient} - {item.doctor} - {item.date}
        </p>
      ))}
    </div>
  );
}

export default Appointments;
