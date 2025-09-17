import React from "react";

function Footer() {
  return (
    <div className="min-h-[10vh] bg-black/50 border-t border-slate-800/60 flex justify-between items-center px-6">
      <p className="text-gray-600">
        &copy; 2025 Anano Vachadze. Todos los derechos reservados.
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
