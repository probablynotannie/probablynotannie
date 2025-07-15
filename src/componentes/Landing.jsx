import Skills from "./landing/Skills";
import Header from "./Header";
import { useRef } from "react";
import Descripcion from "./landing/Descripcion";
import Experiencia from "./landing/Experiencia";
import Idiomas from "./landing/Idiomas";
function Landing() {
  const skillsRef = useRef(null);
  const homeRef = useRef(null);
  const expRef = useRef(null);
  return (
    <main>
      <Header homeRef={homeRef} skillsRef={skillsRef} expRef={expRef} />
      <section ref={homeRef}>
        <Descripcion />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={expRef}>
        <Experiencia />
        <Idiomas />
      </section>
    </main>
  );
}

export default Landing;
