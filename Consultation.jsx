import { useState } from "react";

function Consultation() {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [consultations, setConsultations] = useState([]);

  function bookConsultation(e) {
    e.preventDefault();

    if (!patient || !doctor) {
      alert("Please enter patient and doctor details");
      return;
    }

    setConsultations([...consultations, { patient, doctor }]);
    alert("Consultation request submitted!");

    setPatient("");
    setDoctor("");
  }

  return (
    <div>
      <h2>Online Consultation Module</h2>

      <form onSubmit={bookConsultation}>
        <input
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
        <br /><br />

        <button type="submit">Request Consultation</button>
      </form>

      <h3>Consultation Requests</h3>

      {consultations.map((c, index) => (
        <div key={index}>
          <p>Patient: {c.patient}</p>
          <p>Doctor: {c.doctor}</p>
          <p>Status: Consultation Requested</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Consultation;
