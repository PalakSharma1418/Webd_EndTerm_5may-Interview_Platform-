import { useState } from "react";
import API from "../services/api";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "INTERVIEWEE",
  });

  const handleSubmit = async () => {
    const res = await API.post("/api/auth/register", user);
    alert("User created with ID: " + res.data.id);
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })} />

      <input placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })} />

      <input placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })} />

      <select
        onChange={(e) => setUser({ ...user, role: e.target.value })}>
        <option value="INTERVIEWEE">Interviewee</option>
        <option value="INTERVIEWER">Interviewer</option>
      </select>

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;