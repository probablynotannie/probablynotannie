import { useEffect, useState } from "react";
function Descripcion() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  const texts = [
    "Desarrolladora Front-End, aprendiendo y mejorando cada día.",
    "Componentes reutilizables, diseño responsive y atención al detalle.",
    "Siempre en busca de nuevos proyectos para innovar y seguir creciendo..",
  ];

  const period = 3000;
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      let nextDelta = isDeleting ? 30 : 60;

      if (!isDeleting && text === fullText) {
        nextDelta = period;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextDelta = 300;
      }
      setDelta(nextDelta);
    };

    const timer = setTimeout(handleTyping, delta);
    return () => clearTimeout(timer);
  }, [text, isDeleting, delta, loopNum, texts, period]);
  const contacto = [
    {
      texto: "631694540",
    },

    {
      texto: "probablynotannie@gmail.com",
    },
    {
      texto: "Donostia",
    },
  ];
  return (
    <section class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center">
          <div class="mb-8">
            <h1 class="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent glow animate-gradient-x">
              Anano Vachadze
            </h1>

            <h2 className="typewrite text-white min-h-8">
              <span className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 parallax-element ">
                {text}
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="grid  lg:grid-cols-3 gap-10 mx-10">
        {contacto.map((p) => (
          <div
            className={`group relative overflow-hidden flex justify-center items-center p-10 text-slate-300 bg-slate-800/30 border border-slate-700 rounded-lg`}
            key={p}
          >
            {p.icono}
            <p className="group-hover:text-pink-600 transition duration-300 group-hover:font-semibold">
              {p.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Descripcion;
