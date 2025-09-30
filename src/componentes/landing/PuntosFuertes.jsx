import { useTranslation } from "react-i18next";
function PuntosFuertes() {
  const { t } = useTranslation();
  return (
    <div className="col-span-1 lg:col-span-2 relative z-10 px-6 py-12 text-white flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-glow">
        {t("misPuntos.titulo")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="p-6 rounded-2xl bg-green-900/30 border border-green-700 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            {t("misPuntos.fortalezas.titulo")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>✅ {t("misPuntos.fortalezas.1")}</li>
            <li>✅ {t("misPuntos.fortalezas.2")}</li>
            <li>✅ {t("misPuntos.fortalezas.3")}</li>
            <li>✅ {t("misPuntos.fortalezas.4")}</li>
            <li>✅ {t("misPuntos.fortalezas.5")}</li>
            <li>✅ {t("misPuntos.fortalezas.6")}</li>
            <li>✅ {t("misPuntos.fortalezas.7")}</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-pink-900/30 border border-pink-700 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            {t("misPuntos.debilidades.titulo")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>⚠️ {t("misPuntos.debilidades.1")}</li>
            <li>⚠️ {t("misPuntos.debilidades.2")}</li>
            <li>⚠️ {t("misPuntos.debilidades.3")}</li>
            <li>⚠️ {t("misPuntos.debilidades.4")}</li>
            <li>⚠️ {t("misPuntos.debilidades.5")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PuntosFuertes;
