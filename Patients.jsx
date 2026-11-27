import { useState } from "react";

function Patients() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [patients, setPatients] = useState([]);

  function registerPatient(e) {
    e.preventDefault();

    if (!name || !age || !phone) {
      alert("Please fill all details");
      return;
    }

    setPatients([...patients, { name, age, phone }]);
    alert("Patient registered successfully!");

    setName("");
    setAge("");
    setPhone("");
  }

  return (
    <div>
      <h2>Patient Management Module</h2>

      <form onSubmit={registerPatient}>
        <input
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br /><br />

        <button type="submit">Register Patient</button>
      </form>

      <h3>Registered Patients</h3>

      {patients.map((p, index) => (
        <div key={index}>
          <p>Name: {p.name}</p>
          <p>Age: {p.age}</p>
          <p>Phone: {p.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Patients;
