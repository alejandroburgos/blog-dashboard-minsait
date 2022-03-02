import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Layout/Admin";

import "./assets/scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
