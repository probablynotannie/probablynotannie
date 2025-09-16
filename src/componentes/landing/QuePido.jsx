const imagesData = [
  {
    id: 0,
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
    id: 1,
    src: "/costado.png",
    texto: "Ofrezco",
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

export default function QuePidoOrbs() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 relative overflow-hidden bg-black">
      {/* --- Continuous comets in background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
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
          className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden"
        >
          {/* Orb glow */}
          <div
            className={`absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-orb 
              ${imgData.id === 0 ? "bg-pink-500/40" : "bg-green-500/40"}`}
          />

          <h2 className="text-white text-4xl font-bold mb-6 z-10 animate-glow">
            {imgData.texto}
          </h2>

          <div className="relative overflow-visible shadow-xl group rounded-full flex items-center justify-center z-10">
            <img
              src={imgData.src}
              alt={imgData.texto}
              className="h-[320px] w-[320px] md:h-[360px] md:w-[360px] object-contain rounded-full transform transition duration-700 group-hover:scale-105"
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
                  className={`absolute z-10 text-white text-sm px-3 py-1 rounded-full shadow-lg opacity-0 ${colorClass} border backdrop-blur-sm`}
                >
                  {tag.text}
                </span>
              );
            })}
          </div>
        </div>
      ))}

      <style>{`
        /* Orb pulse animation */
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }
        .animate-orb {
          animation: orbPulse 12s ease-in-out infinite;
        }

        /* Glow text animation */
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 6px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.9); }
        }
        .animate-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }

        /* Slide-in for tags */
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(12px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 6px rgba(255,255,255,0.4), 0 0 12px rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 12px rgba(255,255,255,0.6), 0 0 24px rgba(255,255,255,0.3); }
        }

        /* Comet animation (continuous loop) */
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
        .comet {
          animation: cometMove linear infinite;
        }
      `}</style>
    </div>
  );
}
