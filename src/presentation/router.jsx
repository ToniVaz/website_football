import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ClubRoute } from "../modules/clubs/router";
import { LandingPage } from "../modules/landing/router";

const Routes = () => {
  return (
    <>
      <LandingPage />
      <ClubRoute />
    </>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
