import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
