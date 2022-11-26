import React from "react";
import Horloge from "./components/horloge";
import Welcome from "./components/welcome";
import { Routes, Route } from "react-router-dom";
import Note from "./components/Note";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/notes" element={<Note />} />
      <Route path="/horloge" element={<Horloge />} />
    </Routes>
  );
}

export default App;
