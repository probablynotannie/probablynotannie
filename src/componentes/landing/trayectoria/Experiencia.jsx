import { FaDownload, FaPhone, FaSchool } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { useTranslation } from "react-i18next";
function Experiencia() {
  const { t } = useTranslation();
  const recorridog = [
    {
      id: 0,
      tipo: 0,
      icono: (
        <span className="absolute flex items-center justify-center w-6 h-6 bg-laSalle rounded-full -start-3 ring-8 ring-white dark:ring-slate-900 dark:bg-orange-900">
          <FaSchool className="text-orange-400 text-sm" />
        </span>
      ),
      nombre: "La Salle",
      fechas: (
        <span className="capitalize">
          {t("meses.sep")} 2021 - {t("meses.sep")} 2023
        </span>
      ),

      skills: [
        "Html + CSS",
        "Vanilla JS",
        "Bootstrap",
        "Php",
        "MySQL",
        "PhpMyAdmin",
        "Wodpress",
        "Elementor",
      ],
      badge: "bg-laSalle/40 text-laSalle",
      color: "text-laSalle",
      descripcion: <p>{t("experienciaExp.laSalle")}</p>,
    },
    {
      id: 1,
      tipo: 0,
      icono: (
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -start-3 ring-8 ring-white dark:ring-slate-900 dark:bg-green-900">
          <FaPhone className="text-green-400 text-sm" />
        </span>
      ),
      nombre: "Ayesa - Ibermatica",
      fechas: (
        <span className="capitalize">
          {t("meses.oct")} 2023 - {t("meses.jun")} 2024
        </span>
      ),

      skills: ["Jira", t("experienciaExp.cmsIntern")],
      badge: "bg-green-500/40 text-green-500",
      color: "text-cyan-500",
      descripcion: (
        <div>
          <p>{t("experienciaExp.ayesa")}</p>
          <p>{t("experienciaExp.ayesa2")}</p>
        </div>
      ),
    },
    {
      id: 2,
      tipo: 0,
      icono: (
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-slate-900 dark:bg-blue-900">
          <IoAirplane className="text-blue-400 text-xs " />
        </span>
      ),
      nombre: "Dit Gestion",
      fechas: (
        <span className="capitalize">
          {" "}
          {t("meses.jun")} 2024 - {t("actualidad")}{" "}
        </span>
      ),
      color: "text-laSalle",
      badge: "bg-dit/30 text-dit",
      skills: [
        "React JS",
        "Tailwind",
        "Flowbite",
        "Zustand",
        t("hooksPersonalizados"),
        "React Query",
        "Tanstack",
        "APIs",
      ],
      descripcion: <p>{t("experienciaExp.dit")}</p>,
    },
  ];

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-200 mb-5 capitalize">
        {t("experiencia")}
      </h2>
      <ol className="max-w-6xl relative border-s border-slate-200 dark:border-slate-700">
        {recorridog.reverse().map((item) => (
          <li key={item.id} className="mb-10 ms-6">
            {item.icono}
            <h3 className="flex items-center mb-1 text-lg font-semibold dark:text-white">
              {item.nombre}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
              {item.fechas}
            </time>
            <div className="mb-4 text-sm md:text-base font-normal text-slate-500 dark:text-slate-400">
              {item.descripcion}
            </div>
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
                className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-700"
              >
                <FaDownload className="me-2" />
                {t("experienciaExp.cv")}
              </a>
            )}
            {item.id === 0 && (
              <a
                href="/cartaRec.jpg"
                target="_blank"
                className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-700"
              >
                <FaDownload className="me-2" />
                {t("experienciaExp.cartaRec")}
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Experiencia;
