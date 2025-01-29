// src/App.jsx

import React from "react";
import Home from "./Home";
import "./App.css"; // Import global styles
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bookform } from "./components/Bookform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Bookform />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
