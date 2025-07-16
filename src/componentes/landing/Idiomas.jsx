function Idiomas() {
  const idiomas = [
    {
      id: 0,
      idioma: "Inglés",
      porcentaje: 20,
      porcentajeAMostrar: <img src="/idiomas/america.svg" className="w-7" />,
    },
    {
      id: 1,
      idioma: "Español",
      porcentaje: 20,
      porcentajeAMostrar: <img src="/idiomas/spain.svg" className="w-7" />,
    },
    {
      id: 2,
      idioma: "Georgiano",
      porcentaje: 20,
      porcentajeAMostrar: <img src="/idiomas/georgia.svg" className="w-7" />,
    },
    {
      id: 3,
      idioma: "Ruso",
      porcentaje: 180,

      porcentajeAMostrar: <img src="/idiomas/russia.png" className="w-7" />,
    },
    {
      id: 4,
      idioma: "Euskera",
      porcentaje: 200,
      porcentajeAMostrar: <img src="/idiomas/basque.png" className="w-7" />,
    },
  ];
  return (
    <div className="gap-5">
      {idiomas.map((idioma) => (
        <div
          key={idioma.id}
          className="text-slate-300 bg-slate-900 p-2 flex items-center justify-between min-w-[200px] border border-slate-700 h-fit"
        >
          <h3 className="font-bold">{idioma.idioma}</h3>
          <div className="relative">
            <svg className="progress-ring w-16 h-16" viewBox="0 0 100 100">
              <circle
                className="progress-ring-circle text-cyan-500"
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4"
                style={{ strokeDashoffset: idioma.porcentaje }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-cyan-400">
              {idioma.porcentajeAMostrar}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Idiomas;
