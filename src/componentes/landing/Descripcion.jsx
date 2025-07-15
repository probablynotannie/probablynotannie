function Descripcion() {
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
    <section class="hero-3d min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0" id="hero3d"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center">
          <div class="mb-8">
            <h1 class="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent glow animate-gradient-x">
              Anano Vachadze
            </h1>
            <div
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              data-speed="0.5"
            >
              <span class="typing-text">Desarrolladora front-end</span>
            </div>
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
