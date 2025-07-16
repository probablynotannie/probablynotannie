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
    <main className="">
      <Header homeRef={homeRef} skillsRef={skillsRef} expRef={expRef} />
      <section ref={homeRef}>
        <Descripcion />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={expRef}>
        <Experiencia />
      </section>
      <section ref={educacionRef}>
        <Educacion />
        <Idiomas />
      </section>
    </main>
  );
}

export default Landing;
