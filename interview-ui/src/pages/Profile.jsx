import { useState } from "react";
import API from "../services/api";

function Profile() {
  const [profile, setProfile] = useState({
    skills: "",
    experience: "",
    userId: "",
  });

  const createProfile = async () => {
    await API.post("/api/profile", {
      skills: profile.skills,
      experience: profile.experience,
      user: { id: profile.userId },
    });
    alert("Profile created");
  };

  return (
    <div>
      <h2>Create Profile</h2>

      <input placeholder="Skills"
        onChange={(e) => setProfile({ ...profile, skills: e.target.value })} />

      <input placeholder="Experience"
        onChange={(e) => setProfile({ ...profile, experience: e.target.value })} />

      <input placeholder="User ID"
        onChange={(e) => setProfile({ ...profile, userId: e.target.value })} />

      <button onClick={createProfile}>Submit</button>
    </div>
  );
}

export default Profile;