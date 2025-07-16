function Header({ homeRef, skillsRef, expRef }) {
  function handleScroll(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
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
            <button
              onClick={() => handleScroll(skillsRef)}
              className="cursor-pointer nav-link relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Skills
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </button>
            <button
              onClick={() => handleScroll(expRef)}
              className="cursor-pointer nav-link relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Experiencia
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </button>
            {/*   <button
              onClick={() => handleScroll(skillsRef)}
              className="cursor-pointer nav-link relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Proyectos
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </button>
            <button
              onClick={() => handleScroll(skillsRef)}
              className="cursor-pointer nav-link relative group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Twandikire
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </button> */}
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
