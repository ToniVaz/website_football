import React from "react";
import { Route, Routes } from "react-router-dom";
import ClubList from "../page/index.jsx";

export const ClubRoute = () => {
  return (
    <Routes>
      <Route path="/club/:clubName" element={<ClubList />} />
    </Routes>
  );
};
