import React from "react";
import { Link, useLocation } from "react-router-dom";

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

export const Header = ({ children }) => {
  const location = useLocation(); // Detecta la ubicación actual

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Si ya estamos en el home, hacemos scroll hacia arriba
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Hace el scroll suave
      });
    }
  };

  return (
    <>
      <header className="bg-[#b40000] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Usa onClick para manejar el scroll */}
          <Link to="/" onClick={handleLogoClick}>
            <img
              src="https://secure.espncdn.com/redesign/assets/img/logos/logo-espn-82x20.png"
              alt="Olé Logo"
              width={80}
              height={40}
            />
          </Link>

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

      <main>{children}</main>
    </>
  );
};
