import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [registered, setRegistered] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setRegistered([
      ...registered,
      { name, department, course }
    ]);

    setName("");
    setDepartment("");
    setCourse("");
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>College Course Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
        </select>
        <br /><br />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select Course</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="Web Development">Web Development</option>
          <option value="Database Management">Database Management</option>
        </select>
        <br /><br />

        <button type="submit">Register</button>
      </form>

      <h2>Registered Students</h2>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {registered.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;