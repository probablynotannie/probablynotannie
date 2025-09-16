import { FaDownload, FaPhone, FaSchool } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";

function Experiencia() {
  const recorridog = [
    {
      id: 0,
      tipo: 0,
      icono: (
        <span className="absolute flex items-center justify-center w-6 h-6 bg-laSalle rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-orange-900">
          <FaSchool className="text-orange-400 text-sm" />
        </span>
      ),
      nombre: "La Salle",
      fechas: "Septiembre 2021 - Septiembre 2023",

      skills: [
        "Html + CSS",
        "Vanilla JS",
        "Bootstrap",
        "Php",
        "PhpMyAdmin",
        "Wodpress",
        "React Query",
        "Tanstack",
        "APIs",
      ],
      badge: "bg-laSalle/40 text-laSalle",
      color: "text-laSalle",
      descripcion:
        "Desarrollo Full Stack, enfocado en la creación de páginas web dinámicas de todas las páginas de colegios de La Salle. Diseño desde 0 de páginas internas de La Salle para la sede de Donosti.",
    },
    {
      id: 1,
      tipo: 0,
      icono: (
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaPhone className="text-green-400 text-sm" />
        </span>
      ),
      nombre: "Ayesa - Ibermatica",
      fechas: "Octubre 2023 - Junio 2024",

      skills: ["Jira", "CMS interno"],
      badge: "bg-green-500/40 text-green-500",
      color: "text-cyan-500",
      descripcion: (
        <div>
          <p>
            Servicio técnico telemático: apoyo en la resolución de incidencias
            de acceso, software y problemas técnicos.
          </p>
          <p>
            Ayuda con el diseño de las páginas de formación de otros técnicos
            utilizando CMS interno.
          </p>
        </div>
      ),
    },

    {
      id: 2,
      tipo: 0,
      icono: (
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <IoAirplane className="text-blue-400 text-xs " />
        </span>
      ),
      nombre: "Dit Gestion",
      fechas: "Junio 2024 - actualidad",
      color: "text-laSalle",
      badge: "bg-dit/30 text-dit",
      skills: [
        "React JS",
        "Tailwind",
        "Flowbite",
        "Zustand",
        "Hooks personalizados",
        "React Query",
        "Tanstack",
        "Zustand",
        "APIs",
      ],
      descripcion:
        " Páginas B2B y B2C para agencias de viajes, enfocadas en una  experiencia de usuario fluida y eficiente, utilizando componentes reutilizables e inputs diseñadas de cero. Asi mismo mplementado motores de búsqueda y sistemas de filtrado, así como integraciones con APIs externas.",
    },
  ];

  return (
    <div className="min-h-screen">
      <ol className="max-w-6xl relative border-s border-gray-200 dark:border-gray-700">
        {recorridog.reverse().map((item) => (
          <li key={item.id} className="mb-10 ms-6">
            {item.icono}
            <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-white">
              {item.nombre}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.fechas}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.descripcion}
            </p>
            <ul className="flex flex-wrap gap-2 my-4">
              {item?.skills?.map((skill, index) => (
                <li
                  key={index}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition ${item.badge}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
            {item.id === recorridog.length - 1 && (
              <a
                href="/CV.pdf"
                download="/CV.pdf"
                className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <FaDownload className="me-2" />
                Descarga mi CV en PDF
              </a>
            )}
            {item.id === 0 && (
              <a
                href="/cartaRec.jpg"
                target="_blank"
                className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <FaDownload className="me-2" />
                Carta de recomendación
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Experiencia;
