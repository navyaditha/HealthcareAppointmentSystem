import { useState } from "react";

function Reminders() {
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [reminders, setReminders] = useState([]);

  function addReminder(e) {
    e.preventDefault();

    if (!patient || !date || !message) {
      alert("Please fill all details");
      return;
    }

    setReminders([...reminders, { patient, date, message }]);
    alert("Reminder added successfully!");

    setPatient("");
    setDate("");
    setMessage("");
  }

  return (
    <div>
      <h2>Appointment Reminder Module</h2>

      <form onSubmit={addReminder}>
        <input
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
        />
        <br /><br />

        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Reminder Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Reminder</button>
      </form>

      <h3>Reminders List</h3>

      {reminders.map((r, index) => (
        <div key={index}>
          <p>Patient: {r.patient}</p>
          <p>Date: {r.date}</p>
          <p>Message: {r.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Reminders;
