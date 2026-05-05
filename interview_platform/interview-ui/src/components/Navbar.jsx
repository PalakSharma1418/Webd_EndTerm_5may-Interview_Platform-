import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/">Dashboard</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/match">Match</Link>
      <Link to="/video">Video</Link>
    </div>
  );
}

export default Navbar;