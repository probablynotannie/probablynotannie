import Skills from "./landing/Skills";
import Header from "./Header";
import { useRef } from "react";
import Descripcion from "./landing/Descripcion";
import Idiomas from "./landing/Idiomas";
import Proyectos from "./landing/QuePido";
import Listado from "./proyectos/Listado";
import Prueba from "./landing/Prueba";
import Educacion from "./landing/Educacion";
function Landing() {
  const skillsRef = useRef(null);
  const homeRef = useRef(null);
  const expRef = useRef(null);
  const educacionRef = useRef(null);
  return (
    <>
      <Header homeRef={homeRef} skillsRef={skillsRef} expRef={expRef} />

      <main className="divide-y-2 divide-slate-700/30">
        <section ref={homeRef}>
          <Descripcion />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section
          className="px-24 p-10 flex justify-center w-full py-28"
          ref={expRef}
        >
          <Prueba />
        </section>
        <section className="py-28">
          <Educacion />
          <Idiomas />
        </section>
        <section className="px-24 p-10 flex justify-center w-full">
          <Listado />
        </section>
        <section className="px-24 p-10 flex justify-center w-full">
          <Proyectos />
        </section>
      </main>
    </>
  );
}

export default Landing;
