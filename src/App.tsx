import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoApp } from "./pages/TodoApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
