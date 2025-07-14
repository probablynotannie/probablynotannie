import { FaCode } from "react-icons/fa";

function Descripcion() {
  return (
    <section
      id="home"
      class="hero-3d min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
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
     
    </section>
  );
}

export default Descripcion;
