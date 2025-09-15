import React from "react";

const imagesData = [
  {
    src: "/logo.png",
    texto: "Busco",
    tags: [
      { text: "Feedback", color: "pink", top: 10, left: -20 },
      { text: "Salario competitivo", color: "pink", top: 24, right: -20 },
      { text: "Crecimiento", color: "pink", bottom: 5, left: -20 },
      { text: "Formación", color: "pink", bottom: 150, left: -80 },
      { text: "Estabilidad", color: "pink", bottom: 130, right: -40 },
      { text: "Teletrabajo", color: "pink", bottom: 15, right: 0 },
    ],
  },
  {
    src: "/costado.png",
    texto: "ofrezco",
    tags: [
      { text: "Compromiso", color: "green", top: 10, left: 50 },
      { text: "Organización", color: "green", top: 24, right: -20 },
      { text: "Adaptabilidad", color: "green", top: 130, right: -80 },
      { text: "Flexibilidad", color: "green", top: 170, left: -70 },
      { text: "Comunicación", color: "green", bottom: 5, left: 20 },
      { text: "Responsabilidad", color: "green", bottom: 10, right: -25 },
    ],
  },
];

const colorMap = {
  pink: "bg-pink-500 border-pink-400",
  green: "bg-green-500 border-green-400",
};

export default function QuePido() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-around gap-6 items-start ">
        {imagesData.map((imgData, idx) => (
          <div key={idx}>
            <h2 className="text-white text-4xl font-bold text-center">
              {imgData.texto}
            </h2>
            <div className="relative overflow-visible shadow-xl group bg-slate-950 rounded-full">
              <img
                src={imgData.src}
                alt={`image-${idx}`}
                className="h-[350px] w-[350px] object-contain rounded-2xl transform transition duration-700 group-hover:scale-105"
              />

              {imgData.tags.map((tag, tIdx) => {
                const positionStyle = {
                  top: tag.top !== undefined ? `${tag.top}px` : undefined,
                  bottom:
                    tag.bottom !== undefined ? `${tag.bottom}px` : undefined,
                  left: tag.left !== undefined ? `${tag.left}px` : undefined,
                  right: tag.right !== undefined ? `${tag.right}px` : undefined,
                };

                const colorClass =
                  colorMap[tag.color] || "bg-gray-700 border-gray-600";

                const animation = `slideIn 0.6s ease ${
                  tIdx * 0.1
                }s forwards, pulseGlow 4s ease-in-out infinite`;

                return (
                  <span
                    key={tIdx}
                    style={{ ...positionStyle, animation }}
                    className={`absolute z-10 text-white text-sm px-3 py-1 rounded-full shadow-lg opacity-0 ${colorClass} border`}
                  >
                    {tag.text}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(12px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 6px rgba(255,255,255,0.4), 0 0 12px rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 12px rgba(255,255,255,0.6), 0 0 24px rgba(255,255,255,0.3); }
        }
      `}</style>
    </div>
  );
}
