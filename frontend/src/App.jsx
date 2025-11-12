import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePlan from "./pages/CreatePlan";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import YogaVideos from "./pages/YogaVideos";
import GlobalChatbot from "./components/GlobalChatbot";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-plan"
            element={
              <ProtectedRoute>
                <CreatePlan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/yoga-videos"
            element={
              <ProtectedRoute>
                <YogaVideos />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalChatbot />
      </div>

    </Router>
  );
}

export default App;
