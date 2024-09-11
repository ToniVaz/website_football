import React from "react";
import "./style.css";

const NewsTape = () => {
  return (
    <div className="bg-gray-200 py-2 overflow-x-hidden whitespace-nowrap">
      <div className="container mx-auto px-4" style={{ display: "flex" }}>
        <p className="responsive-text">
          <span className="live-text">EN VIVO:</span>
          ARGENTINA VS. CHILE | ASÍ FUE EL EMOTIVO HOMENAJE A DI MARÍA |
          CRISTIANO ANOTÓ SU GOL 900 | QUÉ FALTA PARA LA FIRMA DE MUNJAIN |
        ELIMINATORIAS 26
        </p>
      </div>
    </div>
  );
};

export default NewsTape;
