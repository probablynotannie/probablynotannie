const imagesData = [
  {
    id: 0,
    src: "/logo.png",
    texto: "Busco",
    tags: [
      { text: "Feedback", color: "pink", top: 10, left: 15 },
      { text: "Salario competitivo", color: "pink", top: 20, right: 5 },
      { text: "Crecimiento", color: "pink", bottom: 13, left: 10 },
      { text: "Respeto", color: "pink", bottom: 50, left: 0 },
      { text: "Estabilidad", color: "pink", bottom: 40, right: 2 },
      { text: "Teletrabajo", color: "pink", bottom: 12, right: 16 },
      { text: "Jornada intensiva", color: "pink", bottom: -5, right: 40 },
    ],
  },
  {
    id: 1,
    src: "/costado.png",
    texto: "Ofrezco",
    tags: [
      { text: "Compromiso", color: "green", top: 24, left: 10 },
      { text: "Organización", color: "green", top: 20, right: 20 },
      { text: "Adaptabilidad", color: "green", top: 45, right: 6 },
      { text: "Flexibilidad", color: "green", top: 55, left: 3 },
      { text: "Comunicación", color: "green", bottom: 8, left: 20 },
      { text: "Responsabilidad", color: "green", bottom: 14, right: 10 },
    ],
  },
];

const colorMap = {
  pink: "bg-pink-500 border-pink-400",
  green: "bg-green-500 border-green-400",
};

export default function QuePidoOrbs() {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-16 bg-gradient-to-b from-pink-500/80 to-transparent rounded-full blur-sm comet"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + (i % 3) * 2}s`,
            }}
          />
        ))}
      </div>

      {imagesData.map((imgData) => (
        <div
          key={imgData.id}
          className="relative flex flex-col items-center justify-center text-center lg:min-h-screen min-h-[60vh] px-4 md:px-8 overflow-hidden"
        >
          <div
            className={`absolute w-3/4 max-w-[400px] aspect-square rounded-full blur-3xl opacity-30 animate-orb 
              ${imgData.id === 0 ? "bg-pink-500/40" : "bg-green-500/40"}`}
          />

          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 z-10 animate-glow">
            {imgData.texto}
          </h2>

          <div className="relative overflow-visible shadow-xl group rounded-full flex items-center justify-center z-10">
            <img
              src={imgData.src}
              alt={imgData.texto}
              className="w-3/4 max-w-[500px] aspect-square object-contain rounded-full transform transition duration-700 group-hover:scale-105"
            />

            {imgData.tags.map((tag, tIdx) => {
              const positionStyle = {
                top: tag.top !== undefined ? `${tag.top}%` : undefined,
                bottom: tag.bottom !== undefined ? `${tag.bottom}%` : undefined,
                left: tag.left !== undefined ? `${tag.left}%` : undefined,
                right: tag.right !== undefined ? `${tag.right}%` : undefined,
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
                  className={`absolute z-10 text-white text-xs xs:text-sm px-3 py-1 rounded-full shadow-lg opacity-0 ${colorClass} border backdrop-blur-sm`}
                >
                  {tag.text}
                </span>
              );
            })}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
        .animate-orb { animation: orbPulse 12s ease-in-out infinite; }

        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 6px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.9); }
        }
        .animate-glow { animation: glowPulse 3s ease-in-out infinite; }

        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(12px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 6px rgba(255,255,255,0.4), 0 0 12px rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 12px rgba(255,255,255,0.6), 0 0 24px rgba(255,255,255,0.3); }
        }

        @keyframes cometMove {
          0% {
            transform: translateX(-150%) translateY(-150%) rotate(45deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateX(150%) translateY(150%) rotate(45deg);
            opacity: 0;
          }
        }
        .comet { animation: cometMove linear infinite; }
      `}</style>
    </div>
  );
}
