import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const clubLogos = [
  {
    clubName: "bocaJuniors",
    clubLogo: "https://www.ole.com.ar/img/escudos/futbolPrimera/boca.svg",
  },
  {
    // clubName: "aucas",
    clubName: "lduQuito",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/aucas.svg",
  },
  {
    clubName: "bocaJuniors",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/barcelona.svg",
  },
  {
    clubName: "lduQuito",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/cumbaya.svg",
  },
  {
    clubName: "bocaJuniors",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/delfin.svg",
  },
  {
    clubName: "lduQuito",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/deportivo_cuenca.svg",
  },
  {
    clubName: "bocaJuniors",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/el_nacional.svg",
  },
  {
    clubName: "lduQuito",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/imbabura.svg",
  },
  {
    clubName: "bocaJuniors",
    clubLogo:
      "https://www.ole.com.ar/img/escudos/ecuador/independiente_del_valle.svg",
  },
  {
    clubName: "lduQuito",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/libertad.svg",
  },
  {
    clubName: "bocaJuniors",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/liga_quito.svg",
  },
  {
    clubName: "lduQuito",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/macara.svg",
  },
  {
    clubName: "bocaJuniors",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/mushuc_runa.svg",
  },
  {
    clubName: "lduQuito",
    clubLogo: "https://www.ole.com.ar/img/escudos/ecuador/orense.svg",
  },
  {
    clubName: "bocaJuniors",
    clubLogo:
      "https://www.ole.com.ar/img/escudos/ecuador/tecnico_universitario.svg",
  },
  {
    clubName: "lduQuito",
    clubLogo:
      "https://www.ole.com.ar/img/escudos/ecuador/universidad_catolica.svg",
  },
];

const ClubLogos = () => {
  const navigate = useNavigate();

  const clubPage = (clubName) => {
    navigate(`/club/${clubName}`);
  };

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div
          className="flex justify-center gap-4 overflow-x-auto whitespace-nowrap touch-pan-x scrollbar-hide"
          style={{
            maxWidth: "100%",
            padding: "10px",
          }}
        >
          {clubLogos.map((club, index) => (
            <img
              key={index}
              src={club?.clubLogo}
              alt={`Logo ${index}`}
              className="h-11 w-auto transition-transform transform hover:scale-150 hover:shadow-lg cursor-pointer"
              onClick={() => clubPage(club?.clubName)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ClubLogos;
