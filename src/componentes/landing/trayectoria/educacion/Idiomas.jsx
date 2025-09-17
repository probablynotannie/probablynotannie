import React from "react";

function Idiomas() {
  const idiomas = [
    {
      id: 0,
      idioma: "Inglés",
      porcentaje: 90,
      flag: "/idiomas/america.svg",
    },
    {
      id: 1,
      idioma: "Español",
      porcentaje: 90,
      flag: "/idiomas/spain.svg",
    },
    {
      id: 2,
      idioma: "Georgiano",
      porcentaje: 90,
      flag: "/idiomas/georgia.svg",
    },
    {
      id: 3,
      idioma: "Ruso",
      porcentaje: 40,
      flag: "/idiomas/russia.png",
    },
    {
      id: 4,
      idioma: "Euskera",
      porcentaje: 25,
      flag: "/idiomas/basque.png",
    },
  ];

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="container px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 py-10">
        {idiomas.map((idioma) => {
          const strokeDashoffset =
            circumference - (idioma.porcentaje / 100) * circumference;
          return (
            <div
              key={idioma.id}
              className="bg-slate-900 border border-slate-700 rounded-xl p-5 flex flex-col items-center shadow hover:shadow-cyan-500/10 transition-all"
            >
              <h3 className="text-lg font-bold text-slate-200 mb-4">
                {idioma.idioma}
              </h3>

              <div className="relative w-24 h-24">
                <svg
                  className="transform -rotate-90"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    stroke="#334155"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    stroke="#06b6d4"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={idioma.flag}
                    alt={idioma.idioma}
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Idiomas;
