import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Match from "./pages/Match";
import VideoRoom from "./pages/VideoRoom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />   {/* ✅ outside Routes */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/match" element={<Match />} />
        <Route path="/video" element={<VideoRoom />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;