import Skills from "./landing/Skills";
import Header from "./Header";
import { useRef } from "react";
import Descripcion from "./landing/Descripcion";
import Experiencia from "./landing/Experiencia";
import Idiomas from "./landing/Idiomas";
import Proyectos from "./landing/Proyectos";
import Particulos from "./body/Particles";
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
        <section ref={expRef}>
          <Experiencia />
        </section>
        <section className="flex flex-col justify-center" ref={educacionRef}>
          <Educacion />
          <Idiomas />
        </section>
      </main>
    </>
  );
}

export default Landing;
