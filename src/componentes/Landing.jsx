import Skills from "./landing/Skills";
import Header from "./body/Header";
import { useRef } from "react";
import Descripcion from "./landing/Descripcion";
import Idiomas from "./landing/Idiomas";
import QuePido from "./landing/QuePido";
import Listado from "./proyectos/Listado";
import Experiencia from "./landing/Experiencia";
import Educacion from "./landing/Educacion";
function Landing() {
  const skillsRef = useRef(null);
  const homeRef = useRef(null);
  const expRef = useRef(null);
  const educacionRef = useRef(null);
  const proyectosRef = useRef(null);
  const quePidoRef = useRef(null);
  return (
    <>
      <Header
        homeRef={homeRef}
        skillsRef={skillsRef}
        expRef={expRef}
        educacionRef={educacionRef}
        proyectosRef={proyectosRef}
        quePidoRef={quePidoRef}
      />
      <main className="divide-y-2 divide-slate-700/30 select-none">
        <section ref={homeRef}>
          <Descripcion />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={educacionRef} className="py-28 min-h-screen">
          <Educacion />
          <Idiomas />
        </section>
        <section
          ref={expRef}
          className="px-24 p-10 flex justify-center w-full py-28"
        >
          <Experiencia />
        </section>
        <section
          ref={proyectosRef}
          className="px-24 p-10 flex justify-center w-full"
        >
          <Listado />
        </section>
        <section ref={quePidoRef} className="flex justify-center w-full">
          <QuePido />
        </section>
      </main>
    </>
  );
}

export default Landing;
