import React from "react";
import FootballLandingComponent from "../components/image/image.jsx";
import NewsTape from "../components/newsTape/index.jsx";
import ClubLogos from "../components/clubLogos/index.jsx";
import ResultadosFutbol from "../components/resultados/resultados.jsx";
import { EnhancedFootballStandings } from "../components/body/index.jsx";

const menuItems = [
  "PRIMERA",
  "ASCENSO",
  "INTERNACIONAL",
  "MESSI",
  "SELECCIÓN",
  "LIBERTADORES",
  "AUTOS",
  "BÁSQUET",
  "TENIS",
  "ÚLTIMAS NOTICIAS",
];

export const Component = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#b40000] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <img
            src="https://secure.espncdn.com/redesign/assets/img/logos/logo-espn-82x20.png"
            alt="Olé Logo"
            width={80}
            height={40}
          />
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.slice(0, 5).map((item) => (
                <li key={item}>
                  <h5>{item}</h5>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <NewsTape />
      <FootballLandingComponent />
      <ClubLogos />
      <ResultadosFutbol />
      <EnhancedFootballStandings />
    </div>
  );
};
