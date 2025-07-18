function Experiencia() {
  const empresas = [
    {
      id: 0,
      titulo: (
        <h2 className="font-bold text-laSalle text-xl">
          La Salle <span className="text-lg"> (sep 2021 - sep 2023)</span>
        </h2>
      ),
      descripcion: (
        <p>
          He trabajado en el diseño y mantenimiento visual de los sitios web de
          colegios La Salle y páginas internas adaptadas a distintas necesidades
          internas, asegurando una experiencia de usuario clara y funcional.
        </p>
      ),
      skills: [
        {
          texto: "Bootstrap",
          color: "bg-laSalle/40 text-laSalle",
        },

        {
          texto: "Wordpress",
          color: "bg-laSalle/40 text-laSalle",
        },
        {
          texto: "Elementor",
          color: "bg-laSalle/40 text-laSalle",
        },
        {
          texto: "Vanilla JS",
          color: "bg-laSalle/40 text-laSalle",
        },
        {
          texto: "HTML",
          color: "bg-laSalle/40 text-laSalle",
        },
        {
          texto: "CSS",
          color: "bg-laSalle/40 text-laSalle",
        },
        {
          texto: "Wordpress",
          color: "bg-laSalle/40 text-laSalle",
        },
        {
          texto: "JSON",
          color: "bg-laSalle/40 text-laSalle",
        },
      ],
    },
    {
      id: 1,
      titulo: (
        <h2 className="font-bold text-dit text-xl">
          Dit Gestion <span className="text-lg"> (jun 2024 - actual)</span>
        </h2>
      ),
      descripcion: (
        <div className="flex flex-col gap-4">
          <p>
            P áginas B2B y B2C para agencias de viajes, enfocadas en una
            experiencia de usuario fluida y eficiente, utilizando componentes
            reutilizables e inputs diseñadas de cero.
          </p>
          <p>
            Asi mismo mplementado motores de búsqueda y sistemas de filtrado,
            así como integraciones con APIs externas.
          </p>
        </div>
      ),
      skills: [
        {
          texto: "Tailwind",
          color: "bg-dit/40 text-dit",
        },
        {
          texto: "React JS",
          color: "bg-dit/40 text-dit",
        },
        {
          texto: "Zustand",
          color: "bg-dit/40 text-dit",
        },
        {
          texto: "Tanstack",
          color: "bg-dit/40 text-dit",
        },
        {
          texto: "Vite",
          color: "bg-dit/40 text-dit",
        },
        {
          id: 6,
          texto: "Git",
          color: "bg-dit/40 text-dit",
        },
        {
          texto: "Bootstrap",
          color: "bg-dit/40 text-dit",
        },
        {
          texto: "APIs",
          color: "bg-dit/40 text-dit",
        },
        {
          texto: "JSON",
          color: "bg-dit/40 text-dit",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen gap-5 relative overflow-hidden md:px-8 xl:px-20 flex justify-around items-center ">
      <div className=" px-10 flex flex-wrap  items-stretch justify-center gap-10 ">
        {empresas.map((empresa) => (
          <div
            key={empresa.id}
            className="holographic-card flex flex-col p-5 w-full lg:w-[30vw] xl:w-[25vw]"
          >
            <div>
              {empresa.titulo}
              <div className="text-slate-300 text-sm mt-5">
                {empresa.descripcion}
              </div>
            </div>

            <div className="mt-4 flex gap-3 flex-wrap">
              {empresa.skills.map((skill, index) => (
                <span
                  className={`${skill.color} text-sm p-1 px-2 rounded-xl`}
                  key={index}
                >
                  {skill.texto}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiencia;
