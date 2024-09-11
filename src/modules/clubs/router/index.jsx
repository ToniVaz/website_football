import React from "react";
import { Route, Routes } from "react-router-dom";
import ClubList from "../page/index.tsx";

export const ClubRoute = () => {
  return (
    <Routes>
      <Route path="/club/:clubID" element={<ClubList />} />
    </Routes>
  );
};
