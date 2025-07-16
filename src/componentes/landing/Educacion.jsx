import React from "react";
import { FaSchool } from "react-icons/fa";

function Educacion() {
  const educacion = [
    {
      id: 0,
      colegio: "Zubiri Manteo",
      titulo: "Grado Medio",
      subTitulo: "sistemas microinformaticos",
    },
      {
      id: 1,
      colegio: "Zubiri Manteo",
      titulo: "Grado Superior",
      subTitulo: "Desarrollo de aplicaciones web",
    },
  ];
  return (
    <div className="text-slate-300 flex justify-center items-center min-h-[30vh]">
      <div className="grid grid-cols-3 gap-10">
        {educacion.map((ed) => (
          <div
            key={ed.id}
            className="border-2 border-slate-100/30  grid grid-cols-3 gap-3 rounded holographic-card p-3"
          >
            <div className="col-span-1 text-xs text-pink-500 flex justify-center items-center h-full -rotate-45">
              {ed.colegio}
            </div>
            <div className="col-span-2 p-4">
              <h3 className="text-pink-500">{ed.titulo}</h3>
              <p>{ed.subTitulo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educacion;
