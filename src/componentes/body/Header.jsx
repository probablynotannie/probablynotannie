import { FaCode } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
function Header({
  homeRef,
  skillsRef,
  expRef,
  educacionRef,
  proyectosRef,
  quePidoRef,
}) {
  function handleScroll(ref) {
    const headerOffset = 80;
    const elementPosition =
      ref.current?.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  const secciones = [
    {
      id: 0,
      texto: "Skills",
      icono: <FaCode className="text-pink-400" />,
      ref: skillsRef,
    },
    {
      id: 1,
      texto: "Educación",
      icono: <FaSchool className="text-cyan-400" />,
      ref: educacionRef,
    },
    {
      id: 2,
      texto: "Experiencia",
      icono: <FaTimeline className="text-indigo-400" />,

      ref: expRef,
    },
    {
      id: 3,
      texto: "Proyectos",
      icono: <FaSuitcase className="text-red-400" />,
      ref: proyectosRef,
    },
    {
      id: 4,
      texto: "Conoceme",
      icono: <img src="/logo.png" className="w-8 h-8 cursor-pointer" />,
      ref: quePidoRef,
    },
  ];
  return (
    <nav className="shadow-xl shadow-indigo-800/20 backdrop-blur-lg tw-bg-slate-900 border-1 border-slate-100/20 fixed w-full z-50 transition-all duration-500 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
              <button
                onClick={() => handleScroll(homeRef)}
                className="flex items-center"
              >
                <span className="animate-bounce mr-2">🚀</span>
                <span className="typing-animation">Anano Vachadze</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-8 text-slate-400">
            {secciones.map((seccion) => (
              <div key={seccion.id} className="relative group">
                <button
                  onClick={() => handleScroll(seccion.ref)}
                  className="cursor-pointer flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  {seccion.icono}
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-10 whitespace-nowrap rounded bg-pink-500 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {seccion.texto}
                </span>
              </div>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              id="mobileMenuButton"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
