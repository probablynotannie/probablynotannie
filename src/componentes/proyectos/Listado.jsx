import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function Listado() {
  const { t } = useTranslation();
  const proyectos = [
    {
      id: 0,
      visible: 1,
      url: "https://volt-green.vercel.app",
      texto: "Volt",
      descripcion: t("misProyectos.volt.descBreve"),
      info: t("misProyectos.volt.descripcion"),
      imgLight: "/proyectos/volt/volt.png",
    },
    {
      id: 1,
      visible: 1,
      url: "https://motoreslocal.vercel.app",
      texto: "Dit Gestión",
      descripcion: t("misProyectos.dit.descBreve"),
      info: t("misProyectos.dit.descripcion"),
      imgLight: "/proyectos/dit/image.png",
      imgDark: "/proyectos/dit/dit.png",
    },
    {
      id: 2,
      visible: 1,
      url: "https://cargadortabs.vercel.app",
      texto: "Tabs agencias",
      descripcion: t("misProyectos.tabs.descBreve"),
      info: t("misProyectos.tabs.descripcion"),
      imgLight: "/proyectos/tabs/light.png",
      imgDark: "/proyectos/tabs/dark.png",
    },
  ];

  const [imageModes, setImageModes] = useState(
    proyectos.reduce((acc, p) => {
      if (p.imgLight && p.imgDark) acc[p.id] = "dark";
      return acc;
    }, {})
  );

  const toggleImageMode = (id) => {
    setImageModes((prev) => ({
      ...prev,
      [id]: prev[id] === "light" ? "dark" : "light",
    }));
  };

  return (
    <div className=" flex flex-col gap-10 justify-center">
      <div>
        <h2 className="text-5xl font-bold text-white capitalize">
          {t("misProyectos.titulo")}
        </h2>
        <span className="text-slate-400">{t("misProyectos.subTitulo")}</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 py-4 overflow-x-auto">
        {proyectos.map((p) => {
          const hasVariants = p.imgLight && p.imgDark;
          const mode = imageModes[p.id] || "light";
          return (
            <a
              href={p.url}
              target="_blank"
              key={p.id}
              className={`relative flex-none overflow-hidden shadow-lg select-none rounded-xl
                ${p.visible === 0 && "hidden"}
                `}
            >
              <div className="w-full h-[350px] overflow-hidden group rounded-t-xl relative">
                <img
                  src={
                    hasVariants
                      ? mode === "light"
                        ? p.imgLight
                        : p.imgDark
                      : p.imgLight
                  }
                  loading="lazy"
                  className="object-cover object-top w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-500 opacity-0 bg-black/60 group-hover:opacity-100">
                  <p className="text-xl text-white">{p.info}</p>
                </div>
              </div>
              <div className="p-3 bg-gray-900/70 rounded-b-xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">{p.texto}</h2>
                  {hasVariants && (
                    <div onClick={(e) => e.preventDefault()}>
                      {mode === "light" ? (
                        <FaSun
                          className="p-1 text-3xl text-orange-100 bg-orange-400 rounded-full cursor-pointer"
                          onClick={() => toggleImageMode(p.id)}
                        />
                      ) : (
                        <FaMoon
                          className="p-1 text-3xl text-white rounded-full cursor-pointer bg-slate-700"
                          onClick={() => toggleImageMode(p.id)}
                        />
                      )}
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-300">{p.descripcion}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Listado;
