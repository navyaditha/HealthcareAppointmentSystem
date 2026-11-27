import { useState } from "react";

function MedicalRecords() {
  const [patient, setPatient] = useState("");
  const [history, setHistory] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [records, setRecords] = useState([]);

  function saveRecord(e) {
    e.preventDefault();

    if (!patient || !history || !diagnosis) {
      alert("Please fill all details");
      return;
    }

    setRecords([...records, { patient, history, diagnosis }]);
    alert("Medical record saved successfully!");

    setPatient("");
    setHistory("");
    setDiagnosis("");
  }

  return (
    <div>
      <h2>Medical Records Module</h2>

      <form onSubmit={saveRecord}>
        <input
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Medical History"
          value={history}
          onChange={(e) => setHistory(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Diagnosis / Treatment"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
        <br /><br />

        <button type="submit">Save Record</button>
      </form>

      <h3>Saved Records</h3>

      {records.map((r, index) => (
        <div key={index}>
          <p>Patient: {r.patient}</p>
          <p>History: {r.history}</p>
          <p>Diagnosis: {r.diagnosis}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default MedicalRecords;
