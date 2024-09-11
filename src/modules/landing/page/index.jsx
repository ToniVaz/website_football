import React from "react";
import FootballLandingComponent from "../components/image/image.jsx";
import NewsTape from "../components/newsTape/index.jsx";
import ClubLogos from "../components/clubLogos/index.jsx";
import ResultadosFutbol from "../components/resultados/resultados.jsx";
import { EnhancedFootballStandings } from "../components/body/index.jsx";
import { Header } from "../../../components/ui/header.jsx";

export const Component = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <NewsTape />
      <FootballLandingComponent />
      <ClubLogos />
      <ResultadosFutbol />
      <EnhancedFootballStandings />
    </div>
  );
};
