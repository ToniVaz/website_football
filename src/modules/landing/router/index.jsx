import React from "react";
import { Route, Routes } from "react-router-dom";
import { Component } from "../page/index.jsx";

export const LandingPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Component />} />
    </Routes>
  );
};
