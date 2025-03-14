import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../views/App";
import DetailsUser from "../views/DetailsUser";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detalles/:id" element={<DetailsUser/>}/>
      </Routes>
    </Router>
  );
};

export default Rutas;
