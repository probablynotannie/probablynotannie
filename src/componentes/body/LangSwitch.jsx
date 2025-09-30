import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-1 rounded bg-slate-900 text-white hover:bg-slate-800 text-sm"
      >
        {i18n.language.toUpperCase()} ▼
      </button>

      {open && (
        <div className="absolute mt-2 w-24 bg-pink-500 shadow-lg rounded-md text-white text-sm z-50 overflow-hidden">
          <ul className="py-1">
            <li>
              <button
                className="w-full text-left px-3 py-1 hover:bg-pink-600"
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-3 py-1 hover:bg-pink-600"
                onClick={() => changeLanguage("es")}
              >
                Español
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
