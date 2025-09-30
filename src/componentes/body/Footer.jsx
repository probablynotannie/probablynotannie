import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[10vh] py-5 p-2 flex-wrap bg-black/50 border-t border-slate-800/60 flex justify-between items-center px-6">
      <p className="text-gray-600">
        &copy; 2025 Anano Vachadze. {t("footer.rights")}
      </p>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/probablynotannie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-white cursor-pointer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Footer;
