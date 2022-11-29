import React from "react";
import Welcome from "./components/welcome";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
