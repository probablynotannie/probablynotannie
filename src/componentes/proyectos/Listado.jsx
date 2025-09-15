import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { Link } from "react-router-dom";

function Listado() {
  const proyectos = [
    {
      id: 0,
      url: "https://volt-green.vercel.app",
      texto: "Volt",
      descripcion:
        "Sitio web corporativo que presenta los servicios de una empresa dedicada a la revisión de contratos de luz y gas, mostrando cómo optimizan las tarifas para sus clientes.",
      info: "Página simple y estática para una empresa que ofrece servicios de mejora en las tarifas de luz y gas.",
      img: "/proyectos/volt/volt.png",
    },
    {
      id: 1,
      url: "",
      texto: "Dit Gestión",
      descripcion: "Buscador de motores para agencias de viajes.",
      info: "Buscadores para Cruceros, aviones, hoteles, ferris, transfers y más.",
      imgLight: "/proyectos/dit/image.png",
      imgDark: "/proyectos/dit/dit.png",
    },
  ];
  const [ditImageMode, setDitImageMode] = useState("light");
  const toggleDitImage = () => {
    setDitImageMode(ditImageMode === "light" ? "dark" : "light");
  };

  return (
    <div className="grid grid-cols-2 gap-6 py-4 overflow-x-auto">
      {proyectos.map((p) => (
        <a
          to={p.url}
          target="_blank"
          key={p.id}
          className="relative flex-none overflow-hidden shadow-lg select-none rounded-xl"
        >
          <div className="w-full h-[350px] overflow-hidden group rounded-t-xl relative">
            <img
              src={
                p.id === 1
                  ? ditImageMode === "light"
                    ? p.imgLight
                    : p.imgDark
                  : p.img
              }
              className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-500 opacity-0 bg-black/60 group-hover:opacity-100">
              <p className="text-xl text-white">{p.info}</p>
            </div>
          </div>
          <div className="p-3 bg-gray-900/70 rounded-b-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">{p.texto}</h2>
              {p.id === 1 && (
                <div onClick={(e) => e.stopPropagation()}>
                  {ditImageMode === "light" ? (
                    <FaSun
                      className="p-1 text-3xl text-orange-100 bg-orange-400 rounded-full cursor-pointer"
                      onClick={toggleDitImage}
                    />
                  ) : (
                    <FaMoon
                      className="p-1 text-3xl text-white rounded-full cursor-pointer bg-slate-700"
                      onClick={toggleDitImage}
                    />
                  )}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-300">{p.descripcion}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Listado;
