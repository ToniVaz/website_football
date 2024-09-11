"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from "lucide-react";

const dias = ["SÁB.", "DOM.", "LUN.", "MAR.", "MIÉ.", "JUE.", "VIE."];
const meses = [
  "ENE.",
  "FEB.",
  "MAR.",
  "ABR.",
  "MAY.",
  "JUN.",
  "JUL.",
  "AGO.",
  "SEP.",
  "OCT.",
  "NOV.",
  "DIC.",
];

const partidos = [
  {
    hora: "5:30 PM",
    equipoLocal: "Aucas",
    equipoVisitante: "Barcelona SC",
    estadio: "La Caldera del Sur",
    ciudad: "Quito, Ecuador",
    banderaLocal:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6017.png&scale=crop&cquality=40&location=origin&w=80&h=80",
    banderaVisitante:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2686.png&scale=crop&cquality=40&location=origin&w=80&h=80",
  },
  {
    hora: "6:00 PM",
    equipoLocal: "Cumbayá",
    equipoVisitante: "Delfín",
    estadio: "Estadio Olímpico Atahualpa",
    ciudad: "Quito, Ecuador",
    banderaLocal:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/21392.png&scale=crop&cquality=40&location=origin&w=80&h=80",
    banderaVisitante:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1011.png&scale=crop&cquality=40&location=origin&w=80&h=80",
  },
  {
    hora: "6:00 PM",
    equipoLocal: "Deportivo Cuenca",
    equipoVisitante: "El Nacional",
    estadio: "Estadio Alejandro Serrano Aguilar Banco del Austro",
    ciudad: "Cuenca, Ecuador",
    banderaLocal:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4812.png&scale=crop&cquality=40&location=origin&w=80&h=80",
    banderaVisitante:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/882.png&scale=crop&cquality=40&location=origin&w=80&h=80",
  },
  {
    hora: "7:00 PM",
    equipoLocal: "Imbabura",
    equipoVisitante: "Emelec",
    estadio: "Estadio Olímpico de Ibarra",
    ciudad: "Ciudad de Ibarra, Ecuador",
    banderaLocal:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7422.png&scale=crop&cquality=40&location=origin&w=80&h=80",
    banderaVisitante:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2668.png&scale=crop&cquality=40&location=origin&w=80&h=80",
  },
];

const ResultadosFutbol = () => {
  const [fechaActual, setFechaActual] = useState(new Date(2024, 8, 10));
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cambiarFecha = (dias) => {
    const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    setFechaActual(nuevaFecha);
  };

  return (
    <div
      className="max-w-7xl mx-auto p-4 bg-white rounded-lg"
      style={{ marginTop: "100px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Resultados de Fútbol</h2>
        <div className="relative">
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <select className="hidden md:block border rounded p-2">
            <option>Resultados de Fútbol</option>
          </select>
          {menuAbierto && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 md:hidden">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Resultados de Fútbol
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 overflow-x-auto">
        <button onClick={() => cambiarFecha(-1)} className="p-2 flex-shrink-0">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
            const fecha = new Date(fechaActual);
            fecha.setDate(fecha.getDate() + offset);
            const esHoy = offset === 0;
            return (
              <div
                key={offset}
                className={`text-center px-3 py-1 flex-shrink-0 ${
                  esHoy ? "bg-blue-500 text-white rounded" : ""
                }`}
              >
                <div className="text-xs">{dias[fecha.getDay()]}</div>
                <div className="text-sm font-semibold">
                  {fecha.getDate()} {meses[fecha.getMonth()]}
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={() => cambiarFecha(1)} className="p-2 flex-shrink-0">
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div
        className="text-base md:text-lg font-semibold mb-4"
        style={{
          // background: "#eeeeee",
          width: "100%",
          padding: "20px",
          borderRadius: "10px",
          zIndex: 1,
          backgroundColor: "rgba(216, 216, 216, 0.5)", // Ajusta el valor
        }}
      >
        {dias[fechaActual.getDay()]} {fechaActual.getDate()} de{" "}
        {meses[fechaActual.getMonth()]} {fechaActual.getFullYear()}
      </div>

      <div className="space-y-4">
        <div className="font-semibold">LIGA PRO ECUABET</div>
        {partidos.map((partido, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <span className="text-sm text-gray-600 mb-2 md:mb-5">
                {partido.hora}
              </span>
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  Resumen
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  Estadísticas
                </button>
              </div>
            </div>
            <div className="flex flex-row md:flex-row justify-evenly items-center">
              <div className="flex flex-col items-center ">
                <img
                  src={partido.banderaLocal}
                  alt={`${partido.equipoLocal} logo`}
                  className="w-55 h-55"
                />
                <span className="font-semibold">{partido.equipoLocal}</span>
              </div>
              <span className="font-semibold" style={{ color: "#b40000" }}>
                VS
              </span>
              <div className="flex flex-col items-center space-x-2">
                <img
                  src={partido.banderaVisitante}
                  alt={`${partido.equipoVisitante} logo`}
                  className="w-55 h-55"
                />
                <span className="font-semibold">{partido.equipoVisitante}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-8 text-center md:text-left flex justify-center">
              {partido.estadio}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultadosFutbol;
