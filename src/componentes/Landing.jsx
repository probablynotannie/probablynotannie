import Skills from "./landing/Skills";
import Header from "./Header";
import { useRef } from "react";
import Descripcion from "./landing/Descripcion";
import Experiencia from "./landing/Experiencia";
import Idiomas from "./landing/Idiomas";
import Educacion from "./landing/Educacion";
import Proyectos from "./landing/Proyectos";
import Particulos from "./body/Particles";
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
        <section className="flex justify-center p-10" ref={educacionRef}>
          <div className="container  flex-col grid grid-cols-4">
            <div className="col-span-1">
              <Idiomas />
            </div>{" "}
            <div className="col-span-3">
              <Educacion />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Landing;
