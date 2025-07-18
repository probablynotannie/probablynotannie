import React from "react";
import { FaSchool } from "react-icons/fa";

function Educacion() {
  const educacion = [
    {
      id: 0,
      colegio: "Zubiri Manteo",
      titulo: "Grado Medio",
      subTitulo: "Sistemas Microinformáticos",
    },
    {
      id: 1,
      colegio: "Zubiri Manteo",
      titulo: "Grado Superior",
      subTitulo: "Desarrollo de Aplicaciones Web",
    },
  ];

  return (
    <section className="container px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-200 mb-12">
        Educación
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educacion.map((ed) => (
          <div
            key={ed.id}
            className="relative overflow-hidden min-h-[110px] bg-slate-900 border border-slate-700 rounded-2xl px-6 py-8 flex items-center shadow hover:shadow-pink-500/20 transition-all duration-300"
          >
            <div className="absolute -left-19 top-1/2 -translate-y-1/2 rotate-[-90deg] bg-pink-600 w-[180px] h-[30px] flex items-center justify-center text-white text-xs font-bold rounded tracking-wider shadow-md">
              {ed.colegio}
            </div>

            <div className="ml-10">
              <h3 className="text-xl font-bold text-pink-500">{ed.titulo}</h3>
              <p className="text-slate-300 text-sm mt-1">{ed.subTitulo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educacion;
