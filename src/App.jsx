import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Quote Generator
      </h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
