import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Login from "./components/Login";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
