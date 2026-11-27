function Doctors() {
  const doctors = [
    { id: 1, name: "Dr. Ravi Kumar", specialty: "Cardiology", time: "9 AM - 2 PM" },
    { id: 2, name: "Dr. Priya", specialty: "Neurology", time: "10 AM - 4 PM" },
    { id: 3, name: "Dr. Suresh", specialty: "Dermatology", time: "9 AM - 1 PM" },
    { id: 4, name: "Dr. Anjali", specialty: "Pediatrics", time: "11 AM - 5 PM" }
  ];

  return (
    <div>
      <h2>Doctor Management Module</h2>
      <p>View doctor details and specializations.</p>

      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h3>{doctor.name}</h3>
          <p>Specialization: {doctor.specialty}</p>
          <p>Availability: {doctor.time}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Doctors;
