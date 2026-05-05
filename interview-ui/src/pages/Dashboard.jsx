import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Register</h2>
          <p>Create a new account</p>
          <button
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/")}
          >
            Go
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p>Create your profile</p>
          <button
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/profile")}
          >
            Go
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Find Interviewer</h2>
          <p>Match based on skills</p>
          <button
            className="mt-3 bg-purple-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/match")}
          >
            Go
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Video Call</h2>
          <p>Join interview room</p>
          <button
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/video")}
          >
            Join
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;