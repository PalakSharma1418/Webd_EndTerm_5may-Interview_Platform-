import { useState } from "react";
import API from "../services/api";

function Match() {
  const [skill, setSkill] = useState("");
  const [data, setData] = useState([]);

  const findMatch = async () => {
    const res = await API.get(`/api/match?skill=${skill}`);
    setData(res.data);
  };

  return (
    <div>
      <h2>Find Interviewer</h2>

      <input placeholder="Enter skill"
        onChange={(e) => setSkill(e.target.value)} />

      <button onClick={findMatch}>Search</button>

      {data.map((p) => (
        <div key={p.id}>{p.skills}</div>
      ))}
    </div>
  );
}

export default Match;