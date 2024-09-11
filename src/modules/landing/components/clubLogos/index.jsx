import React from "react";
import "./style.css"; // Asegúrate de que este archivo tenga la clase .scrollbar-hide

const clubLogos = [
  "https://www.ole.com.ar/img/escudos/ecuador/aucas.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/barcelona.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/cumbaya.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/delfin.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/deportivo_cuenca.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/el_nacional.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/imbabura.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/independiente_del_valle.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/libertad.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/liga_quito.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/macara.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/mushuc_runa.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/orense.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/tecnico_universitario.svg",
  "https://www.ole.com.ar/img/escudos/ecuador/universidad_catolica.svg",
];

const ClubLogos = () => {
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
          {clubLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-11 w-auto transition-transform transform hover:scale-150 hover:shadow-lg cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ClubLogos;
