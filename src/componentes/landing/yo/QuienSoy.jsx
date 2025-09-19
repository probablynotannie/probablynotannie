function QuienSoy() {
  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden ">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none font-mono">
        <div className="absolute text-xs leading-relaxed text-left text-green-400 opacity-40 top-10 left-6">
          {"{"} <br />
          &nbsp;&nbsp;<span className="text-pink-400">"name"</span>:{" "}
          <span className="text-yellow-400">"Anano"</span>, <br />
          &nbsp;&nbsp;<span className="text-pink-400">"age"</span>:{" "}
          <span className="text-blue-400">27</span>, <br />
          &nbsp;&nbsp;<span className="text-pink-400">"role"</span>:{" "}
          <span className="text-yellow-400">"Frontend Developer"</span>, <br />
          &nbsp;&nbsp;<span className="text-pink-400">"hobbies"</span>:{" "}
          <span className="text-yellow-400">
            ["VideoGames","Eat","Programming"]
          </span>{" "}
          <br />
          {"}"}
        </div>
        <p className="absolute text-green-400 opacity-20 text-xs top-10 right-5 hidden md:block animate-pulse">
          {"{ code: 'developer', passion: 'frontend' }"}
        </p>
        <p className="absolute text-pink-400 opacity-30 text-xs top-1/2 right-10 hidden lg:block delay-500">
          {"<div>Dreamer & Builder</div>"}
        </p>
        <p className="absolute text-indigo-400 opacity-25 text-xs bottom-20 left-1/3  animate-glow">
          {"function solveProblem() { return 'Challenge Accepted'; }"}
        </p>
        <p className="absolute text-yellow-400 opacity-20 text-xs bottom-10 right-1/4 hidden lg:block animate-pulse">
          {"// TODO: Keep learning & building 🚀"}
        </p>
        <p className="absolute text-blue-400 opacity-20 text-xs top-1/4 right-1/4">
          {"<ReactDeveloper mindset='growth' />"}
        </p>
        <p className="absolute text-emerald-400 opacity-20 text-xs top-1/3 left-1/2 animate-pulse">
          {'const skills = ["JS","React","Tailwind","Node"];'}
        </p>
        <p className="absolute text-purple-400 opacity-25 text-xs top-1/4 left-1/3 hidden lg:block">
          {"<Passion project='Anano :)' />"}
        </p>
        <p className="absolute text-pink-300 opacity-20 text-xs bottom-1/3 right-1/3 animate-pulse">
          {"for(let i=0;i<10;i++){ console.log('Learning'); }"}
        </p>
        <p className="absolute text-teal-400 opacity-20 text-xs top-2/3 left-1/4 animate-glow">
          {"const goals = ['Grow', 'Teach', 'Build'];"}
        </p>
        <p className="absolute text-orange-400 opacity-20 text-xs bottom-1/4 left-2/3 animate-pulse">
          {"// Always curious"}
        </p>
      </div>
      <div className="relative z-10 max-w-2xl text-center px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 backdrop-blur-md border border-pink-400/30 shadow-xl animate-fadeIn">
          <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
            Soy <span className="text-pink-400 font-semibold">Anano</span>, de
            Georgia 🌍. Una de mis grandes metas es vivir en un entorno{" "}
            <span className="text-green-500 font-semibold">rural</span> y estoy
            trabajando para hacerlo realidad. Busco un{" "}
            <span className="text-purple-400 font-semibold">
              trabajo estable con posibilidad de teletrabajo
            </span>{" "}
            que me permita crecer como desarrolladora y, al mismo tiempo,
            cumplir este sueño. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuienSoy;
